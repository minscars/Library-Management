using AutoMapper;
using LibraryManagement.Application.Interfaces;
using LibraryManagement.Data.EF;
using LibraryManagement.DTO.Book;
using LibraryManagement.DTO.Category;
using LibraryManagement.DTO.Contants;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryManagement.Application.Services
{
    public class CategoryService : ICategoryService
    {
        private readonly LibraryManagementDbContext _context;
        private readonly IMapper _mapper;

        public CategoryService(LibraryManagementDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<ApiResult<List<CategoryDTO>>> GetAllAsync()
        {
            var cateList = await _context.Categories
                                .Where(c => c.IsDeleted == false)
                                .Select(c => _mapper.Map<CategoryDTO>(c)).ToListAsync();
            if (cateList.Count < 1)
            {
                return new ApiResult<List<CategoryDTO>>(null)
                {
                    Message = "Something went wrong!",
                    StatusCode = 400
                };
            }
            return new ApiResult<List<CategoryDTO>>(cateList)
            {
                Message = "",
                StatusCode = 200
            };
        }
    }
}
