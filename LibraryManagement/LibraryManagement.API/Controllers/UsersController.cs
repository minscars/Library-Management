using LibraryManagement.Application.Interfaces;
using LibraryManagement.DTO.Contants;
using LibraryManagement.DTO.User;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace AuthenDemo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUserService _userService;
        public UsersController(IUserService userService)
        {
            _userService = userService;
        }

        private string setImageName(string currentName)
        {
            return String.Format("{0}://{1}{2}/images/Users/{3}", Request.Scheme, Request.Host, Request.PathBase, currentName);
        }

        [HttpPost("Register")]
        [AllowAnonymous]
        public async Task<IActionResult> RegisterAsync(RegisterRequest request)
        {
            var result = await _userService.RegisterAsync(request);
            return Ok(result.Succeeded);
        }

        [HttpPost("Login")]
        [AllowAnonymous]
        public async Task<IActionResult> LoginAsync([FromBody] LoginRequest request)
        {
            var result = await _userService.LoginAsync(request);
            return Ok(result);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetUserById([FromRoute] Guid id)
        {
            var result = await _userService.GetUserByIdAsync(id);
            if (result.StatusCode == 200)
            {
                result.Data.Avatar = setImageName(result.Data.Avatar);
                return Ok(result.Data);
            }
            return BadRequest(result.Message);
        }
    }
}
