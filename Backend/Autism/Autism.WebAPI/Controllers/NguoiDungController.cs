﻿using Autism.Common.ConstValue;
using Autism.Common.DTOs.Request.NguoiDung;
using Autism.Service;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Autism.WebAPI.Areas.Customer
{
    [Route("api")]
    [ApiController]
    public class NguoiDungController : ControllerBase
    {

        private readonly INguoiDungService _nguoiDungService;
        public NguoiDungController(INguoiDungService nguoiDungService)
        {
            _nguoiDungService = nguoiDungService;
        }

        [HttpPost("register")]
        public async Task<IActionResult> RegisterAsync(Request_RegisterDTO data)
        {
            try
            {
                var rs = await _nguoiDungService.RegisterAsync(data);
                return StatusCode(rs.HttpStatusCode, new { message = rs.Message });
            }
            catch (Exception e)
            {
                return StatusCode(HttpStatusCode.InternalServerError, HttpStatusCode.HeThongGapSuCo);
            }
        }

        [HttpPost("login")]
        public async Task<IActionResult> LoginAsync(Request_LoginDTO data)
        {
            try
            {
                var rs = await _nguoiDungService.LoginAsync(data);
                if (rs.HttpStatusCode == HttpStatusCode.BadRequest)
                {
                    return StatusCode(rs.HttpStatusCode, new { message = rs.Message });
                }
                return StatusCode(rs.HttpStatusCode, new { roleName = rs.Message, token = rs.Token });
            }
            catch (Exception e)
            {
                return StatusCode(HttpStatusCode.InternalServerError, HttpStatusCode.HeThongGapSuCo);
            }
        }

        [HttpPost("forgot-password")]
        public async Task<IActionResult> ForgotPasswordAsync(Request_ForgotPasswordDTO data)
        {
            try
            {
                var rs = await _nguoiDungService.ForgotPasswordAsync(data);
                return StatusCode(rs.HttpStatusCode, new { message = rs.Message });
            }
            catch (Exception e)
            {
                return StatusCode(HttpStatusCode.InternalServerError, HttpStatusCode.HeThongGapSuCo);
            }
        }

        [HttpPost("change-password")]
        public async Task<IActionResult> ChangePasswordAsync(Request_ChangePasswordDTO data)
        {
            try
            {
                var rs = await _nguoiDungService.ChangePasswordAsync(HttpContext, data);
                return StatusCode(rs.HttpStatusCode, new { message = rs.Message });
            }
            catch (Exception e)
            {
                return StatusCode(HttpStatusCode.InternalServerError, HttpStatusCode.HeThongGapSuCo);
            }
        }

        [HttpPut("update-info")]
        public async Task<IActionResult> UpdateThongTinCaNhanAsync(Request_UpdateThongTinCaNhanDTO data)
        {
            try
            {
                var rs = await _nguoiDungService.UpdateThongTinCaNhanAsync(HttpContext, data);
                return StatusCode(rs.HttpStatusCode, new { message = rs.Message });
            }
            catch (Exception e)
            {
                return StatusCode(HttpStatusCode.InternalServerError, HttpStatusCode.HeThongGapSuCo);
            }
        }
        [HttpGet("info")]
        public async Task<IActionResult> HienThiThongTinNguoiDungAsync()
        {
            try
            {
                var rs = await _nguoiDungService.HienThiThongTinNguoiDungAsync(HttpContext);
                return Ok(rs);
            }
            catch (Exception e)
            {
                return StatusCode(HttpStatusCode.InternalServerError, HttpStatusCode.HeThongGapSuCo);
            }
        }
    }
}
