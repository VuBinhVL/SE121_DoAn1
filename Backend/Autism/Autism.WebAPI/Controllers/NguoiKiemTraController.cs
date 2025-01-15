using Autism.Common.ConstValue;
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
        [HttpPost("add-nguoi-kiem-tra")]
        public async Task<IActionResult> AddNguoiKiemTraAsync(Request_AddNguoiKiemTraDTO? request)
        {
            var rs = await _nguoiKiemTraService.AddNguoiKiemTraAsync(request);
            return Ok(rs);
        }
        [HttpGet("get-list-nguoi-kiem-tra")]
        public async Task<IActionResult> GetListNguoiKiemTra()
        {
            try
            {
                var rs = await _nguoiKiemTraService.GetListNguoiKiemTraAsync();
                return Ok(rs);
            }
            catch (Exception e)
            {
                return StatusCode(HttpStatusCode.InternalServerError, HttpStatusCode.HeThongGapSuCo);
            }
        }
    }
}
