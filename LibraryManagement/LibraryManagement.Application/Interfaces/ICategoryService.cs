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
    }
}
