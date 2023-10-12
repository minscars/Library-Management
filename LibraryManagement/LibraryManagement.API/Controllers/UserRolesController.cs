using LibraryManagement.Application.Interfaces;
using LibraryManagement.DTO.User;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace AuthenDemo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserRolesController : ControllerBase
    {
        private readonly IUserRoleService _userRoleService;
        public UserRolesController(IUserRoleService userRoleService)
        {
            _userRoleService = userRoleService;
        }

        [HttpPost("Create")]
        [AllowAnonymous]
        public async Task<IActionResult> CreateRoleAsync(CreateRoleRequest request)
        {
            var result = await _userRoleService.CreateRoleAsync(request);
            return Ok(result.Succeeded);
        }
    }
}
