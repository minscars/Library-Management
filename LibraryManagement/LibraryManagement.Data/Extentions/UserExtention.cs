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
                    Id = Guid.NewGuid(),
                },

                new User()
                {
                    Id = Guid.NewGuid(),
                }
            );
           
        }
    }
}
