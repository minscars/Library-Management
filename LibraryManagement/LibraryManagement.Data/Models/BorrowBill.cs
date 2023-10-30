using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryManagement.Data.Models
{
    public class BorrowBill
    {
        public int Id { get; set; }
        public Guid UserId { get; set; }
        public DateTime? BorrowTime { get; set; }
        public DateTime? DueTime { get; set; }
        public User User { get; set; }
        public int Status { get; set; }
        public bool IsDeleted { get; set; }
        public virtual List<BorrowBillDetail> BorrowBillDetail { get; set; }
    }
}
