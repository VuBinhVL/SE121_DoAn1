using Autism.DataAccess;
using Microsoft.EntityFrameworkCore;
using Autism.DataAccess.Infrastructure;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Autism.Common.Helpers;
using Autism.Service;
using Autism.DataAccess.Repositories;

var builder = WebApplication.CreateBuilder(args);


//Add DbContext
builder.Services.AddDbContext<AutismContext>(options =>
        options.UseSqlServer(builder.Configuration.GetConnectionString("MyDbConnectString")));

// Đăng ký DbFactory và UnitOfWork
builder.Services.AddScoped<IDbFactory, DbFactory>();
builder.Services.AddScoped<IUnitOfWork, UnitOfWork>();

// Đăng kí repository
builder.Services.AddScoped<INguoiDungRepository, NguoiDungRepository>();
builder.Services.AddScoped<IBaiQuizzRepository, BaiQuizzRepository>();
builder.Services.AddScoped<ICauHoiBaiQuizzRepository, CauHoiBaiQuizzRepository>();
builder.Services.AddScoped<IChiTietBaiQuizzRepository, ChiTietBaiQuizzRepository>();
builder.Services.AddScoped<IDapAnBaiQuizzRepository, DapAnBaiQuizzRepository>();
builder.Services.AddScoped<IDapAnBaiQuizzDaChonRepository, DapAnBaiQuizzDaChonRepository>();
builder.Services.AddScoped<INguoiKiemTraRepository, NguoiKiemTraRepository>();


// Đăng kí service
builder.Services.AddScoped<INguoiDungService, NguoiDungService>();
builder.Services.AddScoped<IBaiQuizzService, BaiQuizzService>();
builder.Services.AddScoped<INguoiKiemTraService, NguoiKiemTraService>();


//bổ trợ phần token
builder.Services.AddMemoryCache();
builder.Services.AddSingleton<TokenStore>();


//add jwt
builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
})
.AddJwtBearer(options =>
{
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = true, // Yêu cầu Kiểm tra Issuer
        ValidateAudience = false, // Không cần Kiểm tra Audience
        ValidateLifetime = true, // Yêu cầu Kiểm tra thời hạn của token
        ClockSkew = TimeSpan.Zero, // Loại bỏ thời gian lệch,check thời hạn thêm chính xác
        ValidateIssuerSigningKey = true, // Yêu cầu Kiểm tra Signature
        ValidIssuer = builder.Configuration["Jwt:Issuer"], // Cấu hình Issuer
                                                           // ValidAudience = builder.Configuration["Jwt:Audience"], // Cấu hình Audience
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"])),
    };

    options.Events = new JwtBearerEvents
    {
        OnAuthenticationFailed = context =>
        {
            if (context.Exception.GetType() == typeof(SecurityTokenExpiredException))
            {
                //context.Response.Headers.Add("Token-Expired", "true");
            }
            return Task.CompletedTask;
        }
    };
});


// Add services to the container.
//builder.Services.AddControllers();
builder.Services.AddControllers()
    .ConfigureApiBehaviorOptions(options =>
    {
        options.InvalidModelStateResponseFactory = context =>
        {
            var errors = context.ModelState
                .Where(e => e.Value.Errors.Count > 0)
                .ToDictionary(
                    kvp => kvp.Key,
                    kvp => kvp.Value.Errors.Select(e => e.ErrorMessage).ToArray()
                );

            // Tùy chỉnh JSON trả về
            //var response = new
            //{
            //    message="valid-by-modelstate",
            //    errors 
            //};

            var response = new
            {
                message = errors.Any() ? errors.First().Value[0] : "Có lỗi xảy ra"
            };

            return new BadRequestObjectResult(response);
        };
    });



// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(builder =>
    {
        builder.AllowAnyOrigin() // Cho phép bất kỳ nguồn gốc nào
               .AllowAnyHeader() // Cho phép bất kỳ header nào
               .AllowAnyMethod(); // Cho phép bất kỳ phương thức HTTP nào
    });
});

//dịch vụ mail
builder.Services.Configure<MailSettings>(builder.Configuration.GetSection("MailSettings"));
builder.Services.AddScoped<IMailService, MailService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseRouting();
app.UseCors(); // Áp dụng CORS

app.UseAuthentication();
//app.UseMiddleware<TokenValidationMiddleware>();//phải dùng cái này ở dưới authen vì authen có nhiệm vụ handle token
app.UseAuthorization();

app.UseEndpoints(endpoints =>
{
    // Đăng ký cho API Controllers
    endpoints.MapControllers();

    // Đăng ký cho area CUSTOMER
    endpoints.MapAreaControllerRoute(
        name: "customer_area",
        areaName: "CUSTOMER",
        pattern: "CUSTOMER/{controller=Home}/{action=Index}/{id?}"
    );

    // Đăng ký cho area ADMIN
    endpoints.MapAreaControllerRoute(
        name: "admin_area",
        areaName: "ADMIN",
        pattern: "ADMIN/{controller=Home}/{action=Index}/{id?}"
    );

    // Route mặc định
    endpoints.MapControllerRoute(
        name: "default",
        pattern: "{controller=Home}/{action=Index}/{id?}"
    );
});

app.Run();
