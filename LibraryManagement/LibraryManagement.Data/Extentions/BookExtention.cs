using LibraryManagement.Data.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Net.Mime.MediaTypeNames;

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
                Image = "1.png",
                CategoryId = 2,
                IsDeleted = false, 
            },
            new Book()
            {
                Id = 2,
                Name = "Điều kỳ diệu của tiệm tạp hóa Namiya",
                Image = "2.png",
                CategoryId = 1,
                IsDeleted = false,
            },
            new Book()
            {
                Id = 3,
                Name = "Rồi một ngày cuộc sống hóa hư vô",
                Image = "3.png",
                CategoryId = 2,
                IsDeleted = false,
            },
            new Book()
            {
                Id = 4,
                Name = "Quán ăn nơi góc hẻm",
                Image = "4.png",
                CategoryId = 1,
                IsDeleted = false,
            },
            new Book()
            {
                Id = 5,
                Name = "Thần số học",
                Image = "15.png",
                CategoryId = 3,
                IsDeleted = false,
            },
            new Book()
            {
                Id = 6,
                Name = "Từ điển tiếng Việt",
                Image = "6.png",
                CategoryId = 4,
                IsDeleted = false,
            },
            new Book(){
                Id = 7,
                Name = "Từ điển Hán Việt",
                Image = "7.png",
                CategoryId = 4,
                IsDeleted = false,
            },
            new Book()
            {
                Id = 8,
                Name = "Đất rừng phương nam",
                Image = "8.png",
                CategoryId = 5,
                IsDeleted = false,
            },
            new Book()
            {
                Id = 9,
                Name = "Lược sử Trái Đất",
                Image = "9.png",
                CategoryId = 3,
                IsDeleted = false,
            },
            new Book()
            {
                Id = 10,
                Name = "Sapien lược sử loài người",
                Image = "10.png",
                CategoryId = 3,
                IsDeleted = false,
            }
            );
        }
    }
}
