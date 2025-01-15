using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Autism.DataAccess.Models
{
    public class CauHoiGame
    {
        [Key]
        public int CauHoiGameId { get; set; }
        [Required]
        public string TenCauHoi { get; set; }
        public string? Image { get; set; }

        public IEnumerable<ChiTietGame>? ChiTietGames { get; set; }
        public IEnumerable<PhanThuong>? PhanThuongs { get; set; }
        public IEnumerable<ChiTietDapAnGame>? ChiTietDapAnGames { get; set; }
        public IEnumerable<DapAnGameDaChon>? DapAnGameDaChon { get; set; }
    }
}
