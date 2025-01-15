using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Autism.DataAccess.Models
{
    public class AnhPhanThuong
    {
        [Key]
        public int AnhPhanThuongId { get; set; }
        [Required]
        public string Image {  get; set; }
        [Required]
        public int PhanThuongId { get; set; }
        [Required]
        [ForeignKey(nameof(PhanThuongId))]
        public PhanThuong? PhanThuong { get; set; }
    }
}
