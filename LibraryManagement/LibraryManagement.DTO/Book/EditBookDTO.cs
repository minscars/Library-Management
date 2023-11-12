using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryManagement.DTO.Book
{
    public class EditBookDTO
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public string Desctription { get; set; }
        public IFormFile? Image { get; set; }
        public int CategoryId { get; set; }
    }
}
