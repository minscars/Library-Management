using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryManagement.DTO.Request
{
    public class RequestDTO
    {
        public Guid UserId { get; set; }
        public int BookId { get; set; }
        public string? BookName { get; set; }
        public string? CateName { get; set; }
        public string? BookImage {  get; set; }
        public int Quantity { get; set; }
        public bool IsSelected { get; set; }
        public bool IsDeleted { get; set; }
    }
}
