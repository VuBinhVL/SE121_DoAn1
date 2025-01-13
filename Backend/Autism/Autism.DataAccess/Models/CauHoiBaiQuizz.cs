using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Autism.DataAccess.Models
{
    public class CauHoiBaiQuizz
    {
        [Key]
        public int CauHoiBaiQuizzId { get; set; }
        [Required]
        public string TenCauHoi {  get; set; }
        public IEnumerable<ChiTietBaiQuizz>? ChiTietBaiQuizzs { get; set; }
        public IEnumerable<DapAnBaiQuizzDaChon>? DapAnBaiQuizzDaChons { get; set; }
        public IEnumerable<ChiTietDapAnQuizz>? ChiTietDapAnQuizzs { get; set; }
    }
}
