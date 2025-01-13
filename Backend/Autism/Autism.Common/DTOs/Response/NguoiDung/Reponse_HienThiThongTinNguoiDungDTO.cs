using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Autism.Common.DTOs.Response.NguoiDung
{
    public class Reponse_HienThiThongTinNguoiDungDTO
    {
        public string TenNguoiDung { get; set; }
        public string Email { get; set; }
        public string GioiTinh { get; set; }
        public DateTime? NgaySinh { get; set; }
        public string Image { get; set; }
    }
}
