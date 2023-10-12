using LibraryManagement.Data.Configurations;
using LibraryManagement.Data.Extentions;
using LibraryManagement.Data.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace LibraryManagement.Data.EF
{
    public class LibraryManagementDbContext : IdentityDbContext<User, UserRole, Guid>
    {
        public DbSet<Book> Books { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<BorrowBill> BorrowBills { get; set; }
        public DbSet<BorrowBillDetail> BorrowBillDetails { get; set; }
        public DbSet<User> AppUsers { set; get; }
        public DbSet<UserRole> UserRoles { set; get; }
        public LibraryManagementDbContext(DbContextOptions<LibraryManagementDbContext> options) : base(options)
        {

        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.ApplyConfiguration(new BookConfig())
                        .ApplyConfiguration(new UserConfig())
                        .ApplyConfiguration(new CategoryConfig())
                        .ApplyConfiguration(new BorrowBillConfig())
                        .ApplyConfiguration(new BorrowBillDetailConfig());


            modelBuilder.FillDataBook();
            modelBuilder.FillDataCategory();
            modelBuilder.FillDataBorrowBill();
            modelBuilder.FillDataBorrowBillDetail();
            //modelBuilder.FillDataUser();

            foreach (var entityType in modelBuilder.Model.GetEntityTypes())
            {
                var tableName = entityType.GetTableName();
                if (tableName!.StartsWith("AspNet"))
                {
                    entityType.SetTableName(tableName.Substring(6));
                }
            }
        }
    }
}
