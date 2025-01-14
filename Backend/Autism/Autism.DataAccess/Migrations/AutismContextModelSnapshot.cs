﻿// <auto-generated />
using System;
using Autism.DataAccess;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace Autism.DataAccess.Migrations
{
    [DbContext(typeof(AutismContext))]
    partial class AutismContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.36")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("Autism.DataAccess.Models.AnhPhanThuong", b =>
                {
                    b.Property<int>("AnhPhanThuongId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("AnhPhanThuongId"), 1L, 1);

                    b.Property<string>("Image")
                        .IsRequired()
                        .ValueGeneratedOnAdd()
                        .HasColumnType("nvarchar(max)")
                        .HasDefaultValue("[\"no_img.png\"]");

                    b.Property<int>("PhanThuongId")
                        .HasColumnType("int");

                    b.HasKey("AnhPhanThuongId");

                    b.HasIndex("PhanThuongId");

                    b.ToTable("AnhPhanThuongs");
                });

            modelBuilder.Entity("Autism.DataAccess.Models.BaiQuizz", b =>
                {
                    b.Property<int>("BaiQuizzId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("BaiQuizzId"), 1L, 1);

                    b.Property<DateTime>("NgayLamQuizz")
                        .HasColumnType("datetime2");

                    b.Property<int>("NguoiDungId")
                        .HasColumnType("int");

                    b.Property<int>("NguoiKiemTraId")
                        .HasColumnType("int");

                    b.Property<int>("TongDiem")
                        .HasColumnType("int");

                    b.HasKey("BaiQuizzId");

                    b.HasIndex("NguoiDungId");

                    b.HasIndex("NguoiKiemTraId");

                    b.ToTable("BaiQuizzs");
                });

            modelBuilder.Entity("Autism.DataAccess.Models.CauHoiBaiQuizz", b =>
                {
                    b.Property<int>("CauHoiBaiQuizzId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("CauHoiBaiQuizzId"), 1L, 1);

                    b.Property<string>("TenCauHoi")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("CauHoiBaiQuizzId");

                    b.ToTable("CauHoiBaiQuizzs");
                });

            modelBuilder.Entity("Autism.DataAccess.Models.CauHoiGame", b =>
                {
                    b.Property<int>("CauHoiGameId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("CauHoiGameId"), 1L, 1);

                    b.Property<string>("Image")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("nvarchar(max)")
                        .HasDefaultValue("[\"no_img.png\"]");

                    b.Property<string>("TenCauHoi")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("CauHoiGameId");

                    b.ToTable("CauHoiGames");
                });

            modelBuilder.Entity("Autism.DataAccess.Models.ChiTietBaiQuizz", b =>
                {
                    b.Property<int>("BaiQuizzId")
                        .HasColumnType("int");

                    b.Property<int>("CauHoiBaiQuizzId")
                        .HasColumnType("int");

                    b.HasKey("BaiQuizzId", "CauHoiBaiQuizzId");

                    b.HasIndex("CauHoiBaiQuizzId");

                    b.ToTable("ChiTietBaiQuizzs");
                });

            modelBuilder.Entity("Autism.DataAccess.Models.ChiTietDapAnGame", b =>
                {
                    b.Property<int>("CauHoiGameId")
                        .HasColumnType("int");

                    b.Property<int>("DapAnGameId")
                        .HasColumnType("int");

                    b.HasKey("CauHoiGameId", "DapAnGameId");

                    b.HasIndex("DapAnGameId");

                    b.ToTable("ChiTietDapAnGames");
                });

            modelBuilder.Entity("Autism.DataAccess.Models.ChiTietDapAnQuizz", b =>
                {
                    b.Property<int>("CauHoiBaiQuizzId")
                        .HasColumnType("int");

                    b.Property<int>("DapAnBaiQuizzId")
                        .HasColumnType("int");

                    b.HasKey("CauHoiBaiQuizzId", "DapAnBaiQuizzId");

                    b.HasIndex("DapAnBaiQuizzId");

                    b.ToTable("ChiTietDapAnQuizzs");
                });

            modelBuilder.Entity("Autism.DataAccess.Models.ChiTietGame", b =>
                {
                    b.Property<int>("GameId")
                        .HasColumnType("int");

                    b.Property<int>("CauHoiGameId")
                        .HasColumnType("int");

                    b.HasKey("GameId", "CauHoiGameId");

                    b.HasIndex("CauHoiGameId");

                    b.ToTable("ChiTietGames");
                });

            modelBuilder.Entity("Autism.DataAccess.Models.DapAnBaiQuizz", b =>
                {
                    b.Property<int>("DapAnBaiQuizzId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("DapAnBaiQuizzId"), 1L, 1);

                    b.Property<bool>("DungSai")
                        .HasColumnType("bit");

                    b.Property<string>("TenDapAn")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("DapAnBaiQuizzId");

                    b.ToTable("DapAnBaiQuizzs");
                });

            modelBuilder.Entity("Autism.DataAccess.Models.DapAnBaiQuizzDaChon", b =>
                {
                    b.Property<int>("CauHoiBaiQuizzId")
                        .HasColumnType("int");

                    b.Property<int>("DapAnBaiQuizzId")
                        .HasColumnType("int");

                    b.Property<int>("BaiQuizzId")
                        .HasColumnType("int");

                    b.Property<bool>("DungSai")
                        .HasColumnType("bit");

                    b.HasKey("CauHoiBaiQuizzId", "DapAnBaiQuizzId");

                    b.HasIndex("BaiQuizzId");

                    b.HasIndex("DapAnBaiQuizzId");

                    b.ToTable("DapAnBaiQuizzDaChons");
                });

            modelBuilder.Entity("Autism.DataAccess.Models.DapAnGame", b =>
                {
                    b.Property<int>("DapAnGameId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("DapAnGameId"), 1L, 1);

                    b.Property<bool>("DungSai")
                        .HasColumnType("bit");

                    b.Property<string>("TenDapAn")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("DapAnGameId");

                    b.ToTable("DapAnGames");
                });

            modelBuilder.Entity("Autism.DataAccess.Models.DapAnGameDaChon", b =>
                {
                    b.Property<int>("CauHoiGameId")
                        .HasColumnType("int");

                    b.Property<int>("DapAnGameId")
                        .HasColumnType("int");

                    b.Property<bool>("DungSai")
                        .HasColumnType("bit");

                    b.HasKey("CauHoiGameId", "DapAnGameId");

                    b.HasIndex("DapAnGameId");

                    b.ToTable("DapAnGameDaChons");
                });

            modelBuilder.Entity("Autism.DataAccess.Models.Game", b =>
                {
                    b.Property<int>("GameId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("GameId"), 1L, 1);

                    b.Property<DateTime>("NgayChoiGame")
                        .HasColumnType("datetime2");

                    b.Property<int>("NguoiDungId")
                        .HasColumnType("int");

                    b.Property<string>("TenGame")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("TheLoaiGameId")
                        .HasColumnType("int");

                    b.Property<int>("TongDiem")
                        .HasColumnType("int");

                    b.HasKey("GameId");

                    b.HasIndex("NguoiDungId");

                    b.HasIndex("TheLoaiGameId");

                    b.ToTable("Games");
                });

            modelBuilder.Entity("Autism.DataAccess.Models.KetQuaKiemTraAnh", b =>
                {
                    b.Property<int>("KetQuaKiemTraAnhId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("KetQuaKiemTraAnhId"), 1L, 1);

                    b.Property<string>("GhiChu")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Image")
                        .IsRequired()
                        .ValueGeneratedOnAdd()
                        .HasColumnType("nvarchar(max)")
                        .HasDefaultValue("[\"no_img.png\"]");

                    b.Property<string>("KetQua")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("NgayKiemTra")
                        .HasColumnType("datetime2");

                    b.Property<int>("NguoiDungId")
                        .HasColumnType("int");

                    b.Property<int>("NguoiKiemTraId")
                        .HasColumnType("int");

                    b.HasKey("KetQuaKiemTraAnhId");

                    b.HasIndex("NguoiDungId");

                    b.HasIndex("NguoiKiemTraId");

                    b.ToTable("KetQuaKiemTraAnhs");
                });

            modelBuilder.Entity("Autism.DataAccess.Models.NguoiDung", b =>
                {
                    b.Property<int>("NguoiDungId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("NguoiDungId"), 1L, 1);

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasMaxLength(300)
                        .HasColumnType("nvarchar(300)");

                    b.Property<string>("GioiTinh")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("HoTen")
                        .IsRequired()
                        .HasMaxLength(300)
                        .HasColumnType("nvarchar(300)");

                    b.Property<string>("Image")
                        .ValueGeneratedOnAdd()
                        .HasMaxLength(1000)
                        .HasColumnType("nvarchar(1000)")
                        .HasDefaultValue("no_img.png");

                    b.Property<string>("MatKhau")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<DateTime?>("NgaySinh")
                        .HasColumnType("datetime2");

                    b.Property<string>("TenTaiKhoan")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.HasKey("NguoiDungId");

                    b.ToTable("NguoiDungs");
                });

            modelBuilder.Entity("Autism.DataAccess.Models.NguoiKiemTra", b =>
                {
                    b.Property<int>("NguoiKiemTraId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("NguoiKiemTraId"), 1L, 1);

                    b.Property<string>("HoTen")
                        .IsRequired()
                        .HasMaxLength(300)
                        .HasColumnType("nvarchar(300)");

                    b.Property<DateTime?>("NgaySinh")
                        .IsRequired()
                        .HasColumnType("datetime2");

                    b.HasKey("NguoiKiemTraId");

                    b.ToTable("NguoiKiemTras");
                });

            modelBuilder.Entity("Autism.DataAccess.Models.PhanThuong", b =>
                {
                    b.Property<int>("PhanThuongId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("PhanThuongId"), 1L, 1);

                    b.Property<string>("BaiHoc")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("CauHoiGameId")
                        .HasColumnType("int");

                    b.HasKey("PhanThuongId");

                    b.HasIndex("CauHoiGameId");

                    b.ToTable("PhanThuongs");
                });

            modelBuilder.Entity("Autism.DataAccess.Models.TheLoaiGame", b =>
                {
                    b.Property<int>("TheLoaiGameId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("TheLoaiGameId"), 1L, 1);

                    b.Property<string>("TenTheLoai")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("TheLoaiGameId");

                    b.ToTable("TheLoaiGames");
                });

            modelBuilder.Entity("Autism.DataAccess.Models.AnhPhanThuong", b =>
                {
                    b.HasOne("Autism.DataAccess.Models.PhanThuong", "PhanThuong")
                        .WithMany("AnhPhanThuongs")
                        .HasForeignKey("PhanThuongId")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.Navigation("PhanThuong");
                });

            modelBuilder.Entity("Autism.DataAccess.Models.BaiQuizz", b =>
                {
                    b.HasOne("Autism.DataAccess.Models.NguoiDung", "NguoiDung")
                        .WithMany("BaiQuizzs")
                        .HasForeignKey("NguoiDungId")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.HasOne("Autism.DataAccess.Models.NguoiKiemTra", "NguoiKiemTra")
                        .WithMany("BaiQuizzs")
                        .HasForeignKey("NguoiKiemTraId")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.Navigation("NguoiDung");

                    b.Navigation("NguoiKiemTra");
                });

            modelBuilder.Entity("Autism.DataAccess.Models.ChiTietBaiQuizz", b =>
                {
                    b.HasOne("Autism.DataAccess.Models.BaiQuizz", "BaiQuizz")
                        .WithMany("ChiTietBaiQuizzs")
                        .HasForeignKey("BaiQuizzId")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.HasOne("Autism.DataAccess.Models.CauHoiBaiQuizz", "CauHoiBaiQuizz")
                        .WithMany("ChiTietBaiQuizzs")
                        .HasForeignKey("CauHoiBaiQuizzId")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.Navigation("BaiQuizz");

                    b.Navigation("CauHoiBaiQuizz");
                });

            modelBuilder.Entity("Autism.DataAccess.Models.ChiTietDapAnGame", b =>
                {
                    b.HasOne("Autism.DataAccess.Models.CauHoiGame", "CauHoiGame")
                        .WithMany("ChiTietDapAnGames")
                        .HasForeignKey("CauHoiGameId")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.HasOne("Autism.DataAccess.Models.DapAnGame", "DapAnGame")
                        .WithMany("ChiTietDapAnGames")
                        .HasForeignKey("DapAnGameId")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.Navigation("CauHoiGame");

                    b.Navigation("DapAnGame");
                });

            modelBuilder.Entity("Autism.DataAccess.Models.ChiTietDapAnQuizz", b =>
                {
                    b.HasOne("Autism.DataAccess.Models.CauHoiBaiQuizz", "CauHoiBaiQuizz")
                        .WithMany("ChiTietDapAnQuizzs")
                        .HasForeignKey("CauHoiBaiQuizzId")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.HasOne("Autism.DataAccess.Models.DapAnBaiQuizz", "DapAnBaiQuizz")
                        .WithMany("ChiTietDapAnQuizzs")
                        .HasForeignKey("DapAnBaiQuizzId")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.Navigation("CauHoiBaiQuizz");

                    b.Navigation("DapAnBaiQuizz");
                });

            modelBuilder.Entity("Autism.DataAccess.Models.ChiTietGame", b =>
                {
                    b.HasOne("Autism.DataAccess.Models.CauHoiGame", "CauHoiGame")
                        .WithMany("ChiTietGames")
                        .HasForeignKey("CauHoiGameId")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.HasOne("Autism.DataAccess.Models.Game", "Game")
                        .WithMany("ChiTietGames")
                        .HasForeignKey("GameId")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.Navigation("CauHoiGame");

                    b.Navigation("Game");
                });

            modelBuilder.Entity("Autism.DataAccess.Models.DapAnBaiQuizzDaChon", b =>
                {
                    b.HasOne("Autism.DataAccess.Models.BaiQuizz", "BaiQuizz")
                        .WithMany()
                        .HasForeignKey("BaiQuizzId")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.HasOne("Autism.DataAccess.Models.CauHoiBaiQuizz", "CauHoiBaiQuizz")
                        .WithMany("DapAnBaiQuizzDaChons")
                        .HasForeignKey("CauHoiBaiQuizzId")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.HasOne("Autism.DataAccess.Models.DapAnBaiQuizz", "DapAnBaiQuizz")
                        .WithMany("DapAnBaiQuizzDaChons")
                        .HasForeignKey("DapAnBaiQuizzId")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.Navigation("BaiQuizz");

                    b.Navigation("CauHoiBaiQuizz");

                    b.Navigation("DapAnBaiQuizz");
                });

            modelBuilder.Entity("Autism.DataAccess.Models.DapAnGameDaChon", b =>
                {
                    b.HasOne("Autism.DataAccess.Models.CauHoiGame", "CauHoiGame")
                        .WithMany("DapAnGameDaChon")
                        .HasForeignKey("CauHoiGameId")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.HasOne("Autism.DataAccess.Models.DapAnGame", "DapAnGame")
                        .WithMany("DapAnGameDaChon")
                        .HasForeignKey("DapAnGameId")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.Navigation("CauHoiGame");

                    b.Navigation("DapAnGame");
                });

            modelBuilder.Entity("Autism.DataAccess.Models.Game", b =>
                {
                    b.HasOne("Autism.DataAccess.Models.NguoiDung", "NguoiDung")
                        .WithMany("Games")
                        .HasForeignKey("NguoiDungId")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.HasOne("Autism.DataAccess.Models.TheLoaiGame", "TheLoaiGame")
                        .WithMany("Games")
                        .HasForeignKey("TheLoaiGameId")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.Navigation("NguoiDung");

                    b.Navigation("TheLoaiGame");
                });

            modelBuilder.Entity("Autism.DataAccess.Models.KetQuaKiemTraAnh", b =>
                {
                    b.HasOne("Autism.DataAccess.Models.NguoiDung", "NguoiDung")
                        .WithMany("KetQuaKiemTraAnhs")
                        .HasForeignKey("NguoiDungId")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.HasOne("Autism.DataAccess.Models.NguoiKiemTra", "NguoiKiemTra")
                        .WithMany("KetQuaKiemTraAnhs")
                        .HasForeignKey("NguoiKiemTraId")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.Navigation("NguoiDung");

                    b.Navigation("NguoiKiemTra");
                });

            modelBuilder.Entity("Autism.DataAccess.Models.PhanThuong", b =>
                {
                    b.HasOne("Autism.DataAccess.Models.CauHoiGame", "CauHoiGame")
                        .WithMany("PhanThuongs")
                        .HasForeignKey("CauHoiGameId")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.Navigation("CauHoiGame");
                });

            modelBuilder.Entity("Autism.DataAccess.Models.BaiQuizz", b =>
                {
                    b.Navigation("ChiTietBaiQuizzs");
                });

            modelBuilder.Entity("Autism.DataAccess.Models.CauHoiBaiQuizz", b =>
                {
                    b.Navigation("ChiTietBaiQuizzs");

                    b.Navigation("ChiTietDapAnQuizzs");

                    b.Navigation("DapAnBaiQuizzDaChons");
                });

            modelBuilder.Entity("Autism.DataAccess.Models.CauHoiGame", b =>
                {
                    b.Navigation("ChiTietDapAnGames");

                    b.Navigation("ChiTietGames");

                    b.Navigation("DapAnGameDaChon");

                    b.Navigation("PhanThuongs");
                });

            modelBuilder.Entity("Autism.DataAccess.Models.DapAnBaiQuizz", b =>
                {
                    b.Navigation("ChiTietDapAnQuizzs");

                    b.Navigation("DapAnBaiQuizzDaChons");
                });

            modelBuilder.Entity("Autism.DataAccess.Models.DapAnGame", b =>
                {
                    b.Navigation("ChiTietDapAnGames");

                    b.Navigation("DapAnGameDaChon");
                });

            modelBuilder.Entity("Autism.DataAccess.Models.Game", b =>
                {
                    b.Navigation("ChiTietGames");
                });

            modelBuilder.Entity("Autism.DataAccess.Models.NguoiDung", b =>
                {
                    b.Navigation("BaiQuizzs");

                    b.Navigation("Games");

                    b.Navigation("KetQuaKiemTraAnhs");
                });

            modelBuilder.Entity("Autism.DataAccess.Models.NguoiKiemTra", b =>
                {
                    b.Navigation("BaiQuizzs");

                    b.Navigation("KetQuaKiemTraAnhs");
                });

            modelBuilder.Entity("Autism.DataAccess.Models.PhanThuong", b =>
                {
                    b.Navigation("AnhPhanThuongs");
                });

            modelBuilder.Entity("Autism.DataAccess.Models.TheLoaiGame", b =>
                {
                    b.Navigation("Games");
                });
#pragma warning restore 612, 618
        }
    }
}
