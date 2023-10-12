using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace LibraryManagement.Data.Migrations
{
    /// <inheritdoc />
    public partial class updatedb : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Categories",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    CreatedTime = table.Column<DateTime>(type: "datetime2", nullable: true, defaultValue: new DateTime(2023, 9, 14, 0, 25, 5, 787, DateTimeKind.Local).AddTicks(4947)),
                    UpdatedTime = table.Column<DateTime>(type: "datetime2", nullable: true, defaultValue: new DateTime(2023, 9, 14, 0, 25, 5, 787, DateTimeKind.Local).AddTicks(5091)),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false, defaultValue: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Categories", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Address = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Phone = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: false),
                    Avatar = table.Column<string>(type: "nvarchar(max)", nullable: false, defaultValue: "default.png"),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    RegisteredDate = table.Column<DateTime>(type: "datetime2", nullable: true, defaultValue: new DateTime(2023, 9, 14, 0, 25, 5, 787, DateTimeKind.Local).AddTicks(4491)),
                    UpdatedDate = table.Column<DateTime>(type: "datetime2", nullable: true, defaultValue: new DateTime(2023, 9, 14, 0, 25, 5, 787, DateTimeKind.Local).AddTicks(4635))
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Books",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Image = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CategoryId = table.Column<int>(type: "int", nullable: false),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false, defaultValue: false),
                    CreatedTime = table.Column<DateTime>(type: "datetime2", nullable: true, defaultValue: new DateTime(2023, 9, 14, 0, 25, 5, 787, DateTimeKind.Local).AddTicks(3668)),
                    UpdatedTime = table.Column<DateTime>(type: "datetime2", nullable: true, defaultValue: new DateTime(2023, 9, 14, 0, 25, 5, 787, DateTimeKind.Local).AddTicks(3846))
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Books", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Books_Categories_CategoryId",
                        column: x => x.CategoryId,
                        principalTable: "Categories",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "BorrowBills",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<int>(type: "int", nullable: false),
                    BorrowTime = table.Column<DateTime>(type: "datetime2", nullable: true),
                    DueTime = table.Column<DateTime>(type: "datetime2", nullable: true),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false, defaultValue: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BorrowBills", x => x.Id);
                    table.ForeignKey(
                        name: "FK_BorrowBills_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "BorrowBillDetails",
                columns: table => new
                {
                    BorrowBillId = table.Column<int>(type: "int", nullable: false),
                    BookId = table.Column<int>(type: "int", nullable: false),
                    Amount = table.Column<int>(type: "int", nullable: false, defaultValue: 1)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BorrowBillDetails", x => new { x.BorrowBillId, x.BookId });
                    table.ForeignKey(
                        name: "FK_BorrowBillDetails_Books_BookId",
                        column: x => x.BookId,
                        principalTable: "Books",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_BorrowBillDetails_BorrowBills_BorrowBillId",
                        column: x => x.BorrowBillId,
                        principalTable: "BorrowBills",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Categories",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 1, "Tiểu thuyết" },
                    { 2, "Sách tâm lý" },
                    { 3, "Truyện tranh" }
                });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "Address", "Avatar", "Email", "Name", "Password", "Phone", "RegisteredDate", "UpdatedDate" },
                values: new object[,]
                {
                    { 1, "3/2, Ninh Kieu, Can Tho", "myAvatar.jpg", "minhkhalectu@gmail.com", "Le Minh Kha", "leminhkha123", "0398897634", new DateTime(2023, 9, 14, 0, 25, 5, 787, DateTimeKind.Local).AddTicks(7576), new DateTime(2023, 9, 14, 0, 25, 5, 787, DateTimeKind.Local).AddTicks(7580) },
                    { 2, "622/10, phuong 13, Cong Hoa, Tan Binh. Tp. HCM", "myChongiu.jpg", "silasnguyen@gmail.com", "Nguyen Tung Lam", "chongiu23", "0338307449", new DateTime(2023, 9, 14, 0, 25, 5, 787, DateTimeKind.Local).AddTicks(7581), new DateTime(2023, 9, 14, 0, 25, 5, 787, DateTimeKind.Local).AddTicks(7581) }
                });

            migrationBuilder.InsertData(
                table: "Books",
                columns: new[] { "Id", "CategoryId", "Image", "Name" },
                values: new object[,]
                {
                    { 1, 2, "Tìm mình trong thế giới hậu tuổi thơ.jpg", "Tìm mình trong thế giới hậu tuổi thơ" },
                    { 2, 1, "Điều kỳ diệu của tiệm tạp hóa Namiya.jpg", "Điều kỳ diệu của tiệm tạp hóa Namiya" },
                    { 3, 2, "Rồi một ngày cuộc sống hóa hư vô.jpg", "Rồi một ngày cuộc sống hóa hư vô" },
                    { 4, 1, "Quán ăn nơi góc hẻm.jpg", "Quán ăn nơi góc hẻm" },
                    { 5, 1, "Ngắm tuổi trẻ quay cuồng trong tỉnh lặng.jpg", "Ngắm tuổi trẻ quay cuồng trong tỉnh lặng" },
                    { 6, 3, "Doraemon truyện dài Nobita và chú khủng long.jpg", "Doraemon truyện dài: Nobita và chú khủng long" },
                    { 7, 3, "Doraemon và Nobita ở thế giới phép thuật.jpg", "Doraemon và Nobita ở thế giới phép thuật" }
                });

            migrationBuilder.InsertData(
                table: "BorrowBills",
                columns: new[] { "Id", "BorrowTime", "DueTime", "UserId" },
                values: new object[] { 1, null, null, 1 });

            migrationBuilder.InsertData(
                table: "BorrowBillDetails",
                columns: new[] { "BookId", "BorrowBillId", "Amount" },
                values: new object[,]
                {
                    { 1, 1, 1 },
                    { 2, 1, 1 },
                    { 3, 1, 1 }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Books_CategoryId",
                table: "Books",
                column: "CategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_BorrowBillDetails_BookId",
                table: "BorrowBillDetails",
                column: "BookId");

            migrationBuilder.CreateIndex(
                name: "IX_BorrowBills_UserId",
                table: "BorrowBills",
                column: "UserId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BorrowBillDetails");

            migrationBuilder.DropTable(
                name: "Books");

            migrationBuilder.DropTable(
                name: "BorrowBills");

            migrationBuilder.DropTable(
                name: "Categories");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
