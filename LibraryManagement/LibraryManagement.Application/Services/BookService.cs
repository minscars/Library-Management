using AutoMapper;
using LibraryManagement.Application.Interfaces;
using LibraryManagement.Data.EF;
using LibraryManagement.Data.Models;
using LibraryManagement.DTO.Book;
using LibraryManagement.DTO.Contants;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace LibraryManagement.Application.Services
{
    public class BookService :IBookService
    {
        private readonly LibraryManagementDbContext _context;
        private readonly IFileSerivce _fileSerivce;
        private readonly IMapper _mapper;
        public BookService(LibraryManagementDbContext context, IMapper mapper, IFileSerivce fileSerivce)
        {
            _context = context;
            _mapper = mapper;
            _fileSerivce = fileSerivce;
        }

        public async Task<ApiResult<List<BookDTO>>> GetAllAsync()
        {
            var bookList = await _context.Books
                .Include(b =>b.Category)
                .Where(b =>b.IsDeleted==false)
                .Select(b => _mapper.Map<BookDTO>(b)).ToListAsync();
            if (bookList.Count < 1)
            {
                return new ApiResult<List<BookDTO>>(null)
                {
                    Message = "Something went wrong!",
                    StatusCode = 400
                };
            }
            return new ApiResult<List<BookDTO>>(bookList)
            {
                Message = "",
                StatusCode = 200
            };
        }

        public async Task<ApiResult<BookDTO>> GetByIdAsync(int id)
        {
            var book = await _context.Books
                .Include(b => b.Category)
                .Where(b => b.IsDeleted == false && b.Id == id)
                .Select(b => _mapper.Map<BookDTO>(b)).FirstOrDefaultAsync();
            if (book==null)
            {
                return new ApiResult<BookDTO>(null)
                {
                    Message = $"Couldn't find the room with id: {id}",
                    StatusCode = 400
                };
            }
            return new ApiResult<BookDTO>(_mapper.Map<BookDTO>(book))
            {
                Message = "",
                StatusCode = 200
            };
        }

        public async Task<ApiResult<List<BookDTO>>> GetByCategoryIdAsync(int categoryId)
        {
            var bookList = await _context.Books
                .Include(b => b.Category)
                .Where(b => b.IsDeleted == false && b.CategoryId==categoryId)
                .Select(b => _mapper.Map<BookDTO>(b)).ToListAsync();
            if (bookList.Count < 1)
            {
                return new ApiResult<List<BookDTO>>(null)
                {
                    Message = "Something went wrong!",
                    StatusCode = 400
                };
            }
            return new ApiResult<List<BookDTO>>(bookList)
            {
                Message = "",
                StatusCode = 200
            };
        }

        public async Task<ApiResult<bool>> CreateAsync(CreateBookDTO request)
        {
            if (request == null)
            {
                return new ApiResult<bool>(false)
                {
                    Message = "Something went wrong!",
                    StatusCode = 400
                };
            }

            var imageName = await _fileSerivce.UploadFileAsync(request.Image, SystemConstant.IMG_BOOKS_FOLDER);

            var book = new Book()
            {
                Name = request.Name,
                Image = imageName,
                CategoryId = request.CategoryId,
                CreatedTime = DateTime.Now
            };
            await _context.Books.AddAsync(book);
            await _context.SaveChangesAsync();

            return new ApiResult<bool>(true)
            {
                Message = "Create new book successfully!",
                StatusCode = 200
            };
        }

        public async Task<ApiResult<bool>> DeleteAsync(int Id)
        {
            var book = await _context.Books.Where(b => b.IsDeleted == false && b.Id == Id).FirstOrDefaultAsync();
            if (book == null)
            {
                return new ApiResult<bool>(false)
                {
                    Message = $"Couldn't find the book with id: {Id}",
                    StatusCode = 404
                };
            }
            book.IsDeleted = true;
            await _context.SaveChangesAsync();
            return new ApiResult<bool>(true)
            {
                Message = $"Delete the book with Id = {Id} successfully!",
                StatusCode = 200
            };
        }

        public async Task<ApiResult<bool>> EditAsync(EditBookDTO request)
        {
            if (request == null)
            {
                return new ApiResult<bool>(false)
                {
                    Message = "Something went wrong!",
                    StatusCode = 400
                };
            }

            var book = await _context.Books.Where(b => b.IsDeleted == false && b.Id == request.Id).FirstOrDefaultAsync();
            if(request.Image == "") 
            {

            }
            if (book == null)
            {
                return new ApiResult<bool>(false)
                {
                    Message = $"Couldn't find the book with id: {request.Id}",
                    StatusCode = 404
                };
            }
            book.Name = request.Name;
            book.CategoryId = request.CategoryId;
            if (request.Image != "")
            {
                book.Image = request.Image;
            }

            book.UpdatedTime = DateTime.Now;
            await _context.SaveChangesAsync();
            return new ApiResult<bool>(true)
            {
                Message = "Edit book successfully!",
                StatusCode = 200
            };
        }
    }
}
