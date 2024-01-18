using LibraryManagement.Application.Interfaces;
using LibraryManagement.Application.Services;
using LibraryManagement.Data.Models;
using LibraryManagement.DTO.Post;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace LibraryManagement.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostsController : ControllerBase
    {
        private readonly IPostService _postService;
        public PostsController(IPostService postService)
        {
            _postService = postService;
        }

        private string setImageName(string currentName)
        {
            return String.Format("{0}://{1}{2}/images/Users/{3}", Request.Scheme, Request.Host, Request.PathBase, currentName);
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> GetAll()
        {
            var result = await _postService.GetAllAsync();
            if (result.StatusCode == 200)
            {
                result.Data.ForEach(p => p.UserAvatar =  setImageName(p.UserAvatar));
                return Ok(result.Data);
            }
            return Ok(result);
        }

        [HttpGet("{userId}")]
        [AllowAnonymous]
        public async Task<IActionResult> GetAllByUserId([FromRoute] Guid userId)
        {
            var result = await _postService.GetByUserIdAsync(userId);
            if (result.StatusCode == 200)
            {
                result.Data.ForEach(p => p.UserAvatar = setImageName(p.UserAvatar));
                return Ok(result.Data);
            }
            return Ok(result);
        }

        [HttpGet("Detail/{postId}")]
        [AllowAnonymous]
        public async Task<IActionResult> GetById([FromRoute] int postId)
        {
            var result = await _postService.GetByIdAsync(postId);
            if (result.StatusCode == 200)
            {
                result.Data.UserAvatar = setImageName(result.Data.UserAvatar);
                return Ok(result.Data);
            }
            return Ok(result);
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> CreateNewPost(CreatePostRequest request)
        {
            var result = await _postService.CreateNewPostAsync(request);
            return Ok(result);
        }

    }
}
