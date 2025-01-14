using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Autism.Common.DTOs.Request.NguoiDung
{
    public class Request_AddNguoiKiemTraDTO
    {
        [Required]
        [MinLength(6)]
        [MaxLength(300)]
        public string? HoTen { get; set; }
        [Required]
        public DateTime? NgaySinh { get; set; }
    }
}
