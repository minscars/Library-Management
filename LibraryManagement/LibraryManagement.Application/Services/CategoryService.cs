using AutoMapper;
using LibraryManagement.Application.Interfaces;
using LibraryManagement.Data.EF;
using LibraryManagement.Data.Models;
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

        public async Task<ApiResult<CategoryDTO>> GetByIdAsync(int id)
        {
            var cate = await _context.Categories
                .Where(b => b.IsDeleted == false && b.Id == id)
                .Select(b => _mapper.Map<CategoryDTO>(b)).FirstOrDefaultAsync();
            if (cate == null)
            {
                return new ApiResult<CategoryDTO>(null)
                {
                    Message = $"Couldn't find the room with id: {id}",
                    StatusCode = 400
                };
            }
            return new ApiResult<CategoryDTO>(_mapper.Map<CategoryDTO>(cate))
            {
                Message = "",
                StatusCode = 200
            };
        }

        public async Task<ApiResult<bool>> CreateAsync(CreateCategoryDTO request)
        {
            if (request == null)
            {
                return new ApiResult<bool>(false)
                {
                    Message = "Something went wrong!",
                    StatusCode = 400
                };
            }

            var category = new Category()
            {
                Name = request.Name,
                CreatedDate = DateTime.Now
            };
            await _context.Categories.AddAsync(category);
            await _context.SaveChangesAsync();

            return new ApiResult<bool>(true)
            {
                Message = "Create new category successfully!",
                StatusCode = 200
            };

        }

        public async Task<ApiResult<bool>> EditAsync(EditCategoryDTO request)
        {
            if (request == null)
            {
                return new ApiResult<bool>(false)
                {
                    Message = "Something went wrong!",
                    StatusCode = 400
                };
            }

            var category = await _context.Categories.Where(b => b.IsDeleted == false && b.Id == request.Id).FirstOrDefaultAsync();
            if (category == null)
            {
                return new ApiResult<bool>(false)
                {
                    Message = $"Couldn't find the category with id: {request.Id}",
                    StatusCode = 404
                };
            }
            category.Name = request.Name;
            category.UpdatedDate = DateTime.Now;
            await _context.SaveChangesAsync();
            return new ApiResult<bool>(true)
            {
                Message = "Edit category successfully!",
                StatusCode = 200
            };

        }

        public async Task<ApiResult<bool>> DeleteAsync(int Id)
        {
            var cate = await _context.Categories.Where(b => b.IsDeleted == false && b.Id == Id).FirstOrDefaultAsync();
            if (cate == null)
            {
                return new ApiResult<bool>(false)
                {
                    Message = $"Couldn't find the category with id: {Id}",
                    StatusCode = 404
                };
            }
            cate.IsDeleted = true;
            await _context.SaveChangesAsync();
            return new ApiResult<bool>(true)
            {
                Message = $"Delete the category with Id = {Id} successfully!",
                StatusCode = 200
            };
        }
    }
}
