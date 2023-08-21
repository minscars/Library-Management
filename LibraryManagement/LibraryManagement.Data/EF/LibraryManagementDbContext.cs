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
        public LibraryManagementDbContext(DbContextOptions<LibraryManagementDbContext> options) : base(options)
        {

        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new BookConfig());

            modelBuilder.FillDataBook();
        }
    }
}
