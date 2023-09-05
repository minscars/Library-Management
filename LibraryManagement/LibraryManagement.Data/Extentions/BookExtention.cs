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
                CategoryId = 2,
                Description = "Discription",
                IsDeleted = false, 
            },
            new Book()
            {
                Id = 2,
                Name = "Điều kỳ diệu của tiệm tạp hóa Namiya",
                CategoryId = 1,
                Description = "Discription",
                IsDeleted = false,
            },
            new Book()
            {
                Id = 3,
                Name = "Rồi một ngày cuộc sống hóa hư vô",
                CategoryId = 2,
                Description = "Discription",
                IsDeleted = false,
            },
            new Book()
            {
                Id = 4,
                Name = "Quán ăn nơi góc hẻm",
                CategoryId = 1,
                Description = "Discription",
                IsDeleted = false,
            },
            new Book()
            {
                Id = 5,
                Name = "Ngắm tuổi trẻ quay cuồng trong tỉnh lặng",
                CategoryId = 1,
                Description = "Discription",
                IsDeleted = false,
            },
            new Book()
            {
                Id = 6,
                Name = "Doraemon truyện dài: Nobita và chú khủng long",
                CategoryId = 3,
                Description = "Discription",
                IsDeleted = false,
            },
            new Book()
            {
                Id = 7,
                Name = "Doraemon và Nobita ở thế giới phép thuật",
                CategoryId = 3,
                Description = "Discription",
                IsDeleted = false,
            }

            );
        }
    }
}
