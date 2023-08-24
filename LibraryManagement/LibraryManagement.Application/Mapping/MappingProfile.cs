﻿using AutoMapper;
using LibraryManagement.Data.Models;
using LibraryManagement.DTO.Book;
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
            CreateMap<Book, BookDTO>().ReverseMap();
        }
    }
}
