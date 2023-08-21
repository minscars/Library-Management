using LibraryManagement.Data.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryManagement.Data.Extentions
{
    public static class BookExtention
    {
        public static void FillDataBook(this ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Book>().HasData(
            new Book()
            {
                Id = 1,
                Name = "Tìm mình trong thế giới hậu tuổi thơ",
                Description = "Discription",
                IsDeleted = false, 
            });
        }
    }
}
