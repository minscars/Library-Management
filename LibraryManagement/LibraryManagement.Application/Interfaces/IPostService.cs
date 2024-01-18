using LibraryManagement.DTO.Book;
using LibraryManagement.DTO.Contants;
using LibraryManagement.DTO.Post;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryManagement.Application.Interfaces
{
    public interface IPostService
    {
        public Task<ApiResult<List<GetListPost>>> GetAllAsync();
        public Task<ApiResult<List<GetListPost>>> GetByUserIdAsync(Guid idUser);
        public Task<ApiResult<GetPost>> GetByIdAsync(int id);
        public Task<ApiResult<bool>> CreateNewPostAsync(CreatePostRequest request);
    }
}
