using AutoMapper;
using LibraryManagement.Application.Interfaces;
using LibraryManagement.Data.EF;
using LibraryManagement.Data.Models;
using LibraryManagement.DTO.Book;
using LibraryManagement.DTO.Contants;
using LibraryManagement.DTO.Post;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Sockets;
using System.Text;
using System.Threading.Tasks;

namespace LibraryManagement.Application.Services
{
    public class PostService : IPostService
    {
        private readonly LibraryManagementDbContext _context;
        private readonly IMapper _mapper;
        public PostService(LibraryManagementDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<ApiResult<List<GetListPost>>> GetAllAsync()
        {
            var postList = await _context.Posts
                .Include(p => p.User)
                .Where(p => p.IsDeleted == false)
                .OrderByDescending(p => p.CreatedDate)
                .Select(p => _mapper.Map<GetListPost>(p)).ToListAsync();
            if (postList.Count < 1)
            {
                return new ApiResult<List<GetListPost>>(null)
                {
                    Message = "Something went wrong!",
                    StatusCode = 400
                };
            }
            return new ApiResult<List<GetListPost>>(postList)
            {
                Message = "",
                StatusCode = 200
            };
        }

        public async Task<ApiResult<List<GetListPost>>> GetByUserIdAsync(Guid idUser)
        {
            var postList = await _context.Posts
                .Include(p => p.User)
                .Where(p => p.UserId==idUser && p.IsDeleted == false)
                .OrderByDescending(p => p.CreatedDate)
                .Select(p => _mapper.Map<GetListPost>(p)).ToListAsync();
            if (postList.Count < 1)
            {
                return new ApiResult<List<GetListPost>>(null)
                {
                    Message = "Something went wrong!",
                    StatusCode = 400
                };
            }
            return new ApiResult<List<GetListPost>>(postList)
            {
                Message = "",
                StatusCode = 200
            };
        }

        public async Task<ApiResult<GetPost>> GetByIdAsync(int id)
        {
            if (id==null)
            {
                return new ApiResult<GetPost>(null)
                {
                    Message = "Something went wrong!",
                    StatusCode = 400
                };
            }

            var post = await _context.Posts
            .Include(p => p.User)
            .Where(p => p.Id == id && p.IsDeleted == false)
            .OrderByDescending(p => p.CreatedDate)
            .Select(p => _mapper.Map<GetPost>(p)).FirstOrDefaultAsync();

            return new ApiResult<GetPost>(post)
            {
                Message = "",
                StatusCode = 200
            };
        }

        public async Task<ApiResult<bool>> CreateNewPostAsync(CreatePostRequest request)
        {
            if (request == null)
            {
                return new ApiResult<bool>(false)
                {
                    Message = "Something went wrong!",
                    StatusCode = 400
                };
            }

            var post = new Post()
            {
                UserId = request.UserId,
                Content = request.Content,
                Title = request.Title,
                CreatedDate = DateTime.Now,
            };

            await _context.Posts.AddAsync(post);
            await _context.SaveChangesAsync();

            return new ApiResult<bool>(true)
            {
                Message = "Create post successfully!",
                StatusCode = 200
            };
        }
    }
}
