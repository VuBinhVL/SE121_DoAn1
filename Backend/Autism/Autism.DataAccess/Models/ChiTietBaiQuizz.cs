using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Autism.DataAccess.Models
{
    public class ChiTietBaiQuizz
    {
        [Required]
        public int BaiQuizzId { get; set; }
        [Required]
        [ForeignKey(nameof(BaiQuizzId))]
        public BaiQuizz? BaiQuizz { get; set; }

        [Required]
        public int CauHoiBaiQuizzId { get; set; }
        [Required]
        [ForeignKey(nameof(CauHoiBaiQuizzId))]
        public CauHoiBaiQuizz? CauHoiBaiQuizz { get; set; }
    }
}
