using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Autism.DataAccess.Models
{
    public class BaiQuizz
    {
        [Key]
        public int BaiQuizzId { get; set; }
        [Required]
        public int NguoiDungId { get; set; }
        [Required]
        [ForeignKey(nameof(NguoiDungId))]
        public NguoiDung? NguoiDung { get; set; }

        [Required]
        public DateTime NgayLamQuizz {  get; set; }

        [Required]
        public int NguoiKiemTraId { get; set; }
        [Required]
        [ForeignKey(nameof(NguoiKiemTraId))]
        public NguoiKiemTra? NguoiKiemTra { get; set; }
        public int TongDiem {  get; set; }

        public IEnumerable<ChiTietBaiQuizz>? ChiTietBaiQuizzs { get; set; }
    }
}
