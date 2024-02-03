using AutoMapper;
using LibraryManagement.Application.Interfaces;
using LibraryManagement.Data.EF;
using LibraryManagement.Data.Enums;
using LibraryManagement.Data.Models;
using LibraryManagement.DTO.Book;
using LibraryManagement.DTO.BorrowBill;
using LibraryManagement.DTO.Contants;
using LibraryManagement.DTO.Post;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Sockets;
using System.Text;
using System.Threading.Tasks;
using static LibraryManagement.Data.Enums.StatusPostEnums;

namespace LibraryManagement.Application.Services
{
    public class PostService : IPostService
    {
        private readonly LibraryManagementDbContext _context;
        private readonly IMapper _mapper;
        private readonly IFileSerivce _fileServivce;
        private readonly IWebHostEnvironment _webHostEnvironment;
        public PostService(LibraryManagementDbContext context, IMapper mapper, IFileSerivce fileSerivce, IWebHostEnvironment webHostEnvironment)
        {
            _context = context;
            _mapper = mapper;
            _webHostEnvironment = webHostEnvironment;
            _fileServivce = fileSerivce;
        }

        public async Task<ApiResult<List<GetListPost>>> GetAllAsync()
        {
            var postList = await _context.Posts
                .Include(p => p.User)
                .Where(p => p.IsDeleted == false)
                .OrderByDescending(p => p.CreatedDate)
                .Select(p => new GetListPost()
                {
                    Id = p.Id,
                    UserId = p.User.Id,
                    UserAvatar = p.User.Avatar,
                    UserName = p.User.Name,
                    Title = p.Title,
                    Image = p.Image,
                    Content = p.Content,
                    Status = StatusPostEnums.GetDisplayName((StatusPost)p.Status),
                    CreatedDate = p.CreatedDate,
                    IsDeleted = p.IsDeleted,
                    UpdatedDate = p.UpdatedDate,
                }).ToListAsync();
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
            var imageName = await _fileServivce.UploadFileAsync(request.Image, SystemConstant.IMG_POSTS_FOLDER);
            var post = new Post()
            {
                UserId = request.UserId,
                Content = request.Content,
                Title = request.Title,
                CreatedDate = DateTime.Now,
                Image = imageName,
            };

            await _context.Posts.AddAsync(post);
            await _context.SaveChangesAsync();

            return new ApiResult<bool>(true)
            {
                Message = "Create post successfully!",
                StatusCode = 200
            };
        }

        public async Task<ApiResult<List<GetListPost>>> GetPostByStatusAsync(StatusPostEnums.StatusPost postStatus)
        {
            var checkExit = await _context.Posts
                .Include(p => p.User)
                .Where(p => p.IsDeleted == false && p.Status == (int)postStatus)
                .OrderByDescending(p => p.CreatedDate)
                .Select(p => new GetListPost()
                {
                    Id = p.Id,
                    UserId = p.User.Id,
                    UserAvatar = p.User.Avatar,
                    UserName = p.User.Name,
                    Title = p.Title,
                    Image = p.Image,
                    Content = p.Content,
                    Status = StatusPostEnums.GetDisplayName((StatusPost)p.Status),
                    CreatedDate = p.CreatedDate,
                    IsDeleted = p.IsDeleted,
                    UpdatedDate = p.UpdatedDate,
                }).ToListAsync();

            if (checkExit == null)
            {
                return new ApiResult<List<GetListPost>>(null)
                {
                    Message = "Something went wrong!",
                    StatusCode = 404
                };
            }

            return new ApiResult<List<GetListPost>>(checkExit)
            {
                Message = "",
                StatusCode = 200
            };
        }

    }
}
