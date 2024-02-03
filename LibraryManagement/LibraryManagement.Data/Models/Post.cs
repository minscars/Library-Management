using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryManagement.Data.Models
{
    public class Post
    {
        public int Id { get; set; }
        public Guid? UserId { get; set; }
        public string? Title { get; set; }
        public string? Image { get; set; } = string.Empty;
        public string? Content { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set;}
        public Boolean? IsDeleted { get; set; }
        public int Status { get; set; }
        public virtual User User { get; set; }
        public virtual List<Comment> Comments { get; set; }
    }
}
