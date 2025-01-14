using Autism.Common.DTOs.Request.BaiQuizz;
using Autism.Common.DTOs.Request.NguoiDung;
using Autism.Service;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Autism.WebAPI.Controllers
{
    [Route("api")]
    [ApiController]
    public class NguoiKiemTraController : ControllerBase
    {
        private readonly INguoiKiemTraService _nguoiKiemTraService;
        public NguoiKiemTraController(INguoiKiemTraService nguoiKiemTraService)
        {
            _nguoiKiemTraService = nguoiKiemTraService;
        }
        [HttpPost("add")]
        public async Task<IActionResult> AddNguoiKiemTraAsync(Request_AddNguoiKiemTraDTO? request)
        {
            var rs = await _nguoiKiemTraService.AddNguoiKiemTraAsync(request);
            return StatusCode(rs.HttpStatusCode, new { message = rs.Message });
        }
    }
}
