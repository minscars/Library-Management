using Microsoft.AspNetCore.Mvc;
using LibraryManagement.Application.Interfaces;
using Microsoft.AspNetCore.Authorization;

namespace LibraryManagement.API.Controllers
{        
    [Route("api/[controller]")]
    [ApiController]
    public class BooksController : ControllerBase
    {
        private readonly IBookService _bookService;
        public BooksController(IBookService bookService)
        {
            _bookService = bookService;
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> Get()
        {
            var result = await _bookService.GetAllAsync();
            if (result.StatusCode == 200)
            {
                return Ok(result.Data);
            }
            return BadRequest(result.Message);
        }
    }
}
