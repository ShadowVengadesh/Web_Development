using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Ace_Restaruant.Migrations
{
    /// <inheritdoc />
    public partial class attributechange : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ContactNumber",
                table: "AceRestaurants");

            migrationBuilder.DropColumn(
                name: "Email",
                table: "AceRestaurants");

            migrationBuilder.DropColumn(
                name: "Location",
                table: "AceRestaurants");

            migrationBuilder.DropColumn(
                name: "Website",
                table: "AceRestaurants");

            migrationBuilder.RenameColumn(
                name: "IsOpen",
                table: "AceRestaurants",
                newName: "IsAvailable");

            migrationBuilder.RenameColumn(
                name: "EstablishedDate",
                table: "AceRestaurants",
                newName: "OutTime");

            migrationBuilder.AddColumn<double>(
                name: "price",
                table: "AceRestaurants",
                type: "double",
                nullable: false,
                defaultValue: 0.0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "price",
                table: "AceRestaurants");

            migrationBuilder.RenameColumn(
                name: "OutTime",
                table: "AceRestaurants",
                newName: "EstablishedDate");

            migrationBuilder.RenameColumn(
                name: "IsAvailable",
                table: "AceRestaurants",
                newName: "IsOpen");

            migrationBuilder.AddColumn<string>(
                name: "ContactNumber",
                table: "AceRestaurants",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<string>(
                name: "Email",
                table: "AceRestaurants",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<string>(
                name: "Location",
                table: "AceRestaurants",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<string>(
                name: "Website",
                table: "AceRestaurants",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");
        }
    }
}
