using LibraryManagement.DTO.User;
using Microsoft.AspNetCore.Identity;

namespace LibraryManagement.Application.Interfaces
{
    public interface IUserRoleService
    {
        Task<IdentityResult> CreateRoleAsync(CreateRoleRequest request);
    }
}
