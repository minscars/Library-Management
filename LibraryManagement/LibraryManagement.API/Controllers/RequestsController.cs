using LibraryManagement.Application.Interfaces;
using LibraryManagement.Application.Services;
using Microsoft.AspNetCore.Mvc;

namespace LibraryManagement.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RequestsController : ControllerBase
    {
        private readonly IRequestService _requestService;
        public RequestsController(IRequestService requestService)
        {
            _requestService = requestService;
        }

        private string setImageName(string currentName)
        {
            return String.Format("{0}://{1}{2}/images/Books/{3}", Request.Scheme, Request.Host, Request.PathBase, currentName);
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var result = await _requestService.GetAllAsync();
            if (result.StatusCode == 200)
            {
                result.Data.ForEach(s => s.BookImage = setImageName(s.BookImage));
                return Ok(result.Data);
            }
            return BadRequest(result.Message);
        }
    }
}
