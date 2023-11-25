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
        public string? Comment { get; set; }
        public DateTime? CreateDate { get; set; }
        public DateTime? RejectedDate { get; set; }
        public DateTime? ApprovalDate { get; set; }
        public DateTime? BorrowDate { get; set; }
        public DateTime? ReceivedDate { get; set; }
        public DateTime? DueDate { get; set; }
        public DateTime? ReturnedDate { get; set; }
        public User User { get; set; }
        public int Status { get; set; }
        public bool IsDeleted { get; set; }
        public virtual List<BorrowBillDetail> BorrowBillDetail { get; set; }
        public virtual List<Notification> Notifications { get; set; }   
    }
}
