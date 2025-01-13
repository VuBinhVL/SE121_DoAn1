using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Autism.DataAccess.Models
{
    public class Game
    {
        [Key]
        public int GameId { get; set; }
        [Required]
        public int NguoiDungId { get; set; }
        [Required]
        [ForeignKey(nameof(NguoiDungId))]
        public NguoiDung? NguoiDung { get; set; }
        [Required]
        public int TheLoaiGameId { get; set; }
        [Required]
        [ForeignKey(nameof(TheLoaiGameId))]
        public TheLoaiGame? TheLoaiGame { get; set; }

        [Required]
        public string TenGame { get; set; }
        public DateTime NgayChoiGame { get; set; }
        public int TongDiem {  get; set; }
        public IEnumerable<ChiTietGame>? ChiTietGames { get; set; }

    }
}
