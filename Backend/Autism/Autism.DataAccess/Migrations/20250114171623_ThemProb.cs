using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Autism.DataAccess.Migrations
{
    public partial class ThemProb : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<double>(
                name: "AutismProb",
                table: "KetQuaKiemTraAnhs",
                type: "float",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<double>(
                name: "Non_AutismProb",
                table: "KetQuaKiemTraAnhs",
                type: "float",
                nullable: false,
                defaultValue: 0.0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AutismProb",
                table: "KetQuaKiemTraAnhs");

            migrationBuilder.DropColumn(
                name: "Non_AutismProb",
                table: "KetQuaKiemTraAnhs");
        }
    }
}
