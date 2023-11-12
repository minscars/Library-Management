using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryManagement.Data.Models
{
    public class Request
    {
        public Guid UserId { get; set; }
        public int BookId { get; set; }
        public int Quantity { get; set; }
        public bool IsSelected { get; set; }
        public bool IsDeleted { get; set; }
        public DateTime CreatedDate { get; set; }
        public User User { get; set; }
        public Book Book { get; set; }
    }
}
