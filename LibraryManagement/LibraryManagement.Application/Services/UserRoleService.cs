using LibraryManagement.Application.Interfaces;
using LibraryManagement.Data.Models;
using LibraryManagement.DTO.User;
using Microsoft.AspNetCore.Identity;

namespace LibraryManagement.Application.Services
{
    public class UserRoleService : IUserRoleService
    {
        private readonly RoleManager<UserRole> _roleManager;

        public UserRoleService(RoleManager<UserRole> roleManager)
        {
            _roleManager = roleManager;
        }

        public async Task<IdentityResult> CreateRoleAsync(CreateRoleRequest request)
        {
            return await _roleManager.CreateAsync(new UserRole(){ Name = request.RoleName });
        }
    }
}
