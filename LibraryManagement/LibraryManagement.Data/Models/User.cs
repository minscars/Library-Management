using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryManagement.Data.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }
        public string Avatar { get; set; }
        public string Password { get; set; }
        public List<BorrowBill> BorrowBills { get; set; }
        public DateTime? RegisteredDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
    }
}
