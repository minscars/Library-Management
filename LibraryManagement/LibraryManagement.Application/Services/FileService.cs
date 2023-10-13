using LibraryManagement.Application.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using System.Net.Http.Headers;
using Microsoft.AspNetCore.Hosting;

namespace LibraryManagement.Application.Services
{
    public class FileService : IFileSerivce
    {
        private readonly IWebHostEnvironment _webHostEnvironment;
        public FileService(IWebHostEnvironment webHostEnvironment)
        {
            _webHostEnvironment = webHostEnvironment;
        }

        public async Task<string> UploadFileAsync(IFormFile FileUploaded, string folderName)
        {
            try
            {
                if (FileUploaded.Length > 0)
                {
                    string path = Path.Combine(_webHostEnvironment.WebRootPath, folderName);
                    if (!Directory.Exists(path))
                    {
                        Directory.CreateDirectory(path);
                    }
                    var originalFileName = ContentDispositionHeaderValue.Parse(FileUploaded.ContentDisposition).FileName?.Trim('"');
                    var fileName = $"{Guid.NewGuid()}{Path.GetExtension(originalFileName)}";

                    using (FileStream fileStrem = File.Create(path + fileName))
                    {
                        await FileUploaded.CopyToAsync(fileStrem);
                        await fileStrem.FlushAsync();
                        return fileName;
                    }
                }
                else
                {
                    return string.Empty;
                }
            }

            catch (Exception e)
            {
                return e.Message;
            }
        }

        public async Task RemoveFileAsync(string path)
        {
            if (File.Exists(path))
            {
                await Task.Run(() =>
                {
                    File.Delete(path);
                });
            }
        }
    }
}
