using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryManagement.Data.Models
{
    public class Notification
    {
        public int Id { get; set; }
        public int BorrowBillId { get; set; }
        public Guid UserId { get; set; }
        public string? Message { get; set; }
        public DateTime CreateDate { get; set; }
        public bool IsViewed { get; set; }
        public virtual BorrowBill BorrowBill { get; set; }
    }
}
