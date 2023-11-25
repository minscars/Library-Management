using AutoMapper;
using LibraryManagement.Application.Interfaces;
using LibraryManagement.Data.EF;
using LibraryManagement.Data.Enums;
using LibraryManagement.Data.Models;
using LibraryManagement.DTO.Book;
using LibraryManagement.DTO.Contants;
using LibraryManagement.DTO.Notification;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static LibraryManagement.Data.Enums.StatusEnums;

namespace LibraryManagement.Application.Services
{
    public class NotificationService : INotificationService
    {
        private readonly LibraryManagementDbContext _context;
        private readonly IMapper _mapper;

        public NotificationService(LibraryManagementDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<ApiResult<int>> AddNewMessageAsync(CreateNotificationDTO request)
        {
            if (request == null)
            {
                return new ApiResult<int>(0)
                {
                    Message = "Something went wrong!",
                    StatusCode = 400
                };
            }

            var newNotification = new Notification()
            {
                BorrowBillId = request.IdBill,
                UserId = request.IdUser,
                Message = request.Message,
                CreateDate = DateTime.Now,
                
            };
            await _context.AddAsync(newNotification);
            await _context.SaveChangesAsync();

            return new ApiResult<int>(newNotification.Id)
            {
                Message = "Make a borrow bill successfully!",
                StatusCode = 200
            };
        }

        public async Task<ApiResult<List<NotificationDTO>>> GetAllNotificaionByUserIdAsync(Guid UserId)
        {
            var notifiList = await _context.Notifications
                .Include(n => n.BorrowBill)
                .Where(n => n.UserId == UserId && n.IsViewed == false)
                .Select(n => new NotificationDTO()
                {
                    Id = n.Id,
                    BillId = n.BorrowBill.Id,
                    Message = n.Message,
                    CreateDate = n.CreateDate,
                    IsViewed = n.IsViewed,
                    Status = StatusEnums.GetDisplayName((Status)n.BorrowBill.Status)
                })
                .ToListAsync();
            if (notifiList.Count < 1)
            {
                return new ApiResult<List<NotificationDTO>>(null)
                {
                    Message = "Something went wrong!",
                    StatusCode = 400
                };
            }

            return new ApiResult<List<NotificationDTO>>(notifiList)
            {
                Message = "",
                StatusCode = 200
            };
        }

        public async Task<ApiResult<bool>> UpdateStatusNotificationAsync(int Id)
        {
            var checkExit = await _context.Notifications
                .Where(n => n.Id == Id)
                .FirstOrDefaultAsync();

            if (checkExit == null)
            {
                return new ApiResult<bool>(false)
                {
                    Message = "Something went wrong!",
                    StatusCode = 400
                };
            }

            checkExit.IsViewed = true;
            await _context.SaveChangesAsync();

            return new ApiResult<bool>(true)
            {
                Message = "",
                StatusCode = 200
            };
        }
    }
}
