using LibraryManagement.Data.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryManagement.Data.Extentions
{
    public static class BorrowBillDetailExtention
    {
        public static void FillDataBorrowBillDetail(this ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<BorrowBillDetail>().HasData(
                new BorrowBillDetail()
                {
                    BorrowBillId = 1,
                    BookId = 1,
                    Amount = 1,
                },
                new BorrowBillDetail()
                {
                    BorrowBillId = 1,
                    BookId = 2,
                    Amount = 1,
                },
                new BorrowBillDetail()
                {
                    BorrowBillId = 1,
                    BookId = 3,
                    Amount = 1,
                }
                );
        }
    }
}
