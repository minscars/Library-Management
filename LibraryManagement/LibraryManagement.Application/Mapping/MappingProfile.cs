using AutoMapper;
using LibraryManagement.Data.Models;
using LibraryManagement.DTO.Book;
using LibraryManagement.DTO.BorrowBill;
using LibraryManagement.DTO.Category;
using LibraryManagement.DTO.Comment;
using LibraryManagement.DTO.Notification;
using LibraryManagement.DTO.Post;
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
                .ForMember(dto => dto.BookImage, opt => opt.MapFrom(b => b.Book.Image))
                .ForMember(dto => dto.CateName, opt => opt.MapFrom(b => b.Book.Category.Name));

            //BorrowBill Mapping
            CreateMap<BorrowBill, BorrowBillDTO>().ReverseMap();

            //Notification Mapping
            CreateMap<Notification, NotificationDTO>().ReverseMap();

            //Post Mapping
            CreateMap<Post, GetListPost>()
                .ForMember(dto => dto.UserName, opt => opt.MapFrom(u => u.User.Name))
                .ForMember(dto => dto.UserAvatar, opt => opt.MapFrom(u => u.User.Avatar));

            CreateMap<Post, GetPost>()
                .ForMember(dto => dto.UserName, opt => opt.MapFrom(u => u.User.Name))
                .ForMember(dto => dto.UserAvatar, opt => opt.MapFrom(u => u.User.Avatar));


            //Comment Mapping
            CreateMap<Comment, GetCommentPostListResponse>()
                .ForMember(dto => dto.UserName, opt => opt.MapFrom(u => u.User.Name))
                .ForMember(dto => dto.UserAvatar, opt => opt.MapFrom(u => u.User.Avatar));


        }
    }
}
