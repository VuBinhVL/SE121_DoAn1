using Autism.Common.ConstValue;
using Autism.Common.DTOs.Request.BaiQuizz;
using Autism.Common.DTOs.Request.NguoiDung;
using Autism.Service;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;


namespace Autism.WebAPI.Controllers.Customer
{

    [Area("CUSTOMER")]
    [Route("api/baiquizz")]
    [ApiController]
    public class BaiQuizzController : ControllerBase
    {
        private readonly IBaiQuizzService _baiQuizzService;
        public BaiQuizzController(IBaiQuizzService baiQuizzService)
        {
            _baiQuizzService = baiQuizzService;
        }

        [HttpGet("cau-hoi-bai-quizz")]
        public async Task<IActionResult> HienThiBaiQuizzAsync()
        {
            try
            {
                var rs = await _baiQuizzService.HienThiBaiQuizz();
                return Ok(rs);
            }
            catch (Exception e)
            {
                return StatusCode(HttpStatusCode.InternalServerError, HttpStatusCode.HeThongGapSuCo);
            }
        }
        [HttpPost("save")]
        public async Task<IActionResult> SaveQuizzHistory(Request_SaveQuizHistoryDTO? request)
        {
            var rs = await _baiQuizzService.SaveQuizzHistory(request);
            return StatusCode(rs.HttpStatusCode, new { message = rs.Message });
        }
        [HttpGet("lich-su-lam-bai")]
        public async Task<IActionResult> GetListLichSuLamBai()
        {
            try
            {
                var rs = await _baiQuizzService.GetListLichSuLamBai(HttpContext);
                return Ok(rs);
            }
            catch (Exception e)
            {
                return StatusCode(HttpStatusCode.InternalServerError, HttpStatusCode.HeThongGapSuCo);
            }
        }
        [HttpGet("chi-tiet-lich-su-lam-bai")]
        public async Task<IActionResult> GetChiTietLamBaiQuizz(int idBaiQuizz)
        {
            try
            {
                var rs = await _baiQuizzService.GetChiTietLamBaiQuizz(idBaiQuizz);
                return Ok(rs);
            }
            catch (Exception e)
            {
                return StatusCode(HttpStatusCode.InternalServerError, HttpStatusCode.HeThongGapSuCo);
            }
        }
    }
}
