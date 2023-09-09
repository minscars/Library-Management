using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryManagement.Application.Interfaces
{
    public interface IFileSerivce
    {
        Task<string> UploadFileAsync(IFormFile FileUploaded, string folderName);
    }
}
