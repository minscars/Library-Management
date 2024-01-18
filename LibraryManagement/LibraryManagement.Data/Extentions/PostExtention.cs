using LibraryManagement.Data.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryManagement.Data.Extentions
{
    public static class PostExtention
    {
        public static void FillDataPost(this ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Post>().HasData(
                new Post()
                {
                    Id = 1,
                    UserId = new Guid("8A820ADB-93D7-4C6F-9404-BDBFC14419F4"),
                    Title = "Test",
                    Content = "Test",
                    Image = "Test",
                }
                );

        }
        
    }
}
