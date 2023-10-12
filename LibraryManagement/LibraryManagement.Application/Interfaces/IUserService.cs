using LibraryManagement.DTO.Contants;
using LibraryManagement.DTO.User;
using Microsoft.AspNetCore.Identity;

namespace LibraryManagement.Application.Interfaces
{
    public interface IUserService
    {
        Task<IdentityResult> RegisterAsync(RegisterRequest request);
        Task<ApiResult<string>> LoginAsync(LoginRequest request);
    }
}
