using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Autism.DataAccess.Migrations
{
    public partial class InitDbVer1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "CauHoiBaiQuizzs",
                columns: table => new
                {
                    CauHoiBaiQuizzId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TenCauHoi = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CauHoiBaiQuizzs", x => x.CauHoiBaiQuizzId);
                });

            migrationBuilder.CreateTable(
                name: "CauHoiGames",
                columns: table => new
                {
                    CauHoiGameId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TenCauHoi = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Image = table.Column<string>(type: "nvarchar(max)", nullable: true, defaultValue: "[\"no_img.png\"]")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CauHoiGames", x => x.CauHoiGameId);
                });

            migrationBuilder.CreateTable(
                name: "DapAnBaiQuizzs",
                columns: table => new
                {
                    DapAnBaiQuizzId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TenDapAn = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DungSai = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DapAnBaiQuizzs", x => x.DapAnBaiQuizzId);
                });

            migrationBuilder.CreateTable(
                name: "DapAnGames",
                columns: table => new
                {
                    DapAnGameId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TenDapAn = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DungSai = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DapAnGames", x => x.DapAnGameId);
                });

            migrationBuilder.CreateTable(
                name: "NguoiDungs",
                columns: table => new
                {
                    NguoiDungId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TenTaiKhoan = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    MatKhau = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Image = table.Column<string>(type: "nvarchar(1000)", maxLength: 1000, nullable: true, defaultValue: "no_img.png"),
                    HoTen = table.Column<string>(type: "nvarchar(300)", maxLength: 300, nullable: false),
                    Email = table.Column<string>(type: "nvarchar(300)", maxLength: 300, nullable: false),
                    GioiTinh = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    NgaySinh = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_NguoiDungs", x => x.NguoiDungId);
                });

            migrationBuilder.CreateTable(
                name: "NguoiKiemTras",
                columns: table => new
                {
                    NguoiKiemTraId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    HoTen = table.Column<string>(type: "nvarchar(300)", maxLength: 300, nullable: false),
                    NgaySinh = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Image = table.Column<string>(type: "nvarchar(max)", nullable: false, defaultValue: "[\"no_img.png\"]")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_NguoiKiemTras", x => x.NguoiKiemTraId);
                });

            migrationBuilder.CreateTable(
                name: "TheLoaiGames",
                columns: table => new
                {
                    TheLoaiGameId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TenTheLoai = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TheLoaiGames", x => x.TheLoaiGameId);
                });

            migrationBuilder.CreateTable(
                name: "PhanThuongs",
                columns: table => new
                {
                    PhanThuongId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BaiHoc = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CauHoiGameId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PhanThuongs", x => x.PhanThuongId);
                    table.ForeignKey(
                        name: "FK_PhanThuongs_CauHoiGames_CauHoiGameId",
                        column: x => x.CauHoiGameId,
                        principalTable: "CauHoiGames",
                        principalColumn: "CauHoiGameId");
                });

            migrationBuilder.CreateTable(
                name: "ChiTietDapAnQuizzs",
                columns: table => new
                {
                    CauHoiBaiQuizzId = table.Column<int>(type: "int", nullable: false),
                    DapAnBaiQuizzId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ChiTietDapAnQuizzs", x => new { x.CauHoiBaiQuizzId, x.DapAnBaiQuizzId });
                    table.ForeignKey(
                        name: "FK_ChiTietDapAnQuizzs_CauHoiBaiQuizzs_CauHoiBaiQuizzId",
                        column: x => x.CauHoiBaiQuizzId,
                        principalTable: "CauHoiBaiQuizzs",
                        principalColumn: "CauHoiBaiQuizzId");
                    table.ForeignKey(
                        name: "FK_ChiTietDapAnQuizzs_DapAnBaiQuizzs_DapAnBaiQuizzId",
                        column: x => x.DapAnBaiQuizzId,
                        principalTable: "DapAnBaiQuizzs",
                        principalColumn: "DapAnBaiQuizzId");
                });

            migrationBuilder.CreateTable(
                name: "DapAnBaiQuizzDaChons",
                columns: table => new
                {
                    CauHoiBaiQuizzId = table.Column<int>(type: "int", nullable: false),
                    DapAnBaiQuizzId = table.Column<int>(type: "int", nullable: false),
                    DungSai = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DapAnBaiQuizzDaChons", x => new { x.CauHoiBaiQuizzId, x.DapAnBaiQuizzId });
                    table.ForeignKey(
                        name: "FK_DapAnBaiQuizzDaChons_CauHoiBaiQuizzs_CauHoiBaiQuizzId",
                        column: x => x.CauHoiBaiQuizzId,
                        principalTable: "CauHoiBaiQuizzs",
                        principalColumn: "CauHoiBaiQuizzId");
                    table.ForeignKey(
                        name: "FK_DapAnBaiQuizzDaChons_DapAnBaiQuizzs_DapAnBaiQuizzId",
                        column: x => x.DapAnBaiQuizzId,
                        principalTable: "DapAnBaiQuizzs",
                        principalColumn: "DapAnBaiQuizzId");
                });

            migrationBuilder.CreateTable(
                name: "ChiTietDapAnGames",
                columns: table => new
                {
                    CauHoiGameId = table.Column<int>(type: "int", nullable: false),
                    DapAnGameId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ChiTietDapAnGames", x => new { x.CauHoiGameId, x.DapAnGameId });
                    table.ForeignKey(
                        name: "FK_ChiTietDapAnGames_CauHoiGames_CauHoiGameId",
                        column: x => x.CauHoiGameId,
                        principalTable: "CauHoiGames",
                        principalColumn: "CauHoiGameId");
                    table.ForeignKey(
                        name: "FK_ChiTietDapAnGames_DapAnGames_DapAnGameId",
                        column: x => x.DapAnGameId,
                        principalTable: "DapAnGames",
                        principalColumn: "DapAnGameId");
                });

            migrationBuilder.CreateTable(
                name: "DapAnGameDaChons",
                columns: table => new
                {
                    CauHoiGameId = table.Column<int>(type: "int", nullable: false),
                    DapAnGameId = table.Column<int>(type: "int", nullable: false),
                    DungSai = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DapAnGameDaChons", x => new { x.CauHoiGameId, x.DapAnGameId });
                    table.ForeignKey(
                        name: "FK_DapAnGameDaChons_CauHoiGames_CauHoiGameId",
                        column: x => x.CauHoiGameId,
                        principalTable: "CauHoiGames",
                        principalColumn: "CauHoiGameId");
                    table.ForeignKey(
                        name: "FK_DapAnGameDaChons_DapAnGames_DapAnGameId",
                        column: x => x.DapAnGameId,
                        principalTable: "DapAnGames",
                        principalColumn: "DapAnGameId");
                });

            migrationBuilder.CreateTable(
                name: "BaiQuizzs",
                columns: table => new
                {
                    BaiQuizzId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NguoiDungId = table.Column<int>(type: "int", nullable: false),
                    NgayLamQuizz = table.Column<DateTime>(type: "datetime2", nullable: false),
                    NguoiKiemTraId = table.Column<int>(type: "int", nullable: false),
                    TongDiem = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BaiQuizzs", x => x.BaiQuizzId);
                    table.ForeignKey(
                        name: "FK_BaiQuizzs_NguoiDungs_NguoiDungId",
                        column: x => x.NguoiDungId,
                        principalTable: "NguoiDungs",
                        principalColumn: "NguoiDungId");
                    table.ForeignKey(
                        name: "FK_BaiQuizzs_NguoiKiemTras_NguoiKiemTraId",
                        column: x => x.NguoiKiemTraId,
                        principalTable: "NguoiKiemTras",
                        principalColumn: "NguoiKiemTraId");
                });

            migrationBuilder.CreateTable(
                name: "KetQuaKiemTraAnhs",
                columns: table => new
                {
                    KetQuaKiemTraAnhId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NguoiDungId = table.Column<int>(type: "int", nullable: false),
                    NguoiKiemTraId = table.Column<int>(type: "int", nullable: false),
                    NgayKiemTra = table.Column<DateTime>(type: "datetime2", nullable: false),
                    KetQua = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    GhiChu = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_KetQuaKiemTraAnhs", x => x.KetQuaKiemTraAnhId);
                    table.ForeignKey(
                        name: "FK_KetQuaKiemTraAnhs_NguoiDungs_NguoiDungId",
                        column: x => x.NguoiDungId,
                        principalTable: "NguoiDungs",
                        principalColumn: "NguoiDungId");
                    table.ForeignKey(
                        name: "FK_KetQuaKiemTraAnhs_NguoiKiemTras_NguoiKiemTraId",
                        column: x => x.NguoiKiemTraId,
                        principalTable: "NguoiKiemTras",
                        principalColumn: "NguoiKiemTraId");
                });

            migrationBuilder.CreateTable(
                name: "Games",
                columns: table => new
                {
                    GameId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NguoiDungId = table.Column<int>(type: "int", nullable: false),
                    TheLoaiGameId = table.Column<int>(type: "int", nullable: false),
                    TenGame = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    NgayChoiGame = table.Column<DateTime>(type: "datetime2", nullable: false),
                    TongDiem = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Games", x => x.GameId);
                    table.ForeignKey(
                        name: "FK_Games_NguoiDungs_NguoiDungId",
                        column: x => x.NguoiDungId,
                        principalTable: "NguoiDungs",
                        principalColumn: "NguoiDungId");
                    table.ForeignKey(
                        name: "FK_Games_TheLoaiGames_TheLoaiGameId",
                        column: x => x.TheLoaiGameId,
                        principalTable: "TheLoaiGames",
                        principalColumn: "TheLoaiGameId");
                });

            migrationBuilder.CreateTable(
                name: "AnhPhanThuongs",
                columns: table => new
                {
                    AnhPhanThuongId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Image = table.Column<string>(type: "nvarchar(max)", nullable: false, defaultValue: "[\"no_img.png\"]"),
                    PhanThuongId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AnhPhanThuongs", x => x.AnhPhanThuongId);
                    table.ForeignKey(
                        name: "FK_AnhPhanThuongs_PhanThuongs_PhanThuongId",
                        column: x => x.PhanThuongId,
                        principalTable: "PhanThuongs",
                        principalColumn: "PhanThuongId");
                });

            migrationBuilder.CreateTable(
                name: "ChiTietBaiQuizzs",
                columns: table => new
                {
                    BaiQuizzId = table.Column<int>(type: "int", nullable: false),
                    CauHoiBaiQuizzId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ChiTietBaiQuizzs", x => new { x.BaiQuizzId, x.CauHoiBaiQuizzId });
                    table.ForeignKey(
                        name: "FK_ChiTietBaiQuizzs_BaiQuizzs_BaiQuizzId",
                        column: x => x.BaiQuizzId,
                        principalTable: "BaiQuizzs",
                        principalColumn: "BaiQuizzId");
                    table.ForeignKey(
                        name: "FK_ChiTietBaiQuizzs_CauHoiBaiQuizzs_CauHoiBaiQuizzId",
                        column: x => x.CauHoiBaiQuizzId,
                        principalTable: "CauHoiBaiQuizzs",
                        principalColumn: "CauHoiBaiQuizzId");
                });

            migrationBuilder.CreateTable(
                name: "ChiTietGames",
                columns: table => new
                {
                    GameId = table.Column<int>(type: "int", nullable: false),
                    CauHoiGameId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ChiTietGames", x => new { x.GameId, x.CauHoiGameId });
                    table.ForeignKey(
                        name: "FK_ChiTietGames_CauHoiGames_CauHoiGameId",
                        column: x => x.CauHoiGameId,
                        principalTable: "CauHoiGames",
                        principalColumn: "CauHoiGameId");
                    table.ForeignKey(
                        name: "FK_ChiTietGames_Games_GameId",
                        column: x => x.GameId,
                        principalTable: "Games",
                        principalColumn: "GameId");
                });

            migrationBuilder.CreateIndex(
                name: "IX_AnhPhanThuongs_PhanThuongId",
                table: "AnhPhanThuongs",
                column: "PhanThuongId");

            migrationBuilder.CreateIndex(
                name: "IX_BaiQuizzs_NguoiDungId",
                table: "BaiQuizzs",
                column: "NguoiDungId");

            migrationBuilder.CreateIndex(
                name: "IX_BaiQuizzs_NguoiKiemTraId",
                table: "BaiQuizzs",
                column: "NguoiKiemTraId");

            migrationBuilder.CreateIndex(
                name: "IX_ChiTietBaiQuizzs_CauHoiBaiQuizzId",
                table: "ChiTietBaiQuizzs",
                column: "CauHoiBaiQuizzId");

            migrationBuilder.CreateIndex(
                name: "IX_ChiTietDapAnGames_DapAnGameId",
                table: "ChiTietDapAnGames",
                column: "DapAnGameId");

            migrationBuilder.CreateIndex(
                name: "IX_ChiTietDapAnQuizzs_DapAnBaiQuizzId",
                table: "ChiTietDapAnQuizzs",
                column: "DapAnBaiQuizzId");

            migrationBuilder.CreateIndex(
                name: "IX_ChiTietGames_CauHoiGameId",
                table: "ChiTietGames",
                column: "CauHoiGameId");

            migrationBuilder.CreateIndex(
                name: "IX_DapAnBaiQuizzDaChons_DapAnBaiQuizzId",
                table: "DapAnBaiQuizzDaChons",
                column: "DapAnBaiQuizzId");

            migrationBuilder.CreateIndex(
                name: "IX_DapAnGameDaChons_DapAnGameId",
                table: "DapAnGameDaChons",
                column: "DapAnGameId");

            migrationBuilder.CreateIndex(
                name: "IX_Games_NguoiDungId",
                table: "Games",
                column: "NguoiDungId");

            migrationBuilder.CreateIndex(
                name: "IX_Games_TheLoaiGameId",
                table: "Games",
                column: "TheLoaiGameId");

            migrationBuilder.CreateIndex(
                name: "IX_KetQuaKiemTraAnhs_NguoiDungId",
                table: "KetQuaKiemTraAnhs",
                column: "NguoiDungId");

            migrationBuilder.CreateIndex(
                name: "IX_KetQuaKiemTraAnhs_NguoiKiemTraId",
                table: "KetQuaKiemTraAnhs",
                column: "NguoiKiemTraId");

            migrationBuilder.CreateIndex(
                name: "IX_PhanThuongs_CauHoiGameId",
                table: "PhanThuongs",
                column: "CauHoiGameId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AnhPhanThuongs");

            migrationBuilder.DropTable(
                name: "ChiTietBaiQuizzs");

            migrationBuilder.DropTable(
                name: "ChiTietDapAnGames");

            migrationBuilder.DropTable(
                name: "ChiTietDapAnQuizzs");

            migrationBuilder.DropTable(
                name: "ChiTietGames");

            migrationBuilder.DropTable(
                name: "DapAnBaiQuizzDaChons");

            migrationBuilder.DropTable(
                name: "DapAnGameDaChons");

            migrationBuilder.DropTable(
                name: "KetQuaKiemTraAnhs");

            migrationBuilder.DropTable(
                name: "PhanThuongs");

            migrationBuilder.DropTable(
                name: "BaiQuizzs");

            migrationBuilder.DropTable(
                name: "Games");

            migrationBuilder.DropTable(
                name: "CauHoiBaiQuizzs");

            migrationBuilder.DropTable(
                name: "DapAnBaiQuizzs");

            migrationBuilder.DropTable(
                name: "DapAnGames");

            migrationBuilder.DropTable(
                name: "CauHoiGames");

            migrationBuilder.DropTable(
                name: "NguoiKiemTras");

            migrationBuilder.DropTable(
                name: "NguoiDungs");

            migrationBuilder.DropTable(
                name: "TheLoaiGames");
        }
    }
}
