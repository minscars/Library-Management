using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryManagement.DTO.Book
{
    public class CreateBookDTO
    {
        public string? Name { get; set; }
        public string Description { get; set; }
        public IFormFile? Image {  get; set; }
        public int CategoryId { get; set; }
        public int Quantity_Import { get; set; }
    }
}
