using System.ComponentModel.DataAnnotations;

namespace LibraryManagement.DTO.User
{
    public class RegisterRequest
    {

        [Required]
        [DataType(DataType.Text)]
        [Display(Name = "Tên")]
        public string Name { get; set; } = null!;

        [Required]
        [EmailAddress]
        [Display(Name = "Địa chỉ Email")]
        public string Email { get; set; } = null!;

        [Required]
        [StringLength(100, ErrorMessage = "{0} dài từ {2} đến {1} ký tự.", MinimumLength = 3)]
        [DataType(DataType.Password)]
        [Display(Name = "Mật khẩu")]
        public string Password { get; set; } = null!;

        [DataType(DataType.Password)]
        [Display(Name = "Nhập lại mật khẩu")]
        [Compare("Password", ErrorMessage = "Mật khẩu không giống nhau")]
        public string ConfirmPassword { get; set; } = null!;

        [Required]
        [DataType(DataType.PhoneNumber)]
        [StringLength(10, ErrorMessage = "Số điện thoại có 10 số.")]
        public string? PhoneNumber { get; set; }
    }
}
