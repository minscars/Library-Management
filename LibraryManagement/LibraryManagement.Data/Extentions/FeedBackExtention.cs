using LibraryManagement.Data.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryManagement.Data.Extentions
{
    public static class FeedBackExtention
    {
        public static void FillDataFeedBack(this ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<FeedBack>().HasData(
                new FeedBack()
                {
                    Id = 1,
                    UserId = new Guid("8A820ADB-93D7-4C6F-9404-BDBFC14419F4"),
                    BookId = 2,
                    Content = "Test",
                    Rate = 5,
                    CreatedDate = DateTime.Now,
                }
                );

        }
    }
}
