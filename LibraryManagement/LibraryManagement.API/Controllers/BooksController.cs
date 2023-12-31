﻿using Microsoft.AspNetCore.Mvc;
using LibraryManagement.Application.Interfaces;
using Microsoft.AspNetCore.Authorization;
using LibraryManagement.DTO.Book;

namespace LibraryManagement.API.Controllers
{        
    [Route("api/[controller]")]
    [ApiController]
    public class BooksController : ControllerBase
    {
        private readonly IBookService _bookService;
        public BooksController(IBookService bookService)
        {
            _bookService = bookService;
        }
        private string setImageName(string currentName)
        {
            return String.Format("{0}://{1}{2}/images/Books/{3}", Request.Scheme, Request.Host, Request.PathBase, currentName);
        }


        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> GetAll()
        {
            var result = await _bookService.GetAllAsync();
            if (result.StatusCode == 200)
            {
                result.Data.ForEach(s => s.Image = setImageName(s.Image));
                return Ok(result.Data);
            }
            return BadRequest(result.Message);
        }

        [HttpGet("{Id}")]
        [AllowAnonymous]
        public async Task<IActionResult> GetById([FromRoute] int Id)
        {
            var result = await _bookService.GetByIdAsync(Id);
            if (result.StatusCode == 200)
            {
                result.Data.Image = setImageName(result.Data.Image);
                return Ok(result.Data);
            }
            return BadRequest(result.Message);
        }

        [HttpGet("Category/{categoryId}")]
        [AllowAnonymous]
        public async Task<IActionResult> GetByCategoryId(int categoryId)
        {
            var result = await _bookService.GetByCategoryIdAsync(categoryId);
            if (result.StatusCode == 200)
            {
                result.Data.ForEach(s => s.Image = setImageName(s.Image));
                return Ok(result.Data);
            }
            return BadRequest(result.Message);
        }

        [HttpPost()]
        [AllowAnonymous]
        public async Task<IActionResult> Create([FromForm] CreateBookDTO request)
        {
            var result = await _bookService.CreateAsync(request);
            if (result.StatusCode == 400)
            {
                return BadRequest(result.Message);
            }
            return Ok(result.Message);
        }

        [HttpPut()]
        [AllowAnonymous]
        public async Task<IActionResult> Edit([FromForm] EditBookDTO request)
        {
            var result = await _bookService.EditAsync(request);
            if (result.StatusCode == 400)
            {
                return BadRequest(result.Message);
            }
            return Ok(result); 
        }

        [HttpDelete("{Id}")]
        [AllowAnonymous]
        public async Task<IActionResult> Delete([FromRoute] int Id)
        {
            var result = await _bookService.DeleteAsync(Id);
            if (result.StatusCode == 400)
            {
                return BadRequest(result.Message);
            }
            return Ok(result);
        }

        [HttpGet("Search/{Key}")]
        [AllowAnonymous]
        public async Task<IActionResult> FindByKey([FromRoute] string Key)
        {
            var result = await _bookService.FindByKeyAsync(Key);
            if (result.StatusCode == 200)
            {
                result.Data.ForEach(s => s.Image = setImageName(s.Image));
                return Ok(result.Data);
            }
            return BadRequest(result.Message);
        }

        [HttpGet("TopFive")]
        [AllowAnonymous]
        public async Task<IActionResult> TopFiveBook()
        {
            var result = await _bookService.GetTopFiveAsync();
            if (result.StatusCode == 200)
            {
                result.Data.ForEach(s => s.Image = setImageName(s.Image));
                return Ok(result.Data);
            }
            return BadRequest(result.Message);
        }

        [HttpGet("NewBooks")]
        [AllowAnonymous]
        public async Task<IActionResult> NewBook()
        {
            var result = await _bookService.GetNewAsync();
            if (result.StatusCode == 200)
            {
                result.Data.ForEach(s => s.Image = setImageName(s.Image));
                return Ok(result.Data);
            }
            return BadRequest(result.Message);
        }
    }
}
