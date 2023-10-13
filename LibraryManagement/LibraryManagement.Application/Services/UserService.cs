﻿using LibraryManagement.Application.Interfaces;
using LibraryManagement.Data.Models;
using LibraryManagement.DTO.Contants;
using LibraryManagement.DTO.User;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace LibraryManagement.Application.Services
{
    public class UserService : IUserService
    {
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;
        private readonly IConfiguration _configuration;
        public UserService(
            UserManager<User> userManager,
            SignInManager<User> signInManager,
            IConfiguration configuration
        )
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _configuration = configuration;
        }

        public async Task<IdentityResult> RegisterAsync(RegisterRequest request)
        {
            //Check request
            //.....

            //Create new user
            var user = new User {UserName = request.Email, Email = request.Email };
            var addUserResult = await _userManager.CreateAsync(user, request.Password);

            //Add role for new user
            await _userManager.AddToRoleAsync(user, "User");

            //Add claims for new user
            await _userManager.AddClaimAsync(user, new Claim("id", user.Id.ToString()));
            await _userManager.AddClaimAsync(user, new Claim("email", user.Email));
            await _userManager.AddClaimAsync(user, new Claim("roles", string.Join(",", await _userManager.GetRolesAsync(user))));
            await _userManager.AddClaimAsync(user, new Claim(ClaimTypes.NameIdentifier, user.UserName));
            await _userManager.AddClaimAsync(user, new Claim(ClaimTypes.Email, user.Email));
            await _userManager.AddClaimAsync(user, new Claim(ClaimTypes.Role, string.Join(",", await _userManager.GetRolesAsync(user))));
            return addUserResult;
        }

        public async Task<ApiResult<string>> LoginAsync(LoginRequest request)
        {
            var user = await _userManager.FindByNameAsync(request.UserName);
            if (user == null)
            {
                return new ApiResult<string>(null)
                {
                    Message = "Username is not exist.",
                    StatusCode = 400
                };
            }

            var isPasswordMatched = await _userManager.CheckPasswordAsync(user, request.Password);
            if (!isPasswordMatched)
            {
                 return new ApiResult<string>(null)
                {
                    Message = "Password is incorrect.",
                    StatusCode = 400
                };
            }

            var claims = await _userManager.GetClaimsAsync(user);
            return new ApiResult<string>(CreateToken(claims))
            {
                Message = "Login successfully.",
                StatusCode = 200
            }; 
        }                               

        private string CreateToken(IEnumerable<Claim> claims)
        {
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Tokens:Key"]));
            var cred = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);
            var token = new JwtSecurityToken(
                                   claims: claims,
                                   expires: DateTime.UtcNow.AddDays(1),
                                   signingCredentials: cred
            );
            var jwt = new JwtSecurityTokenHandler().WriteToken(token);
            return jwt;
        }
    }
}
