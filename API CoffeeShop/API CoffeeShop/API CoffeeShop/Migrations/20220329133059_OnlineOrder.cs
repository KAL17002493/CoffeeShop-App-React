using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API_CoffeeShop.Migrations
{
    public partial class OnlineOrder : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "TableModel");

            migrationBuilder.DropPrimaryKey(
                name: "PK_OnlineOrderModel",
                table: "OnlineOrderModel");

            migrationBuilder.DropColumn(
                name: "Price",
                table: "OnlineOrderModel");

            migrationBuilder.RenameTable(
                name: "OnlineOrderModel",
                newName: "Orders");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Orders",
                newName: "UserId");

            migrationBuilder.RenameColumn(
                name: "Amount",
                table: "Orders",
                newName: "ProductId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Orders",
                table: "Orders",
                column: "Id");

            migrationBuilder.CreateIndex(
                name: "IX_Orders_ProductId",
                table: "Orders",
                column: "ProductId");

            migrationBuilder.CreateIndex(
                name: "IX_Orders_UserId",
                table: "Orders",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Orders_AspNetUsers_UserId",
                table: "Orders",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Orders_Products_ProductId",
                table: "Orders",
                column: "ProductId",
                principalTable: "Products",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Orders_AspNetUsers_UserId",
                table: "Orders");

            migrationBuilder.DropForeignKey(
                name: "FK_Orders_Products_ProductId",
                table: "Orders");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Orders",
                table: "Orders");

            migrationBuilder.DropIndex(
                name: "IX_Orders_ProductId",
                table: "Orders");

            migrationBuilder.DropIndex(
                name: "IX_Orders_UserId",
                table: "Orders");

            migrationBuilder.RenameTable(
                name: "Orders",
                newName: "OnlineOrderModel");

            migrationBuilder.RenameColumn(
                name: "UserId",
                table: "OnlineOrderModel",
                newName: "Name");

            migrationBuilder.RenameColumn(
                name: "ProductId",
                table: "OnlineOrderModel",
                newName: "Amount");

            migrationBuilder.AddColumn<double>(
                name: "Price",
                table: "OnlineOrderModel",
                type: "REAL",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddPrimaryKey(
                name: "PK_OnlineOrderModel",
                table: "OnlineOrderModel",
                column: "Id");

            migrationBuilder.CreateTable(
                name: "TableModel",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    IsAvailible = table.Column<bool>(type: "INTEGER", nullable: false),
                    Numer = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TableModel", x => x.Id);
                });
        }
    }
}
