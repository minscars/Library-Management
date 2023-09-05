using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryManagement.Data.Models
{
    public class BorrowBillDetail
    {
        public int BorrowBillId { get; set; }
        public int BookId { get; set; }
        public int Amount { get; set; }
        public virtual BorrowBill BorrowBill { get; set; }
        public virtual Book Book { get; set; }
    }
}
