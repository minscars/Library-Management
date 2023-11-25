using LibraryManagement.DTO.Contants;
using LibraryManagement.DTO.Notification;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryManagement.Application.Interfaces
{
    public interface INotificationService
    {
        Task<ApiResult<int>> AddNewMessageAsync(CreateNotificationDTO request);
        Task<ApiResult<List<NotificationDTO>>> GetAllNotificaionByUserIdAsync(Guid UserId);
        Task<ApiResult<bool>> UpdateStatusNotificationAsync(int Id);
        
    }
}
