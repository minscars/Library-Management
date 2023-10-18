using LibraryManagement.DTO.Book;
using LibraryManagement.DTO.Category;
using LibraryManagement.DTO.Contants;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryManagement.Application.Interfaces
{
    public interface ICategoryService
    {
        public Task<ApiResult<List<CategoryDTO>>> GetAllAsync();
        public Task<ApiResult<CategoryDTO>> GetByIdAsync(int id);
        public Task<ApiResult<bool>> CreateAsync(CreateCategoryDTO request);
        public Task<ApiResult<bool>> EditAsync(EditCategoryDTO request);
        public Task<ApiResult<bool>> DeleteAsync(int Id);
    }
}
