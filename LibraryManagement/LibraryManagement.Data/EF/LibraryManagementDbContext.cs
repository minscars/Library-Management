using LibraryManagement.Data.Configurations;
using LibraryManagement.Data.Extentions;
using LibraryManagement.Data.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryManagement.Data.EF
{
    public class LibraryManagementDbContext : DbContext
    {
        public DbSet<Book> Books { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<BorrowBill> BorrowBills { get; set; }
        public DbSet<BorrowBillDetail> BorrowBillDetails { get; set; }
        public LibraryManagementDbContext(DbContextOptions<LibraryManagementDbContext> options) : base(options)
        {

        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new BookConfig())
                        .ApplyConfiguration(new UserConfig())
                        .ApplyConfiguration(new CategoryConfig())
                        .ApplyConfiguration(new BorrowBillConfig())
                        .ApplyConfiguration(new BorrowBillDetailConfig());


            modelBuilder.FillDataBook();
            modelBuilder.FillDataCategory();
            modelBuilder.FillDataBorrowBill();
            modelBuilder.FillDataBorrowBillDetail();
            modelBuilder.FillDataUser();


        }
    }
}
