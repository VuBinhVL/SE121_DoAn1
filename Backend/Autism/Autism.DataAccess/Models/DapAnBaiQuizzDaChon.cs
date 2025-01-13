using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Autism.DataAccess.Models
{
    public class DapAnBaiQuizzDaChon
    {
        [Required]
        public int CauHoiBaiQuizzId { get; set; }
        [Required]
        [ForeignKey(nameof(CauHoiBaiQuizzId))]
        public CauHoiBaiQuizz? CauHoiBaiQuizz { get; set; }

        [Required]
        public int DapAnBaiQuizzId { get; set; }
        [Required]
        [ForeignKey(nameof(DapAnBaiQuizzId))]
        public DapAnBaiQuizz? DapAnBaiQuizz { get; set; }

        public bool DungSai { get; set; }
    }
}
