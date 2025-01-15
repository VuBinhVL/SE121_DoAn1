using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Autism.DataAccess.Models
{
    public class ChiTietGame
    {
        [Required]
        public int GameId { get; set; }
        [Required]
        [ForeignKey(nameof(GameId))]
        public Game? Game { get; set; }

        [Required]
        public int CauHoiGameId { get; set; }
        [Required]
        [ForeignKey(nameof(CauHoiGameId))]
        public CauHoiGame? CauHoiGame { get; set; }
    }
}
