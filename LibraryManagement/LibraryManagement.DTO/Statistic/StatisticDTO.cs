namespace LibraryManagement.DTO.Statistic
{
    public class StatisticDTO
    {
        public int SumOfBooks { get; set; }
        public int SumOfReaders { get; set; }
        public int SumOfCompleteRequests { get; set; }
        public List<RequestsByBookCategoryDTO>? SumOfRequestByBookCategory { get; set; }
        public List<RequestsByMonthDTO>? SumOfRequestByMonth { get; set; }
        public List<BooksRateByCategoryDTO>? BooksRateByCategory { get; set; }
    }
}
