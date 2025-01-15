using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Autism.DataAccess.Models
{
    public class DapAnBaiQuizz
    {
        [Key]
        public int DapAnBaiQuizzId { get; set; }
        [Required]
        public string TenDapAn { get; set; }

        [Required]
        public bool DungSai { get; set; }
        public IEnumerable<DapAnBaiQuizzDaChon>? DapAnBaiQuizzDaChons { get; set; }
        public IEnumerable<ChiTietDapAnQuizz>? ChiTietDapAnQuizzs { get; set; }
    }
}
