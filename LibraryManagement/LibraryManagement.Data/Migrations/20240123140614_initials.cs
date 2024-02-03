using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace LibraryManagement.Data.Migrations
{
    /// <inheritdoc />
    public partial class initials : Migration
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
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: true, defaultValue: new DateTime(2024, 1, 23, 21, 6, 13, 906, DateTimeKind.Local).AddTicks(5994)),
                    UpdatedDate = table.Column<DateTime>(type: "datetime2", nullable: true, defaultValue: new DateTime(2024, 1, 23, 21, 6, 13, 906, DateTimeKind.Local).AddTicks(6193)),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false, defaultValue: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Categories", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Roles",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    NormalizedName = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Roles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Avatar = table.Column<string>(type: "nvarchar(max)", nullable: true, defaultValue: "avatar-default.png"),
                    UserName = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    NormalizedUserName = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    Email = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    NormalizedEmail = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    EmailConfirmed = table.Column<bool>(type: "bit", nullable: false),
                    PasswordHash = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SecurityStamp = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PhoneNumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PhoneNumberConfirmed = table.Column<bool>(type: "bit", nullable: false),
                    TwoFactorEnabled = table.Column<bool>(type: "bit", nullable: false),
                    LockoutEnd = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: true),
                    LockoutEnabled = table.Column<bool>(type: "bit", nullable: false),
                    AccessFailedCount = table.Column<int>(type: "int", nullable: false)
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
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Quantity_Import = table.Column<int>(type: "int", nullable: false, defaultValue: 100),
                    Quantity_Export = table.Column<int>(type: "int", nullable: false, defaultValue: 0),
                    Quantity_On_Hand = table.Column<int>(type: "int", nullable: false, defaultValue: 100),
                    Quantity_Borrowed = table.Column<int>(type: "int", nullable: false, defaultValue: 0),
                    Image = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CategoryId = table.Column<int>(type: "int", nullable: false),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false, defaultValue: false),
                    CreatedTime = table.Column<DateTime>(type: "datetime2", nullable: true, defaultValue: new DateTime(2024, 1, 23, 21, 6, 13, 906, DateTimeKind.Local).AddTicks(4944)),
                    UpdatedTime = table.Column<DateTime>(type: "datetime2", nullable: true, defaultValue: new DateTime(2024, 1, 23, 21, 6, 13, 906, DateTimeKind.Local).AddTicks(5215))
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
                name: "RoleClaims",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    RoleId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    ClaimType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClaimValue = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RoleClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_RoleClaims_Roles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "Roles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "BorrowBills",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Comment = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CreateDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    RejectedDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    ApprovalDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    BorrowDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    ReceivedDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    DueDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    ReturnedDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    CancelDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    Status = table.Column<int>(type: "int", nullable: false),
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
                name: "Posts",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Image = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Content = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: true, defaultValue: new DateTime(2024, 1, 23, 21, 6, 13, 907, DateTimeKind.Local).AddTicks(2067)),
                    UpdatedDate = table.Column<DateTime>(type: "datetime2", nullable: true, defaultValue: new DateTime(2024, 1, 23, 21, 6, 13, 907, DateTimeKind.Local).AddTicks(2340)),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: true, defaultValue: false),
                    Status = table.Column<int>(type: "int", nullable: false, defaultValue: 1)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Posts", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Posts_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "UserClaims",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    ClaimType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClaimValue = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_UserClaims_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "UserLogins",
                columns: table => new
                {
                    LoginProvider = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ProviderKey = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ProviderDisplayName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UserId = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserLogins", x => new { x.LoginProvider, x.ProviderKey });
                    table.ForeignKey(
                        name: "FK_UserLogins_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "UserRoles",
                columns: table => new
                {
                    UserId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    RoleId = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserRoles", x => new { x.UserId, x.RoleId });
                    table.ForeignKey(
                        name: "FK_UserRoles_Roles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "Roles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_UserRoles_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "UserTokens",
                columns: table => new
                {
                    UserId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    LoginProvider = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Value = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserTokens", x => new { x.UserId, x.LoginProvider, x.Name });
                    table.ForeignKey(
                        name: "FK_UserTokens_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "FeedBacks",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    BookId = table.Column<int>(type: "int", nullable: true),
                    Content = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Rate = table.Column<int>(type: "int", nullable: true, defaultValue: 0),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: true, defaultValue: false),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: true, defaultValue: new DateTime(2024, 1, 23, 21, 6, 13, 907, DateTimeKind.Local).AddTicks(4252))
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FeedBacks", x => x.Id);
                    table.ForeignKey(
                        name: "FK_FeedBacks_Books_BookId",
                        column: x => x.BookId,
                        principalTable: "Books",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_FeedBacks_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "Requests",
                columns: table => new
                {
                    UserId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    BookId = table.Column<int>(type: "int", nullable: false),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Quantity = table.Column<int>(type: "int", nullable: false, defaultValue: 1),
                    IsSelected = table.Column<bool>(type: "bit", nullable: false),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false, defaultValue: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Requests", x => new { x.BookId, x.UserId, x.CreatedDate });
                    table.ForeignKey(
                        name: "FK_Requests_Books_BookId",
                        column: x => x.BookId,
                        principalTable: "Books",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Requests_Users_UserId",
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

            migrationBuilder.CreateTable(
                name: "Notifications",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BorrowBillId = table.Column<int>(type: "int", nullable: false),
                    UserId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Message = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CreateDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    IsViewed = table.Column<bool>(type: "bit", nullable: false, defaultValue: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Notifications", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Notifications_BorrowBills_BorrowBillId",
                        column: x => x.BorrowBillId,
                        principalTable: "BorrowBills",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Comments",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PostId = table.Column<int>(type: "int", nullable: true),
                    UserId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    Content = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: true, defaultValue: new DateTime(2024, 1, 23, 21, 6, 13, 907, DateTimeKind.Local).AddTicks(2829)),
                    ReplyCommentId = table.Column<int>(type: "int", nullable: true),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: true, defaultValue: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Comments", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Comments_Posts_PostId",
                        column: x => x.PostId,
                        principalTable: "Posts",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Comments_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id");
                });

            migrationBuilder.InsertData(
                table: "Categories",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 1, "Tiểu thuyết" },
                    { 2, "Sách tâm lý" },
                    { 3, "Sách khoa học" },
                    { 4, "Từ điển" },
                    { 5, "Sách văn học" }
                });

            migrationBuilder.InsertData(
                table: "Roles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { new Guid("8f7579ee-4af9-4b71-9ada-7f792f76dc31"), "2b75d5e1-0d18-43d7-b1c2-a57beb424892", "User", "USER" },
                    { new Guid("9e87b492-5343-4272-9a34-fa5de7cffb22"), "9baf42f5-c043-41a7-890a-bb03ee624761", "Admin", "ADMIN" }
                });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "AccessFailedCount", "Avatar", "ConcurrencyStamp", "Email", "EmailConfirmed", "LockoutEnabled", "LockoutEnd", "Name", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "PhoneNumber", "PhoneNumberConfirmed", "SecurityStamp", "TwoFactorEnabled", "UserName" },
                values: new object[,]
                {
                    { new Guid("2a738bf3-a14b-488e-b04e-17f918e8d6a4"), 0, "lam.jpg", "965c38aa-bede-46be-a3bd-fe40d08f39dc", "lam@gmail.com", false, false, null, "Nguyễn Tùng Lâm", "LAM@GMAIL.COM", "LAM@GMAIL.COM", "AQAAAAEAACcQAAAAEP7mXZ7wDI0qnT6+wJKOlwIW2HjjSKFs5kVPJkpiwVw11nJRH23iUt4kx0fvjRaq+g==", "0338307449", false, null, false, "lam@gmail.com" },
                    { new Guid("372ea575-2536-4076-9bab-3e3138de495f"), 0, "admin.jpg", "3aea5380-859d-4926-bff4-e02f8e9649a2", "admin@gmail.com", false, false, null, "John", "ADMIN@GMAIL.COM", "ADMIN@GMAIL.COM", "AQAAAAEAACcQAAAAEOT3SOl8OfH1b0em3Xv1dtZ0Suvbu/nQktA5VFcxcZbmN2nCpF7JCxej6kxr1DmhWw==", "0123456789", false, null, false, "admin@gmail.com" },
                    { new Guid("8a820adb-93d7-4c6f-9404-bdbfc14419f4"), 0, "kha.jpg", "276f5c4a-b60a-4087-a62f-24fa6478f6d9", "kha@gmail.com", false, false, null, "Lê Minh Kha", "KHA@GMAIL.COM", "KHA@GMAIL.COM", "AQAAAAEAACcQAAAAEFa5KuohgJYzlO0s6yLXlijXGdPip3w2qrKI+5gXmgkc1nBI5mYhf4LRG3W5FmphDw==", "0398897634", false, null, false, "kha@gmail.com" }
                });

            migrationBuilder.InsertData(
                table: "Books",
                columns: new[] { "Id", "CategoryId", "Description", "Image", "Name" },
                values: new object[,]
                {
                    { 1, 2, "Khi ngợi khen một người trẻ độc lập mạnh mẽ, có thể chúng ta không sao, cô đơn khắc khoải thế nào. Khi ngưỡng một một người trẻ học giỏi, có thể chúng ta không biết họ đã bị ngạt thở bởi kỳ vọng của cha mẹ. Khi phán xét một người trẻ hời hợt thiếu động lực sống...", "1.png", "Tìm mình trong thế giới hậu tuổi thơ" },
                    { 2, 1, "Khi ngợi khen một người trẻ độc lập mạnh mẽ, có thể chúng ta không sao, cô đơn khắc khoải thế nào. Khi ngưỡng một một người trẻ học giỏi, có thể chúng ta không biết họ đã bị ngạt thở bởi kỳ vọng của cha mẹ. Khi phán xét một người trẻ hời hợt thiếu động lực sống...", "2.png", "Điều kỳ diệu của tiệm tạp hóa Namiya" },
                    { 3, 2, "Khi ngợi khen một người trẻ độc lập mạnh mẽ, có thể chúng ta không sao, cô đơn khắc khoải thế nào. Khi ngưỡng một một người trẻ học giỏi, có thể chúng ta không biết họ đã bị ngạt thở bởi kỳ vọng của cha mẹ. Khi phán xét một người trẻ hời hợt thiếu động lực sống...", "3.png", "Rồi một ngày cuộc sống hóa hư vô" },
                    { 4, 1, "Khi ngợi khen một người trẻ độc lập mạnh mẽ, có thể chúng ta không sao, cô đơn khắc khoải thế nào. Khi ngưỡng một một người trẻ học giỏi, có thể chúng ta không biết họ đã bị ngạt thở bởi kỳ vọng của cha mẹ. Khi phán xét một người trẻ hời hợt thiếu động lực sống...", "4.png", "Quán ăn nơi góc hẻm" },
                    { 5, 3, "Khi ngợi khen một người trẻ độc lập mạnh mẽ, có thể chúng ta không sao, cô đơn khắc khoải thế nào. Khi ngưỡng một một người trẻ học giỏi, có thể chúng ta không biết họ đã bị ngạt thở bởi kỳ vọng của cha mẹ. Khi phán xét một người trẻ hời hợt thiếu động lực sống...", "5.png", "Thần số học" },
                    { 6, 4, "Khi ngợi khen một người trẻ độc lập mạnh mẽ, có thể chúng ta không sao, cô đơn khắc khoải thế nào. Khi ngưỡng một một người trẻ học giỏi, có thể chúng ta không biết họ đã bị ngạt thở bởi kỳ vọng của cha mẹ. Khi phán xét một người trẻ hời hợt thiếu động lực sống...", "6.png", "Từ điển tiếng Việt" },
                    { 7, 4, "Khi ngợi khen một người trẻ độc lập mạnh mẽ, có thể chúng ta không sao, cô đơn khắc khoải thế nào. Khi ngưỡng một một người trẻ học giỏi, có thể chúng ta không biết họ đã bị ngạt thở bởi kỳ vọng của cha mẹ. Khi phán xét một người trẻ hời hợt thiếu động lực sống...", "7.png", "Từ điển Hán Việt" },
                    { 8, 5, "Khi ngợi khen một người trẻ độc lập mạnh mẽ, có thể chúng ta không sao, cô đơn khắc khoải thế nào. Khi ngưỡng một một người trẻ học giỏi, có thể chúng ta không biết họ đã bị ngạt thở bởi kỳ vọng của cha mẹ. Khi phán xét một người trẻ hời hợt thiếu động lực sống...", "8.png", "Đất rừng phương nam" },
                    { 9, 3, "Khi ngợi khen một người trẻ độc lập mạnh mẽ, có thể chúng ta không sao, cô đơn khắc khoải thế nào. Khi ngưỡng một một người trẻ học giỏi, có thể chúng ta không biết họ đã bị ngạt thở bởi kỳ vọng của cha mẹ. Khi phán xét một người trẻ hời hợt thiếu động lực sống...", "9.png", "Lược sử Trái Đất" },
                    { 10, 3, "Khi ngợi khen một người trẻ độc lập mạnh mẽ, có thể chúng ta không sao, cô đơn khắc khoải thế nào. Khi ngưỡng một một người trẻ học giỏi, có thể chúng ta không biết họ đã bị ngạt thở bởi kỳ vọng của cha mẹ. Khi phán xét một người trẻ hời hợt thiếu động lực sống...", "10.png", "Sapien lược sử loài người" }
                });

            migrationBuilder.InsertData(
                table: "Posts",
                columns: new[] { "Id", "Content", "Image", "Title", "UserId" },
                values: new object[] { 1, "Test", "Test", "Test", new Guid("8a820adb-93d7-4c6f-9404-bdbfc14419f4") });

            migrationBuilder.InsertData(
                table: "UserClaims",
                columns: new[] { "Id", "ClaimType", "ClaimValue", "UserId" },
                values: new object[,]
                {
                    { 1, "id", "372ea575-2536-4076-9bab-3e3138de495f", new Guid("372ea575-2536-4076-9bab-3e3138de495f") },
                    { 2, "email", "admin@gmail.com", new Guid("372ea575-2536-4076-9bab-3e3138de495f") },
                    { 3, "roles", "Admin", new Guid("372ea575-2536-4076-9bab-3e3138de495f") },
                    { 4, "id", "8a820adb-93d7-4c6f-9404-bdbfc14419f4", new Guid("8a820adb-93d7-4c6f-9404-bdbfc14419f4") },
                    { 5, "email", "kha@gmail.com", new Guid("8a820adb-93d7-4c6f-9404-bdbfc14419f4") },
                    { 6, "roles", "User", new Guid("8a820adb-93d7-4c6f-9404-bdbfc14419f4") },
                    { 7, "id", "2a738bf3-a14b-488e-b04e-17f918e8d6a4", new Guid("2a738bf3-a14b-488e-b04e-17f918e8d6a4") },
                    { 8, "email", "lam@gmail.com", new Guid("2a738bf3-a14b-488e-b04e-17f918e8d6a4") },
                    { 9, "roles", "User", new Guid("2a738bf3-a14b-488e-b04e-17f918e8d6a4") }
                });

            migrationBuilder.InsertData(
                table: "UserRoles",
                columns: new[] { "RoleId", "UserId" },
                values: new object[,]
                {
                    { new Guid("8f7579ee-4af9-4b71-9ada-7f792f76dc31"), new Guid("2a738bf3-a14b-488e-b04e-17f918e8d6a4") },
                    { new Guid("9e87b492-5343-4272-9a34-fa5de7cffb22"), new Guid("372ea575-2536-4076-9bab-3e3138de495f") },
                    { new Guid("8f7579ee-4af9-4b71-9ada-7f792f76dc31"), new Guid("8a820adb-93d7-4c6f-9404-bdbfc14419f4") }
                });

            migrationBuilder.InsertData(
                table: "Comments",
                columns: new[] { "Id", "Content", "CreatedDate", "PostId", "ReplyCommentId", "UserId" },
                values: new object[] { 1, "Test", new DateTime(2024, 1, 23, 21, 6, 13, 911, DateTimeKind.Local).AddTicks(7106), 1, null, new Guid("8a820adb-93d7-4c6f-9404-bdbfc14419f4") });

            migrationBuilder.InsertData(
                table: "FeedBacks",
                columns: new[] { "Id", "BookId", "Content", "CreatedDate", "Rate", "UserId" },
                values: new object[] { 1, 2, "Test", new DateTime(2024, 1, 23, 21, 6, 13, 911, DateTimeKind.Local).AddTicks(7130), 5, new Guid("8a820adb-93d7-4c6f-9404-bdbfc14419f4") });

            migrationBuilder.InsertData(
                table: "Requests",
                columns: new[] { "BookId", "CreatedDate", "UserId", "IsSelected", "Quantity" },
                values: new object[] { 1, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new Guid("8a820adb-93d7-4c6f-9404-bdbfc14419f4"), true, 1 });

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

            migrationBuilder.CreateIndex(
                name: "IX_Comments_PostId",
                table: "Comments",
                column: "PostId");

            migrationBuilder.CreateIndex(
                name: "IX_Comments_UserId",
                table: "Comments",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_FeedBacks_BookId",
                table: "FeedBacks",
                column: "BookId");

            migrationBuilder.CreateIndex(
                name: "IX_FeedBacks_UserId",
                table: "FeedBacks",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Notifications_BorrowBillId",
                table: "Notifications",
                column: "BorrowBillId");

            migrationBuilder.CreateIndex(
                name: "IX_Posts_UserId",
                table: "Posts",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Requests_UserId",
                table: "Requests",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_RoleClaims_RoleId",
                table: "RoleClaims",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "RoleNameIndex",
                table: "Roles",
                column: "NormalizedName",
                unique: true,
                filter: "[NormalizedName] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_UserClaims_UserId",
                table: "UserClaims",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_UserLogins_UserId",
                table: "UserLogins",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_UserRoles_RoleId",
                table: "UserRoles",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "EmailIndex",
                table: "Users",
                column: "NormalizedEmail");

            migrationBuilder.CreateIndex(
                name: "UserNameIndex",
                table: "Users",
                column: "NormalizedUserName",
                unique: true,
                filter: "[NormalizedUserName] IS NOT NULL");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BorrowBillDetails");

            migrationBuilder.DropTable(
                name: "Comments");

            migrationBuilder.DropTable(
                name: "FeedBacks");

            migrationBuilder.DropTable(
                name: "Notifications");

            migrationBuilder.DropTable(
                name: "Requests");

            migrationBuilder.DropTable(
                name: "RoleClaims");

            migrationBuilder.DropTable(
                name: "UserClaims");

            migrationBuilder.DropTable(
                name: "UserLogins");

            migrationBuilder.DropTable(
                name: "UserRoles");

            migrationBuilder.DropTable(
                name: "UserTokens");

            migrationBuilder.DropTable(
                name: "Posts");

            migrationBuilder.DropTable(
                name: "BorrowBills");

            migrationBuilder.DropTable(
                name: "Books");

            migrationBuilder.DropTable(
                name: "Roles");

            migrationBuilder.DropTable(
                name: "Users");

            migrationBuilder.DropTable(
                name: "Categories");
        }
    }
}
