using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Autism.DataAccess.Models
{
    public class NguoiKiemTra
    {
        [Key]
        public int NguoiKiemTraId { get; set; }
        [Required]
        [MinLength(6)]
        [MaxLength(300)]
        public string? HoTen { get; set; }
        [Required]
        public DateTime? NgaySinh { get; set; }
        [Required]
        public string Image { get; set; }
        public IEnumerable<KetQuaKiemTraAnh>? KetQuaKiemTraAnhs { get; set; }
        public IEnumerable<BaiQuizz>? BaiQuizzs { get; set; }

    }
}
