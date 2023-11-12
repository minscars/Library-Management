using LibraryManagement.Application.Interfaces;
using LibraryManagement.Application.Services;
using LibraryManagement.DTO.Request;
using Microsoft.AspNetCore.Authorization;
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

        [HttpGet("{userId}")]
        public async Task<IActionResult> GetAllSavedBookByUserAsync([FromRoute] Guid userId)
        {
            var result = await _requestService.GetAllSavedBookByUserAsync(userId);
            if (result.StatusCode == 200)
            {
                result?.Data?.ForEach(s => s.BookImage = setImageName(s.BookImage));
                return Ok(result?.Data);
            }
            return BadRequest(result.Message);
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> SaveBookAsync(SaveBookDTO request)
        {
            var result = await _requestService.AddToRequestAsync(request);
            return Ok(result);
        }

        [HttpPut]
        public async Task<IActionResult> UpdateAmount(SaveBookDTO request)
        {
            var result = await _requestService.UpdateQuantityAsync(request);
            if (result.StatusCode == 200)
            {
                return Ok(result.Data);
            }
            return BadRequest(result.Message);
        }

        [HttpPut("delete")]
        [AllowAnonymous]
        public async Task<IActionResult> DeleteItemInSaveAsync(DeleteItemInSaveDTO request)
        {
            var result = await _requestService.DeleteItemInSaveAsync(request);
            return Ok(result);
        }
    }
}
