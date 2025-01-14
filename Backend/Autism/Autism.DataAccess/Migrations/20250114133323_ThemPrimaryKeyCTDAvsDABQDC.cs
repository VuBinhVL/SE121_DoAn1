using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Autism.DataAccess.Migrations
{
    public partial class ThemPrimaryKeyCTDAvsDABQDC : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_DapAnBaiQuizzDaChons",
                table: "DapAnBaiQuizzDaChons");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ChiTietDapAnQuizzs",
                table: "ChiTietDapAnQuizzs");

            migrationBuilder.AddColumn<int>(
                name: "DapAnBaiQuizzDaChonId",
                table: "DapAnBaiQuizzDaChons",
                type: "int",
                nullable: false,
                defaultValue: 0)
                .Annotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AddColumn<int>(
                name: "ChiTietDapAnQuizzId",
                table: "ChiTietDapAnQuizzs",
                type: "int",
                nullable: false,
                defaultValue: 0)
                .Annotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AddPrimaryKey(
                name: "PK_DapAnBaiQuizzDaChons",
                table: "DapAnBaiQuizzDaChons",
                column: "DapAnBaiQuizzDaChonId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_ChiTietDapAnQuizzs",
                table: "ChiTietDapAnQuizzs",
                column: "ChiTietDapAnQuizzId");

            migrationBuilder.CreateIndex(
                name: "IX_DapAnBaiQuizzDaChons_CauHoiBaiQuizzId",
                table: "DapAnBaiQuizzDaChons",
                column: "CauHoiBaiQuizzId");

            migrationBuilder.CreateIndex(
                name: "IX_ChiTietDapAnQuizzs_CauHoiBaiQuizzId",
                table: "ChiTietDapAnQuizzs",
                column: "CauHoiBaiQuizzId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_DapAnBaiQuizzDaChons",
                table: "DapAnBaiQuizzDaChons");

            migrationBuilder.DropIndex(
                name: "IX_DapAnBaiQuizzDaChons_CauHoiBaiQuizzId",
                table: "DapAnBaiQuizzDaChons");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ChiTietDapAnQuizzs",
                table: "ChiTietDapAnQuizzs");

            migrationBuilder.DropIndex(
                name: "IX_ChiTietDapAnQuizzs_CauHoiBaiQuizzId",
                table: "ChiTietDapAnQuizzs");

            migrationBuilder.DropColumn(
                name: "DapAnBaiQuizzDaChonId",
                table: "DapAnBaiQuizzDaChons");

            migrationBuilder.DropColumn(
                name: "ChiTietDapAnQuizzId",
                table: "ChiTietDapAnQuizzs");

            migrationBuilder.AddPrimaryKey(
                name: "PK_DapAnBaiQuizzDaChons",
                table: "DapAnBaiQuizzDaChons",
                columns: new[] { "CauHoiBaiQuizzId", "DapAnBaiQuizzId" });

            migrationBuilder.AddPrimaryKey(
                name: "PK_ChiTietDapAnQuizzs",
                table: "ChiTietDapAnQuizzs",
                columns: new[] { "CauHoiBaiQuizzId", "DapAnBaiQuizzId" });
        }
    }
}
