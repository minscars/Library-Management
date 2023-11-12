using DotLiquid.Tags;
using LibraryManagement.DTO.Book;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryManagement.DTO.BorrowBill
{
    public class BorrowedBookDTO : BookDTO
    {
        public int Amount { get; set; }
    }
}
