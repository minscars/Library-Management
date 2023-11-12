using Microsoft.AspNetCore.Identity;

namespace LibraryManagement.Data.Models
{
    public class User : IdentityUser<Guid>
    {
        public string Name { get; set; }
        public string Avatar {  get; set; }
        //public string Password { get; set; }
    }
}
