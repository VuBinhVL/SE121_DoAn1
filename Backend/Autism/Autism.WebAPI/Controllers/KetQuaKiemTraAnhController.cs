using Autism.Common.ConstValue;
using Autism.Common.DTOs.Request.BaiQuizz;
using Autism.Common.DTOs.Request.KiemTraAnh;
using Autism.Service;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Autism.WebAPI.Controllers
{
    [Route("api/kiem-tra-anh")]
    [ApiController]
    public class KetQuaKiemTraAnhController : ControllerBase
    {
        private readonly IKetQuaKiemTraAnhService _kiemTraAnhService;
        public KetQuaKiemTraAnhController(IKetQuaKiemTraAnhService kiemTraAnhService)
        {
            _kiemTraAnhService = kiemTraAnhService;
        }
        [HttpPost("save")]
        public async Task<IActionResult> SaveImageHistory(Request_SaveImageHistoryDTO? request)
        {
            var rs = await _kiemTraAnhService.SaveImageHistory(request);
            return StatusCode(rs.HttpStatusCode, new { message = rs.Message });
        }
        [HttpGet("lich-su-kiem-tra-anh")]
        public async Task<IActionResult> GetListLichSuKiemTraAnhAsync()
        {
            try
            {
                var rs = await _kiemTraAnhService.GetListLichSuKiemTraAnhAsync(HttpContext);
                return Ok(rs);
            }
            catch (Exception e)
            {
                return StatusCode(HttpStatusCode.InternalServerError, HttpStatusCode.HeThongGapSuCo);
            }
        }
    }
}
