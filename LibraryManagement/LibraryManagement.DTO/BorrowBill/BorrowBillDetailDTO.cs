using LibraryManagement.Data.Models;
using LibraryManagement.DTO.Book;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryManagement.DTO.BorrowBill
{
    public class BorrowBillDetailDTO
    {
        public int Id { get; set; }
        public Guid UserId { get; set; }
        public string? UserName { get; set; }
        public string? UserAvatar { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public DateTime? CreateDate { get; set; }
        public DateTime? RejectedDate { get; set; }
        public DateTime? ApprovalDate { get; set; }
        public DateTime? BorrowDate { get; set; }
        public DateTime? ReceivedDate { get; set; }
        public DateTime? DueDate { get; set; }
        public DateTime? ReturnedDate { get; set; }
        public List<BorrowedBookDTO> BorrowedBooks { get; set; }
        public string Status { get; set; }
        public bool IsDeleted { get; set; }
        public string? Comment { get; set; }
    }
}
