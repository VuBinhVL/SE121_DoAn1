using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Autism.DataAccess.Models
{
    public class DapAnGame
    {
        [Key]
        public int DapAnGameId { get; set; }
        [Required]
        public string TenDapAn { get; set; }

        [Required]
        public bool DungSai { get; set; }
        public IEnumerable<ChiTietDapAnGame>? ChiTietDapAnGames { get; set; }
        public IEnumerable<DapAnGameDaChon>? DapAnGameDaChon { get; set; }
    }
}
