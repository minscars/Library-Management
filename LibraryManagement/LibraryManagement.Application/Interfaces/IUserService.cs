using LibraryManagement.Data.Models;
using LibraryManagement.DTO.Contants;
using LibraryManagement.DTO.User;
using Microsoft.AspNetCore.Identity;

namespace LibraryManagement.Application.Interfaces
{
    public interface IUserService
    {
        Task<ApiResult<bool>> RegisterAsync(RegisterRequest request);
        Task<ApiResult<string>> LoginAsync(LoginRequest request);
        Task<ApiResult<User>> GetUserByIdAsync(Guid id);
    }
}
