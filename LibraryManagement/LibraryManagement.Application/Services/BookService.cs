using AutoMapper;
using LibraryManagement.Application.Interfaces;
using LibraryManagement.Data.EF;
using LibraryManagement.DTO.Book;
using LibraryManagement.DTO.Contants;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryManagement.Application.Services
{
    public class BookService :IBookService
    {
        private readonly LibraryManagementDbContext _context;
        private readonly IMapper _mapper;
        public BookService(LibraryManagementDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<ApiResult<List<BookDTO>>> GetAllAsync()
        {
            var bookList = await _context.Books
                .Include(b =>b.Category)
                .Where(b =>b.IsDeleted==false)
                .Select(b => _mapper.Map<BookDTO>(b)).ToListAsync();
            if (bookList.Count < 1)
            {
                return new ApiResult<List<BookDTO>>(null)
                {
                    Message = "Something went wrong!",
                    StatusCode = 400
                };
            }
            return new ApiResult<List<BookDTO>>(bookList)
            {
                Message = "",
                StatusCode = 200
            };
        }
    }
}
