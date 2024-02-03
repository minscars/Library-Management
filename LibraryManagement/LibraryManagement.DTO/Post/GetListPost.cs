using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryManagement.DTO.Post
{
    public class GetListPost
    {
        public int Id { get; set; }
        public Guid? UserId { get; set; }
        public string? UserName { get; set; }
        public string? UserAvatar {  get; set; }
        public string? Title { get; set; }
        public string? Image { get; set; }
        public string? Content { get; set; }
        public string? Status { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public Boolean? IsDeleted { get; set; }
    }
}
