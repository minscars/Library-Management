using AutoMapper;
using LibraryManagement.Application.Interfaces;
using LibraryManagement.Data.EF;
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

        public async Task<ApiResult<List<RequestDTO>>> GetAllAsync()
        {
            var requestList = await _context.Requests
                .Include(x => x.Book)
                .Where(r => r.IsDeleted == false)
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
    }
}
