using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryManagement.Data.Models
{
    public class Comment
    {
        public int Id { get; set; } 
        public int? PostId { get; set; }
        public Guid? UserId { get; set; }
        public string? Content { get; set; }
        public DateTime? CreatedDate { get; set; }
        public int? ReplyCommentId { get; set; }
        public bool? IsDeleted { get; set; }
        public virtual Post Post { get; set; }
        public virtual User User { get; set; }
    }
}
