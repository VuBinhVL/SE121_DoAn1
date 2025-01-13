using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Autism.DataAccess.Models
{
    public class ChiTietDapAnGame
    {
        [Required]
        public int CauHoiGameId { get; set; }
        [Required]
        [ForeignKey(nameof(CauHoiGameId))]
        public CauHoiGame? CauHoiGame { get; set; }

        [Required]
        public int DapAnGameId { get; set; }
        [Required]
        [ForeignKey(nameof(DapAnGameId))]
        public DapAnGame? DapAnGame { get; set; }
    }
}
