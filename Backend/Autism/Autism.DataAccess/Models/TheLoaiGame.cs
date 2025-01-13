using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Autism.DataAccess.Models
{
    public class TheLoaiGame
    {
        [Key]
        public int TheLoaiGameId { get; set; }
        [Required]
        public string TenTheLoai {  get; set; }
        public IEnumerable<Game>? Games { get; set; }
    }
}
