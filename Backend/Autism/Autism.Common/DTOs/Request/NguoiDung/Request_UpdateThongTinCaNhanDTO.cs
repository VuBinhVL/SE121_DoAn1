﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Autism.Common.DTOs.Request.NguoiDung
{
    public class Request_UpdateThongTinCaNhanDTO
    {

        [MaxLength(1000, ErrorMessage = "Đường dẫn hình ảnh quá dài")]
        public string? Image { get; set; }

        [Required(ErrorMessage = "Họ tên không được để trống")]
        [MinLength(6, ErrorMessage = "Họ tên ít nhất 6 kí tự")]
        [MaxLength(300, ErrorMessage = "Họ tên nhiều nhất 300 kí tự")]
        public string? HoTen { get; set; }

        [Required(ErrorMessage = "Email không được để trống")]
        [EmailAddress(ErrorMessage = "Email không hợp lệ")]
        [MaxLength(300, ErrorMessage = "Email nhiều nhất 300 kí tự")]
        public string? Email { get; set; }
        public string? GioiTinh { get; set; }
        public DateTime? NgaySinh { get; set; }
    }
}
