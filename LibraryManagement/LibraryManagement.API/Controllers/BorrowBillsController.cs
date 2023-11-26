using LibraryManagement.Application.Interfaces;
using LibraryManagement.Data.Enums;
using LibraryManagement.DTO.BorrowBill;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace LibraryManagement.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BorrowBillsController : ControllerBase
    {
        private readonly IBorrowBillService _borrowBillService;
        public BorrowBillsController(IBorrowBillService borrowBillService)
        {
            _borrowBillService = borrowBillService;
        }
        private string setImageName(string currentName)
        {
            return String.Format("{0}://{1}{2}/images/Books/{3}", Request.Scheme, Request.Host, Request.PathBase, currentName);
        }

        private string setImageUser(string currentName)
        {
            return String.Format("{0}://{1}{2}/images/Users/{3}", Request.Scheme, Request.Host, Request.PathBase, currentName);
        }

        [HttpPost("Borrow")]
        [AllowAnonymous]
        public async Task<IActionResult> Borrow([FromBody] Guid IdUser)
        {
            var result = await _borrowBillService.Borrow(IdUser);
            return Ok(result);

        }

        [HttpGet("ByUser/{IdUser}")]
        [AllowAnonymous]
        public async Task<IActionResult> GetAllAsync([FromRoute] Guid IdUser)
        {
            var result = await _borrowBillService.GetAllBorrowBillByUserAsync(IdUser);
            return Ok(result.Data);
        }

        [HttpGet("BorrowBillDetail/{IdBorrow}")]
        [AllowAnonymous]
        public async Task<IActionResult> GetBorrowBillByIdAsync([FromRoute] int IdBorrow)
        {
            var result = await _borrowBillService.GetBorrowBillByIdAsync(IdBorrow);
            result.Data.BorrowedBooks.ForEach(s => s.Image = setImageName(s.Image));
            result.Data.UserAvatar = setImageUser(result.Data.UserAvatar);
            return Ok(result.Data);
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> GetAllBorrowBillAsync()
        {
            var result = await _borrowBillService.GetAllBorrowBillAsync();
            return Ok(result.Data);
        }

        [HttpPut("Status")]
        [AllowAnonymous]
        public async Task<IActionResult> UpdateStatusAsync([FromBody] BorrowBillStatusDTO request)
        {
            var result = await _borrowBillService.UpdateStatusAsync(request);
            return Ok(result);
        }

        [HttpGet("Status/{borrowBillStatus}")]
        [AllowAnonymous]
        public async Task<IActionResult> GetBorrowBillsByStatusAsync([FromRoute] StatusEnums.Status borrowBillStatus)
        {
            var result = await _borrowBillService.GetBorrowBillsByStatusAsync(borrowBillStatus);
            return Ok(result.Data);
        }
    }
}
