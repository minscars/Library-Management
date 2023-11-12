using AutoMapper;
using LibraryManagement.Application.Interfaces;
using LibraryManagement.Data.EF;
using LibraryManagement.Data.Models;
using LibraryManagement.DTO.Book;
using LibraryManagement.DTO.Contants;
using LibraryManagement.DTO.Request;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryManagement.Application.Services
{
    public class RequestService : IRequestService
    {
        private readonly LibraryManagementDbContext _context;
        private readonly IMapper _mapper;
        
        public RequestService(LibraryManagementDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<ApiResult<List<RequestDTO>>> GetAllSavedBookByUserAsync(Guid userId)
        {
            var requestList = await _context.Requests
                .Include(x => x.Book)
                .Include(c => c.Book.Category)
                .Where(r => r.UserId == userId && r.IsDeleted == false)
                .Select(r => _mapper.Map<RequestDTO>(r)).ToListAsync();

            if (requestList.Count < 1)
            {
                return new ApiResult<List<RequestDTO>>(null)
                {
                    Message = "Something went wrong!",
                    StatusCode = 400
                };
            }
            return new ApiResult<List<RequestDTO>>(requestList)
            {
                Message = "",
                StatusCode = 200
            };
        }

        public async Task<ApiResult<bool>> UpdateQuantityAsync(SaveBookDTO request)
        {
            if (request == null)
            {
                return new ApiResult<bool>(false)
                {
                    Message = "Something went wrong!",
                    StatusCode = 400
                };
            }
            var ticket = await _context.Requests
                .Where(r => r.UserId == request.UserId && r.BookId == request.BookId && r.IsDeleted != true)
                .FirstOrDefaultAsync();

            ticket!.Quantity = request.Quantity;
            await _context.SaveChangesAsync();
            return new ApiResult<bool>(true)
            {
                Message = "Update amount successfully!",
                StatusCode = 200
            };
        }

        public async Task<ApiResult<bool>> AddToRequestAsync(SaveBookDTO request)
        {
            if (request == null)
            {
                return new ApiResult<bool>(false)
                {
                    Message = "Something went wrong!",
                    StatusCode = 400
                };
            }

            var existingBook = await _context.Requests
                .Where(r => r.UserId == request.UserId && r.BookId == request.BookId && r.IsDeleted != true)
                .FirstOrDefaultAsync();

            if(existingBook == null)
            {
                var ticket = new Request()
                {
                    UserId = request.UserId,
                    BookId = request.BookId,
                    Quantity = request.Quantity,
                    CreatedDate = DateTime.Now,
                };
                await _context.Requests.AddAsync(ticket);
                await _context.SaveChangesAsync();
            }
            else
            {
                var ticket = new SaveBookDTO()
                {
                    UserId = request.UserId,
                    BookId = request.BookId,
                    Quantity = existingBook.Quantity + 1,
                    
                };
                await UpdateQuantityAsync(ticket);
            }

            return new ApiResult<bool>(true)
            {
                Message = "Add to request successfully!",
                StatusCode = 200
            };
        }

        public async Task<ApiResult<bool>> DeleteItemInSaveAsync(DeleteItemInSaveDTO request)
        {
            if (request == null)
            {
                return new ApiResult<bool>(false)
                {
                    Message = "Something went wrong!",
                    StatusCode = 400
                };
            }
            var existingBook = await _context.Requests
            .Where(r => r.UserId == request.UserId && r.BookId == request.BookId && r.IsDeleted != true)
            .FirstOrDefaultAsync();

            if (existingBook == null)
            {
                return new ApiResult<bool>(false)
                {
                    Message = "Something went wrong!",
                    StatusCode = 400
                };
            }
            else
            {
                existingBook.IsDeleted = true;
            }
            await _context.SaveChangesAsync();
 
            return new ApiResult<bool>(true)
            {
                Message = "Delete successfully!",
                StatusCode = 200
            };
        }
    }
}
