using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Autism.Common.DTOs.Request.KiemTraAnh
{
    public class Request_SaveImageHistoryDTO
    {
        [Required]
        public int NguoiDungId { get; set; }

        [Required]
        public DateTime NgayKiemTra { get; set; } 

        [Required]
        public int NguoiKiemTraId { get; set; } 
        [Required]
        public string KetQua { get; set; }
        [Required]
        public double AutismProb { get; set; }
        [Required]
        public double Non_AutismProb { get; set; }
        [Required]
        public string Image { get; set; }

    }
}
