using AutoMapper;
using LibraryManagement.Data.Models;
using LibraryManagement.DTO.Book;
using LibraryManagement.DTO.Category;
using LibraryManagement.DTO.Request;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryManagement.Application.Mapping
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            // Book Mapping
            CreateMap<Book, BookDTO>()  
                .ForMember(dto => dto.CategoryName, opt => opt.MapFrom(b => b.Category.Name));
            CreateMap<CreateBookDTO, Book>();

            //Category Mapping
            CreateMap<Category, CategoryDTO>().ReverseMap();

            //Request Mapping
            CreateMap<Request, RequestDTO>()
                .ForMember(dto => dto.BookName, opt => opt.MapFrom(b => b.Book.Name))
                .ForMember(dto => dto.BookImage, opt => opt.MapFrom(b => b.Book.Image));
        }
    }
}
