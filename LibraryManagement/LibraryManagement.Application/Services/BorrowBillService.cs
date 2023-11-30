using AutoMapper;
using LibraryManagement.Application.Interfaces;
using LibraryManagement.Data.EF;
using LibraryManagement.Data.Enums;
using LibraryManagement.Data.Models;
using LibraryManagement.DTO.Book;
using LibraryManagement.DTO.BorrowBill;
using LibraryManagement.DTO.Contants;
using LibraryManagement.DTO.Notification;
using LibraryManagement.DTO.Request;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static LibraryManagement.Data.Enums.StatusEnums;

namespace LibraryManagement.Application.Services
{
    public class BorrowBillService : IBorrowBillService
    {
        private readonly LibraryManagementDbContext _context;
        private readonly IMapper _mapper;
        private readonly INotificationService _notificationService;
        public BorrowBillService(LibraryManagementDbContext context, IMapper mapper, INotificationService notificationService)
        {
            _context = context;
            _mapper = mapper;
            _notificationService = notificationService;
        }

        public async Task<ApiResult<int>> Borrow(Guid IdUser)
        {
            var booksInRequest = await _context.Requests
                .Where(r => r.UserId == IdUser && r.IsDeleted == false)
                .ToListAsync();

            if (booksInRequest.Count == 0)
            {
                return new ApiResult<int>(0)
                {
                    Message = "Something went wrong!",
                    StatusCode = 400
                };
            }

            var newBorrowBill = new BorrowBill()
            {
                UserId = IdUser,
                CreateDate = DateTime.Now,
                Status = (int)Status.Pending,
            };
            await _context.AddAsync(newBorrowBill);
            await _context.SaveChangesAsync();

            foreach (var item in booksInRequest)
            {
                var newBorrowBillDetail = new BorrowBillDetail()
                {
                    BorrowBillId = newBorrowBill.Id,
                    BookId = item.BookId,
                    Amount = item.Quantity
                };
                await _context.AddAsync(newBorrowBillDetail);
            }

            var itemInRequest = await _context.Requests
                .Where(r => r.UserId == IdUser && r.IsDeleted == false)
                .ToListAsync();
            foreach (var item in  itemInRequest) 
            {
                item.IsDeleted = true;
            }
            await _context.SaveChangesAsync();

            return new ApiResult<int>(newBorrowBill.Id)
            {
                Message = "Make a borrow bill successfully!",
                StatusCode = 200
            };
        }


        public async Task<ApiResult<List<BorrowBillDTO>>> GetAllBorrowBillByUserAsync(Guid IdUser)
        {
            var checkExit = await _context.BorrowBills
                .Where(b => b.UserId == IdUser && b.IsDeleted==false)
                .Select(b => new BorrowBillDTO()
                {
                    Id = b.Id,
                    UserId = b.UserId,
                    UserName = b.User.Name,
                    CreateDate = b.CreateDate,
                    RejectedDate = b.RejectedDate,
                    ApprovalDate = b.ApprovalDate,
                    BorrowDate = b.BorrowDate,
                    DueDate = b.DueDate,
                    ReceivedDate = b.ReceivedDate,
                    Status = StatusEnums.GetDisplayName((Status)b.Status),
                })
                .ToListAsync();
            if (checkExit == null)
            {
                return new ApiResult<List<BorrowBillDTO>>(null)
                {
                    Message = "Something went wrong!",
                    StatusCode = 400
                };
            }

            return new ApiResult<List<BorrowBillDTO>>(checkExit)
            {
                Message = "",
                StatusCode = 200
            };
        }

        public async Task<ApiResult<BorrowBillDetailDTO>> GetBorrowBillByIdAsync(int Id)
        {
            var listBorrowedBooks = await _context.BorrowBillDetails
                .Include(b => b.Book)
                .Where(b => b.BorrowBillId == Id)
                .Select(b => new BorrowedBookDTO()
                {
                    Name = b.Book.Name,
                    Image = b.Book.Image,
                    Amount = b.Amount
                }).ToListAsync();

            var borrowBill = await _context.BorrowBills
                .Include(b => b.User)
                .Where (b => b.Id == Id && b.IsDeleted==false)
                .Select (b => new BorrowBillDetailDTO()
                {
                    Id = b.Id,
                    UserId = b.UserId,
                    UserName = b.User.Name,
                    UserAvatar  = b.User.Avatar,
                    CreateDate = b.CreateDate,
                    RejectedDate = b.RejectedDate,
                    ApprovalDate = b.ApprovalDate,
                    BorrowDate = b.BorrowDate,
                    DueDate = b.DueDate,
                    BorrowedBooks = listBorrowedBooks,
                    ReceivedDate = b.ReceivedDate,
                    Status = StatusEnums.GetDisplayName((Status)b.Status),
                    Comment = b.Comment,
                }).FirstOrDefaultAsync();

            if (borrowBill == null)
            {
                return new ApiResult<BorrowBillDetailDTO>(null)
                {
                    Message = "Something went wrong!",
                    StatusCode = 400
                };
            }

            return new ApiResult<BorrowBillDetailDTO>(borrowBill)
            {
                Message = "",
                StatusCode = 200
            };
        }

