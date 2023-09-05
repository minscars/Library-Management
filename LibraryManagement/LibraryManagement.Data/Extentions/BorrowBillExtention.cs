using LibraryManagement.Data.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryManagement.Data.Extentions
{
    public static class BorrowBillExtention
    {
        public static void FillDataBorrowBill(this ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<BorrowBill>().HasData(
            new BorrowBill()
            {
                Id = 1,
                UserId = 1,
            }
            );
        }
    }
}
