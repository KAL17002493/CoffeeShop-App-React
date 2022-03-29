using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API_CoffeeShop.Migrations
{
    public partial class Tables : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BookTableModel");

            migrationBuilder.CreateTable(
                name: "OnlineOrderModel",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(type: "TEXT", nullable: false),
                    Amount = table.Column<int>(type: "INTEGER", nullable: false),
                    Price = table.Column<double>(type: "REAL", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OnlineOrderModel", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "TableModel",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Numer = table.Column<int>(type: "INTEGER", nullable: false),
                    IsAvailible = table.Column<bool>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TableModel", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "OnlineOrderModel");

            migrationBuilder.DropTable(
                name: "TableModel");

            migrationBuilder.CreateTable(
                name: "BookTableModel",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    IsAvailible = table.Column<bool>(type: "INTEGER", nullable: false),
                    Numer = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BookTableModel", x => x.Id);
                });
        }
    }
}
