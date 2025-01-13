using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Autism.DataAccess.Models
{
    [Table("NguoiDungs")] 
    public class NguoiDung
    {
        [Key]
        public int NguoiDungId { get; set; }
        [Required]
        [MinLength(6)]
        [MaxLength(100)]
        public string? TenTaiKhoan { get; set; }

        [Required]
        [MinLength(6)]
        [MaxLength(100)]
        public string? MatKhau { get; set; }

        [MaxLength(1000)]
        public string? Image { get; set; }

        [Required]
        [MinLength(6)]
        [MaxLength(300)]
        public string? HoTen { get; set; }

        [Required]
        [EmailAddress]
        [MaxLength(300)]
        public string? Email { get; set; }
        public string? GioiTinh { get; set; }
        public DateTime? NgaySinh { get; set; }

        public IEnumerable<KetQuaKiemTraAnh>? KetQuaKiemTraAnhs { get; set; }
        public IEnumerable<BaiQuizz>? BaiQuizzs { get; set; }
        public IEnumerable<Game>? Games { get; set; }
    }
}
