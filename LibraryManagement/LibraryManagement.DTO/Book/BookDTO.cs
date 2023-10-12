using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryManagement.DTO.Book
{
    public class BookDTO
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Image { get; set; }
        public bool IsDeleted { get; set; }
        public string? CategoryName { get; set; }
        public int ? CategoryId { get; set; }
    }
}
