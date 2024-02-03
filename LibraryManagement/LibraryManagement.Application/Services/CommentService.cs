using AutoMapper;

using LibraryManagement.Application.Interfaces;
using LibraryManagement.Data.EF;
using LibraryManagement.Data.Models;
using LibraryManagement.DTO.Comment;
using LibraryManagement.DTO.Contants;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Hosting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryManagement.Application.Services
{
    public class CommentService : ICommentService
    {
        private readonly LibraryManagementDbContext _context;
        private readonly IMapper _mapper;

        public CommentService(LibraryManagementDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        public async Task<ApiResult<List<GetCommentPostListResponse>>> GetCommentPostListAsync(int postId)
        {
            if (postId == null)
            {
                return new ApiResult<List<GetCommentPostListResponse>>(null)
                {
                    Message = "Not found",
                    StatusCode = 404
                };
            }
            var commentList = await _context.Comments
                .Include(c => c.User)
                .Where(c => c.PostId == postId && c.IsDeleted == false)
                .Select(c => new GetCommentPostListResponse()
                {
                    Id = c.Id,
                    PostId = c.PostId,
                    Content = c.Content,
                    UserAvatar = c.User.Avatar,
                    UserName = c.User.Name,
                    CreatedDate = c.CreatedDate

                })
                .ToListAsync();
            
            if(commentList.Count <1)
            {
                return new ApiResult<List<GetCommentPostListResponse>>(null)
                {
                    Message = "Do not have comments yet!",
                    StatusCode = 400
                };
            }

            return new ApiResult<List<GetCommentPostListResponse>>(commentList)
            {
                Message = "",
                StatusCode = 200
            };
        }

        public async Task<ApiResult<bool>> CreateCommentPostAsync(CreateCommentPostReuquest request)
        {
            if (request == null)
            {
                return new ApiResult<bool>(false)
                {
                    Message = "Not found!",
                    StatusCode = 400
                };
            }

            if(request.Id != null)
            {
                var comment = new Comment()
                {
                    PostId = request.PostId,
                    Content = request.Content,
                    UserId = request.UserId,
                    CreatedDate = DateTime.Now
                };
                await _context.Comments.AddAsync(comment);
            }
            else
            {
                var commentReply = new Comment()
                {
                    PostId = request.PostId,
                    Content = request.Content,
                    UserId = request.UserId,
                    CreatedDate = DateTime.Now,
                    ReplyCommentId = request.Id
                    
                };
                await _context.Comments.AddAsync(commentReply);

            }


            await _context.SaveChangesAsync();

            return new ApiResult<bool>(true)
            {
                Message = "You have created comment successfully!",
                StatusCode = 200
            };
        }

        public async Task<ApiResult<bool>> DeleteCommentPostAsync(int commentId)
        {
            var comment = await _context.Comments
                .Where(c => c.Id == commentId)
                .Select(c => _mapper.Map<Comment>(c))
                .FirstOrDefaultAsync();

            if (comment == null)
            {
                return new ApiResult<bool>(false)
                {
                    Message = $"Couldn't find the comment with id: {commentId}",
                    StatusCode = 404
                };
            }

            comment.IsDeleted = true;
            await _context.SaveChangesAsync();

            return new ApiResult<bool>(true)
            {
                Message = $"Delete the comment with Id = {commentId} successfully!",
                StatusCode = 200
            };

        }


    }
}
