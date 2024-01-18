using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryManagement.Data.Models
{
    public class FeedBack
    {
        public int Id { get; set; }
        public Guid? UserId { get; set; }
        public int? BookId { get; set; }
        public string? Content { get; set; }
        public int? Rate { get; set; }
        public Boolean? IsDeleted { get; set; }
        public DateTime? CreatedDate { get; set; }
        public virtual Book Book { get; set; }
        public virtual User User { get; set; }
    }
}