        public async Task<ApiResult<List<BorrowBillDTO>>> GetAllBorrowBillAsync()
        {
            var checkExit = await _context.BorrowBills
                .Include(b => b.User)
                .Where(b => b.IsDeleted == false)
                .Select(b => new BorrowBillDTO()
                {
                    Id = b.Id,
                    UserId = b.UserId,
                    UserName = b.User.Name,
                    Status = StatusEnums.GetDisplayName((Status)b.Status),
                    CreateDate = b.CreateDate,
                    RejectedDate = b.RejectedDate,
                    ReceivedDate= b.ReceivedDate,
                    BorrowDate = b.BorrowDate,
                    DueDate = b.DueDate,
                    ReturnedDate = b.ReturnedDate
                })
                .ToListAsync();
            if (checkExit == null)
            {
                return new ApiResult<List<BorrowBillDTO>>(null)
                {
                    Message = "Something went wrong!",
                    StatusCode = 400
                };
            }

            return new ApiResult<List<BorrowBillDTO>>(checkExit)
            {
                Message = "",
                StatusCode = 200
            };
        }

        public async Task<ApiResult<bool>> UpdateStatusAsync(BorrowBillStatusDTO request)
        {
            var check = await _context.BorrowBills
                .Include(b => b.User)
                .Where(b => b.Id == request.BorrowBillId && b.IsDeleted == false)
                .FirstOrDefaultAsync();


            if (check == null)
            {
                return new ApiResult<bool>(false)
                {
                    Message = "Something went wrong!",
                    StatusCode = 400
                };
            }
            var bookBorrowDetail = await _context.BorrowBillDetails
                .Include(b => b.Book)
                .Where(b => b.BorrowBillId == check.Id)
                .Select(b => new BorrowBillDetail()
                {
                    BorrowBillId = b.BorrowBillId,
                    BookId = b.BookId,
                    Amount = b.Amount,
                }).ToListAsync();

            switch (request.Status)
            {
                case Status.Approve:
                    check.Status = (int)Status.Approve; //approve
                    check.ApprovalDate = DateTime.Now;
                    check.DueDate = DateTime.Now.AddDays(2);
                    check.Comment = request.Comment;
                    
                    var requestAprrove = new CreateNotificationDTO()
                    {
                        IdBill = check.Id,
                        Message = SystemConstant.APPROVE_MESSAGE,
                        IdUser = check.UserId
                    };
                    await _notificationService.AddNewMessageAsync(requestAprrove);
                    break;
                case Status.Borrowing:
                    check.Status = (int)Status.Borrowing; //borrow
                    check.ReceivedDate = DateTime.Now;
                    check.BorrowDate = DateTime.Now;
                    check.DueDate = DateTime.Now.AddDays(14);
                    check.Comment = request.Comment;

                    var requestBorrowing = new CreateNotificationDTO()
                    {
                        IdBill = check.Id,
                        Message = SystemConstant.BORROW_MESSAGE,
                        IdUser = check.UserId
                    };
                    await _notificationService.AddNewMessageAsync(requestBorrowing);
                    foreach (var item in bookBorrowDetail)
                    {
                        var bookindetail = await _context.Books
                            .Where(b => b.Id == item.BookId)
                            .FirstOrDefaultAsync();
                        bookindetail.Quantity_Export = bookindetail.Quantity_Export + item.Amount;
                        bookindetail.Quantity_On_Hand = bookindetail.Quantity_Import - bookindetail.Quantity_Export;
                    }
                    break;
                case Status.Returned:
                    check.Status = (int)Status.Returned; //return
                    check.ReturnedDate = DateTime.Now;
                    check.Comment = request.Comment;

                    var requestReturned = new CreateNotificationDTO()
                    {
                        IdBill = check.Id,
                        Message = SystemConstant.RETURNED_MESSAGE,
                        IdUser = check.UserId
                    };
                    await _notificationService.AddNewMessageAsync(requestReturned);
                    foreach (var item in bookBorrowDetail)
                    {
                        var bookindetail = await _context.Books
                            .Where(b => b.Id == item.BookId)
                            .FirstOrDefaultAsync();
                        bookindetail.Quantity_Borrowed += item.Amount;
                        bookindetail.Quantity_On_Hand += item.Amount;
                    }
                    break;
                case Status.Rejected:
                    check.Status = (int)Status.Rejected;
                    check.RejectedDate = DateTime.Now;
                    check.Comment = request.Comment;

                    var requestRejected = new CreateNotificationDTO()
                    {
                        IdBill = check.Id,
                        Message = SystemConstant.REJECTED_MESSAGE,
                        IdUser = check.UserId
                    };
                    await _notificationService.AddNewMessageAsync(requestRejected);
                    break;
            }

            await _context.SaveChangesAsync();  

            return new ApiResult<bool>(true)
            {
                Message = "",
                StatusCode = 200
            };
        }

        public async Task<ApiResult<List<BorrowBillDTO>>> GetBorrowBillsByStatusAsync(StatusEnums.Status borrowBillStatus)
        {
            var checkExit = await _context.BorrowBills
                .Include(b => b.User)
                .Where(b => b.IsDeleted == false && b.Status == (int) borrowBillStatus)
                .Select(b => new BorrowBillDTO()
                {
                    Id = b.Id,
                    UserId = b.UserId,
                    UserName = b.User.Name,
                    Status = StatusEnums.GetDisplayName((Status)b.Status),
                    CreateDate = b.CreateDate,
                    RejectedDate = b.RejectedDate,
                    ReceivedDate = b.ReceivedDate,
                    BorrowDate = b.BorrowDate,
                    DueDate = b.DueDate,
                    ReturnedDate = b.ReturnedDate
                })
                .ToListAsync();

            if (checkExit == null)
            {
                return new ApiResult<List<BorrowBillDTO>>(null)
                {
                    Message = "Something went wrong!",
                    StatusCode = 400
                };
            }

            return new ApiResult<List<BorrowBillDTO>>(checkExit)
            {
                Message = "",
                StatusCode = 200
            };
        }
    }
}
