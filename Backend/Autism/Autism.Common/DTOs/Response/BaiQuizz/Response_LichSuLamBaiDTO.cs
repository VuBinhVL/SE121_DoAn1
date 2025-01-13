using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Autism.Common.DTOs.Response.BaiQuizz
{
    public class Response_LichSuLamBaiDTO
    {
        public List<LichSuLamBaiDTO> LichSuLamBai { get; set; }
    }
    public class LichSuLamBaiDTO
    {
        public int IdBaiQuizz { get; set; } 
        public string TenNguoiKiemTra { get; set; }
        public DateTime NgayLamQuizz { get; set; }
        public int TongDiem { get; set; }
    }
}
