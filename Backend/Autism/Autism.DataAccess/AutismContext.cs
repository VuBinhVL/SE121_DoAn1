using Autism.DataAccess.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Autism.DataAccess
{
    public class AutismContext : DbContext
    {
        public DbSet<AnhPhanThuong>? AnhPhanThuongs {  get; set; }
        public DbSet<BaiQuizz>? BaiQuizzs{ get; set; }
        public DbSet<CauHoiBaiQuizz> CauHoiBaiQuizzs { get; set; }
        public DbSet<CauHoiGame> CauHoiGames { get; set; }
        public DbSet<ChiTietBaiQuizz> ChiTietBaiQuizzs { get; set; }
        public DbSet<ChiTietDapAnGame> ChiTietDapAnGames { get; set; }
        public DbSet<ChiTietDapAnQuizz> ChiTietDapAnQuizzs { get; set; }
        public DbSet<ChiTietGame> ChiTietGames {  get; set; }
        public DbSet<DapAnBaiQuizz> DapAnBaiQuizzs { get; set;}
        public DbSet<DapAnGame> DapAnGames { get; set;}
        public DbSet<DapAnBaiQuizzDaChon> DapAnBaiQuizzDaChons { get; set; }
        public DbSet<DapAnGameDaChon> DapAnGameDaChons { get; set; }
        public DbSet<Game> Games { get; set; }
        public DbSet<KetQuaKiemTraAnh> KetQuaKiemTraAnhs {  get; set; }
        public DbSet<NguoiDung> NguoiDungs {  get; set; }
        public DbSet<NguoiKiemTra> NguoiKiemTras {  get; set; }
        public DbSet<PhanThuong> PhanThuongs { get; set; }
        public DbSet<TheLoaiGame> TheLoaiGames { get; set; }

        //bổ trợ DI
        public AutismContext(DbContextOptions<AutismContext> options) : base(options)
        {

        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            #region add default
            modelBuilder.Entity<NguoiDung>()
                .Property(e => e.Image)
                .HasDefaultValue("no_img.png");

            modelBuilder.Entity<NguoiKiemTra>()
                .Property(e => e.Image)
                .HasDefaultValue("[\"no_img.png\"]");

            modelBuilder.Entity<CauHoiGame>()
                .Property(e => e.Image)
                .HasDefaultValue("[\"no_img.png\"]");
            modelBuilder.Entity<AnhPhanThuong>()
               .Property(e => e.Image)
               .HasDefaultValue("[\"no_img.png\"]");

            #endregion

            #region không cho phép tự xóa khóa ngoại
            foreach (var foreignKey in modelBuilder.Model.GetEntityTypes()
                 .SelectMany(e => e.GetForeignKeys()))
            {
                foreignKey.DeleteBehavior = DeleteBehavior.NoAction;
            }
            #endregion không cho phép tự xóa khóa ngoại

            #region add khóa chính
            modelBuilder.Entity<ChiTietBaiQuizz>()
            .HasKey(cd => new { cd.BaiQuizzId, cd.CauHoiBaiQuizzId });

            modelBuilder.Entity<ChiTietDapAnQuizz>()
            .HasKey(cd => new { cd.CauHoiBaiQuizzId, cd.DapAnBaiQuizzId });

            modelBuilder.Entity<DapAnBaiQuizzDaChon>()
            .HasKey(cd => new { cd.CauHoiBaiQuizzId, cd.DapAnBaiQuizzId });

            modelBuilder.Entity<ChiTietGame>()
            .HasKey(cd => new { cd.GameId, cd.CauHoiGameId });

            modelBuilder.Entity<ChiTietDapAnGame>()
            .HasKey(cd => new { cd.CauHoiGameId, cd.DapAnGameId });
            modelBuilder.Entity<DapAnGameDaChon>()
           .HasKey(cd => new { cd.CauHoiGameId, cd.DapAnGameId });
            #endregion



        }

    }
}
