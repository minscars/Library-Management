using LibraryManagement.DTO.Book;
using LibraryManagement.DTO.Contants;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryManagement.Application.Interfaces
{
    public interface IBookService
    {
        public Task<ApiResult<List<BookDTO>>> GetAllAsync ();
        public Task<ApiResult<BookDTO>> GetByIdAsync (int id);
        public Task<ApiResult<List<BookDTO>>> GetByCategoryIdAsync(int categoryId);
        public Task<ApiResult<bool>> CreateAsync(CreateBookDTO request);
        public Task<ApiResult<bool>> EditAsync(EditBookDTO request);
        public Task<ApiResult<bool>> DeleteAsync(int Id);
        public Task<ApiResult<List<BookDTO>>> FindByKeyAsync(string key);
        public Task<ApiResult<List<BookDTO>>> GetTopFiveAsync();
        public Task<ApiResult<List<BookDTO>>> GetNewAsync();
    }
}
