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
            var userId2 = new Guid("2A738BF3-A14B-488E-B04E-17F918E8D6A4");
            //Seed data for UserRole
            modelBuilder.Entity<UserRole>().HasData(
                new UserRole
                {
                    Id = adminRoleId,
                    Name = "Admin",
                    NormalizedName = "ADMIN",
                },
                new UserRole
                {
                    Id = userRoleId,
                    Name = "User",
                    NormalizedName = "USER",
                }
           );

            //Seed data for User
            var hasher = new PasswordHasher<User>();
            var user = new User()
            {
                Id = userId,
                Name = "Lê Minh Kha",
                UserName = "kha@gmail.com",
                NormalizedUserName = "KHA@GMAIL.COM",
                Email = "kha@gmail.com",
                NormalizedEmail = "KHA@GMAIL.COM",
                PhoneNumber = "0398897634",
                Avatar = "kha.jpg",
            };

            var user2 = new User()
            {
                Id = userId2,
                Name = "Nguyễn Tùng Lâm",
                UserName = "lam@gmail.com",
                NormalizedUserName = "LAM@GMAIL.COM",
                Email = "lam@gmail.com",
                NormalizedEmail = "LAM@GMAIL.COM",
                PhoneNumber = "0338307449",
                Avatar = "lam.jpg",
            };

            var admin = new User()
            {
                Id = adminId,
                Name = "John",
                UserName = "admin@gmail.com",
                NormalizedUserName = "ADMIN@GMAIL.COM",
                Email = "admin@gmail.com",
                NormalizedEmail = "ADMIN@GMAIL.COM",
                PhoneNumber = "0123456789",
                Avatar = "admin.jpg",
            };

            user.PasswordHash = hasher.HashPassword(user, "kha123");
            admin.PasswordHash = hasher.HashPassword(admin, "admin123");
            user2.PasswordHash = hasher.HashPassword(user2, "lam123");
            modelBuilder.Entity<User>().HasData(user, admin, user2);

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
              },
            new IdentityUserRole<Guid>
            {
                RoleId = userRoleId,
                UserId = userId2,
            });

            //Seed data for UserClaim
            modelBuilder.Entity<IdentityUserClaim<Guid>>().HasData(
              new IdentityUserClaim<Guid>
              {
                  Id = 1,
                  UserId = adminId,
                  ClaimType = "id",
                  ClaimValue = adminId.ToString()
              },
              new IdentityUserClaim<Guid>
              {
                  Id = 2,
                  UserId = adminId,
                  ClaimType = "email",
                  ClaimValue = "admin@gmail.com"
              },
              new IdentityUserClaim<Guid>
              {
                  Id = 3,
                  UserId = adminId,
                  ClaimType = "roles",
                  ClaimValue = "Admin"
              },
              new IdentityUserClaim<Guid>
              {
                  Id = 4,
                  UserId = userId,
                  ClaimType = "id",
                  ClaimValue = userId.ToString()
              },
              new IdentityUserClaim<Guid>
              {
                  Id = 5,
                  UserId = userId,
                  ClaimType = "email",
                  ClaimValue = "kha@gmail.com"
              },
              new IdentityUserClaim<Guid>
              {
                  Id = 6,
                  UserId = userId,
                  ClaimType = "roles",
                  ClaimValue = "User"
              },
                new IdentityUserClaim<Guid>
                {
                    Id = 7,
                    UserId = userId2,
                    ClaimType = "id",
                    ClaimValue = userId2.ToString()
                },
                new IdentityUserClaim<Guid>
                {
                    Id = 8,
                    UserId = userId2,
                    ClaimType = "email",
                    ClaimValue = "lam@gmail.com"
                },
                new IdentityUserClaim<Guid>
                {
                    Id = 9,
                    UserId = userId2,
                    ClaimType = "roles",
                    ClaimValue = "User"
                });
        }
    }
}
