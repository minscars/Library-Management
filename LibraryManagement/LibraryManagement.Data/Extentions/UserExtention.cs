using LibraryManagement.Data.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Intrinsics.X86;
using System.Text;
using System.Threading.Tasks;

namespace LibraryManagement.Data.Extentions
{
    public static class UserExtention
    {
        public static void FillDataUser(this ModelBuilder modelBuilder)
        {
            var adminRoleId = new Guid("9E87B492-5343-4272-9A34-FA5DE7CFFB22");
            var userRoleId = new Guid("8F7579EE-4AF9-4B71-9ADA-7F792F76DC31");
            var adminId = new Guid("372EA575-2536-4076-9BAB-3E3138DE495F");
            var userId = new Guid("8A820ADB-93D7-4C6F-9404-BDBFC14419F4");

            //Seed data for UserRole
            modelBuilder.Entity<UserRole>().HasData(
            new UserRole
            {
                Id = adminRoleId,
                Name = "admin",
                NormalizedName = "admin"
            },
            new UserRole
            {
                Id = userRoleId,
                Name = "reader",
                NormalizedName = "reader"
            }
            );

            //Seed data for User
            var hasher = new PasswordHasher<User>();
            var user = new User()
            {
                Id = userId,
                Name = "Lê Minh Kha",
                Email = "kha@gmail.com",
                Image = "user.jpg"
            };
            var admin = new User()
            {
                Id = adminId,
                Name = "John",
                Email = "admin@gmail.com",
                Image = "admin.jpg"
            };

            user.Password = hasher.HashPassword(user, "user123");
            admin.Password = hasher.HashPassword(admin, "admin123");
            modelBuilder.Entity<User>().HasData(user, admin);

            //Seed data for IdentityUserRole
            modelBuilder.Entity<IdentityUserRole<Guid>>().HasData(
              new IdentityUserRole<Guid>
              {
                  RoleId = adminRoleId,
                  UserId = adminId,
              },
              new IdentityUserRole<Guid>
              {
                  RoleId = userRoleId,
                  UserId = userId,
              });
        }
    }
}
