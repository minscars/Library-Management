using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryManagement.DTO.File
{
    public class UploadFileDTO
    {
        public IFormFile File { set; get; }
    }
}
