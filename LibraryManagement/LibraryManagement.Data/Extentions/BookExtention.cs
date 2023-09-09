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
                Image = "Tìm mình trong thế giới hậu tuổi thơ.jpg",
                CategoryId = 2,
                IsDeleted = false, 
            },
            new Book()
            {
                Id = 2,
                Name = "Điều kỳ diệu của tiệm tạp hóa Namiya",
                Image = "Điều kỳ diệu của tiệm tạp hóa Namiya.jpg",
                CategoryId = 1,
                IsDeleted = false,
            },
            new Book()
            {
                Id = 3,
                Name = "Rồi một ngày cuộc sống hóa hư vô",
                Image = "Rồi một ngày cuộc sống hóa hư vô.jpg",
                CategoryId = 2,
                IsDeleted = false,
            },
            new Book()
            {
                Id = 4,
                Name = "Quán ăn nơi góc hẻm",
                Image = "Quán ăn nơi góc hẻm.jpg",
                CategoryId = 1,
                IsDeleted = false,
            },
            new Book()
            {
                Id = 5,
                Name = "Ngắm tuổi trẻ quay cuồng trong tỉnh lặng",
                Image = "Ngắm tuổi trẻ quay cuồng trong tỉnh lặng.jpg",
                CategoryId = 1,
                IsDeleted = false,
            },
            new Book()
            {
                Id = 6,
                Name = "Doraemon truyện dài: Nobita và chú khủng long",
                Image = "Doraemon truyện dài Nobita và chú khủng long.jpg",
                CategoryId = 3,
                IsDeleted = false,
            },
            new Book()
            {
                Id = 7,
                Name = "Doraemon và Nobita ở thế giới phép thuật",
                Image = "Doraemon và Nobita ở thế giới phép thuật.jpg",
                CategoryId = 3,
                IsDeleted = false,
            }

            );
        }
    }
}
