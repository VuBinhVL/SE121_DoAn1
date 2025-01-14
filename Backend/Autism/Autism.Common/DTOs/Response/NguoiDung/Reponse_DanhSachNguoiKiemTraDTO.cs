using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Autism.Common.DTOs.Response.NguoiDung
{
    public class Reponse_DanhSachNguoiKiemTraDTO
    {
        public List<NguoiKiemTraDTO> listNguoiKiemTra {  get; set; }
    }
    public class NguoiKiemTraDTO
    {
        public int NguoiKiemTraId { get; set; }
        public string HoTen { get; set; }
        public DateTime? NgaySinh { get; set; }
    }
}
