using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Autism.DataAccess.Migrations
{
    public partial class XoaImageONguoiKiemTra : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Image",
                table: "NguoiKiemTras");

            migrationBuilder.AddColumn<string>(
                name: "Image",
                table: "KetQuaKiemTraAnhs",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "[\"no_img.png\"]");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Image",
                table: "KetQuaKiemTraAnhs");

            migrationBuilder.AddColumn<string>(
                name: "Image",
                table: "NguoiKiemTras",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "[\"no_img.png\"]");
        }
    }
}
