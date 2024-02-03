using LibraryManagement.DTO.Comment;
using LibraryManagement.DTO.Contants;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryManagement.Application.Interfaces
{
    public interface ICommentService
    {
        public Task<ApiResult<List<GetCommentPostListResponse>>> GetCommentPostListAsync(int postId);
        public Task<ApiResult<bool>> CreateCommentPostAsync(CreateCommentPostReuquest reuquest);
        public Task<ApiResult<bool>> DeleteCommentPostAsync(int commentId);
    }
}
