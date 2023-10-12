namespace LibraryManagement.DTO.User
{
    public class CreateRoleRequest
    {
        public string RoleName { get; set; } = string.Empty;
        public string? Description { get; set; }
    }
}
