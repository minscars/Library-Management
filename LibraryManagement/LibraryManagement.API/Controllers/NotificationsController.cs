using LibraryManagement.Application.Interfaces;
using LibraryManagement.Application.Services;
using LibraryManagement.DTO.BorrowBill;
using LibraryManagement.DTO.Notification;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace LibraryManagement.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NotificationsController : ControllerBase
    {
        private INotificationService _notificationService;
        public NotificationsController(INotificationService notificationService)
        {
            _notificationService = notificationService;
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> AddNotificationAsync(CreateNotificationDTO request)
        {
            var result = await _notificationService.AddNewMessageAsync(request);
            return Ok(result);  
        }

        [HttpGet("{IdUser}")]
        [AllowAnonymous]
        public async Task<IActionResult> GetAllNotificationAsync([FromRoute] Guid IdUser)
        {
            var result = await _notificationService.GetAllNotificaionByUserIdAsync(IdUser);
            return Ok(result.Data);
        }

        [HttpPut("Status/{id}")]
        [AllowAnonymous]
        public async Task<IActionResult> UpdateStatusNotificationAsync([FromRoute] int id)
        {
            var result = await _notificationService.UpdateStatusNotificationAsync(id);
            return Ok(result);
        }
    }
}
