using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Autism.Common.DTOs.Response.KiemTraAnh
{
    public class Response_LichSuKiemTraAnhDTO
    {
        public List<LichSuKiemTraAnhDTO> lichSuKiemTraAnhs { get; set; }
    }
    public class LichSuKiemTraAnhDTO
    {
        public string TenNguoiKiemTra { get; set; }

        public DateTime NgayKiemTra { get; set; }

        public string KetQua { get; set; }

        public double AutismProb { get; set; }

        public double Non_AutismProb { get; set; }

        public string Image { get; set; }
    }

}
