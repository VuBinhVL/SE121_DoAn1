using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Autism.DataAccess.Migrations
{
    public partial class ThemBaiQuizzId : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "BaiQuizzId",
                table: "DapAnBaiQuizzDaChons",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_DapAnBaiQuizzDaChons_BaiQuizzId",
                table: "DapAnBaiQuizzDaChons",
                column: "BaiQuizzId");

            migrationBuilder.AddForeignKey(
                name: "FK_DapAnBaiQuizzDaChons_BaiQuizzs_BaiQuizzId",
                table: "DapAnBaiQuizzDaChons",
                column: "BaiQuizzId",
                principalTable: "BaiQuizzs",
                principalColumn: "BaiQuizzId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_DapAnBaiQuizzDaChons_BaiQuizzs_BaiQuizzId",
                table: "DapAnBaiQuizzDaChons");

            migrationBuilder.DropIndex(
                name: "IX_DapAnBaiQuizzDaChons_BaiQuizzId",
                table: "DapAnBaiQuizzDaChons");

            migrationBuilder.DropColumn(
                name: "BaiQuizzId",
                table: "DapAnBaiQuizzDaChons");
        }
    }
}
