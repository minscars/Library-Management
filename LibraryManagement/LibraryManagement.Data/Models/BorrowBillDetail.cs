using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryManagement.Data.Models
{
    public class BorrowBillDetail
    {
        public int BillId { get; set; }
        public int BookId { get; set; }
        public int Amount { get; set; }
        public BorrowBill BorrowBill { get; set; }
        public Book Book { get; set; }
    }
}
