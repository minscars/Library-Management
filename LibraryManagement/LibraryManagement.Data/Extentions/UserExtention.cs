using LibraryManagement.Data.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryManagement.Data.Extentions
{
    public static class UserExtention
    {
        public static void FillDataUser(this ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().HasData(
                new User()
                {
                    Id = 1,
                    Name = "Le Minh Kha",
                    Email = "minhkhalectu@gmail.com",
                    Address = "3/2, Ninh Kieu, Can Tho",
                    Phone = "0398897634",
                    Avatar = "myAvatar.jpg",
                    Password = "leminhkha123",
                    RegisteredDate = DateTime.Now,
                    UpdatedDate = DateTime.Now
                },

                new User()
                {
                    Id = 2,
                    Name = "Nguyen Tung Lam",
                    Email = "silasnguyen@gmail.com",
                    Address = "622/10, phuong 13, Cong Hoa, Tan Binh. Tp. HCM",
                    Phone = "0338307449",
                    Avatar = "myChongiu.jpg",
                    Password = "chongiu23",
                    RegisteredDate = DateTime.Now,
                    UpdatedDate = DateTime.Now
                }
                );
 
        }
    }
}
