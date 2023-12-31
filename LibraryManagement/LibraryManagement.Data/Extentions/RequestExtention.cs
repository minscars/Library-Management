﻿using LibraryManagement.Data.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryManagement.Data.Extentions
{
    public static class RequestExtention
    {
        public static void FillDataRequest(this ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Request>().HasData(
            new Request()
            {
                UserId = new Guid("8A820ADB-93D7-4C6F-9404-BDBFC14419F4"),
                BookId = 1,
                Quantity = 1,
                IsSelected = true,
                IsDeleted = false
            }
            );

            
        }
    }
}
