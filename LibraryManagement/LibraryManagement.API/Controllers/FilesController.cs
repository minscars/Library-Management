using Microsoft.AspNetCore.Mvc;
using LibraryManagement.Application.Interfaces;
using System.Net.Http.Headers;
using Microsoft.AspNetCore.Authorization;

namespace LibraryManagement.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FilesController : ControllerBase
    {
        private readonly IFileSerivce _fileService;
        public FilesController(IFileSerivce fileService)
        {
            _fileService = fileService;
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> UploadImage([FromForm] IFormFile FileUploaded, string folderName)
        {
            var result = await _fileService.UploadFileAsync(FileUploaded, folderName);
            return Ok(result);
        }
    }
}
