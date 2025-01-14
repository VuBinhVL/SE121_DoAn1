using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Autism.DataAccess.Models
{
    [Table("KetQuaKiemTraAnhs")]
    public class KetQuaKiemTraAnh
    {
        [Key]
        public int KetQuaKiemTraAnhId { get; set; }

        [Required]
        public int NguoiDungId { get; set; }
        [Required]
        [ForeignKey(nameof(NguoiDungId))]
        public NguoiDung? NguoiDung { get; set; }
        [Required]
        public int NguoiKiemTraId { get; set; }
        [Required]
        [ForeignKey(nameof(NguoiKiemTraId))]
        public NguoiKiemTra? NguoiKiemTra { get; set; }

        [Required]
        public DateTime NgayKiemTra { get; set; }
        [Required]
        public string KetQua {  get; set; }

        public string? GhiChu { get; set; }
        [Required]
        public string Image { get; set; }

    }
}
