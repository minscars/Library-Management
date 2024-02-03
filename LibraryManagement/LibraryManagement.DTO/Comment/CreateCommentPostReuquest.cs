using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryManagement.DTO.Comment
{
    public class CreateCommentPostReuquest
    {
        public int? Id { get; set; } 
        public int? PostId { get; set; }
        public Guid? UserId { get; set; }
        public string? Content { get; set; }
        public DateTime? CreatedDate { get; set; }
        public int? ReplyCommentId { get; set; }
        public bool? IsDeleted { get; set; }
    }
}
