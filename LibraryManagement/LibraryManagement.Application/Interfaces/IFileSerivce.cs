using Microsoft.AspNetCore.Http;


namespace LibraryManagement.Application.Interfaces
{
    public interface IFileSerivce
    {
        Task<string> UploadFileAsync(IFormFile FileUploaded, string folderName);
        Task RemoveFileAsync(string path);
    }
}
