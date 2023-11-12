namespace LibraryManagement.DTO.Request
{
    public class SaveBookDTO
    {
        public Guid UserId { get; set; }
        public int BookId { get; set; }
        public int Quantity { get; set; }
    }
}
