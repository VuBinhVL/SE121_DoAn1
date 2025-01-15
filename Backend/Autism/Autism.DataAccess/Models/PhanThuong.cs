using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Autism.DataAccess.Models
{
    public class PhanThuong
    {
        [Key]
        public int PhanThuongId { get; set; }
        [Required]
        public string BaiHoc {  get; set; }
        [Required]
        public int CauHoiGameId { get; set; }
        [Required]
        [ForeignKey(nameof(CauHoiGameId))]
        public CauHoiGame? CauHoiGame { get; set; }
        public IEnumerable<AnhPhanThuong>? AnhPhanThuongs { get; set; }
    }
}
