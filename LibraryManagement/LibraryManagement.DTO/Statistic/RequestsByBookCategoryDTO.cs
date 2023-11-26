namespace LibraryManagement.DTO.Statistic
{
    public class RequestsByBookCategoryDTO
    {
        public string? CategoryName { get; set; }
        public int SumOfRequests { get; set; }
    }
}
