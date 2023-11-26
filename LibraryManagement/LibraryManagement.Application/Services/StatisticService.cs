using DotLiquid.Tags;
using LibraryManagement.Application.Interfaces;
using LibraryManagement.Data.EF;
using LibraryManagement.DTO.Contants;
using LibraryManagement.DTO.Statistic;
using Microsoft.EntityFrameworkCore;
using static LibraryManagement.Data.Enums.StatusEnums;

namespace LibraryManagement.Application.Services
{
    public class StatisticService : IStatisticService
    {
        private readonly LibraryManagementDbContext _context;
        public StatisticService(LibraryManagementDbContext context) 
        { 
            _context = context;
        }
        public async Task<ApiResult<StatisticDTO>> GetStatisticInfoAsync()
        {
            var usersCount = await _context.Users.CountAsync();
            var booksCount = await _context.Books.CountAsync(b => b.IsDeleted != true);
            var requestsCount = await _context.BorrowBills.CountAsync(r => r.IsDeleted != true && r.Status == (int) Status.Returned);

            //Requests by book category
            var requestsByBookCategory = new List<RequestsByBookCategoryDTO>();

            var categoryList = await _context.Categories.ToListAsync();

            foreach (var category in categoryList)
            {
                var bookListByCategory = await _context.Books.Where(b => b.IsDeleted != true && b.CategoryId == category.Id).ToListAsync();
                requestsByBookCategory.Add(new RequestsByBookCategoryDTO()
                {
                    CategoryName = category.Name,
                    SumOfRequests = bookListByCategory.Sum(list => list.Quantity_Borrowed),
                });
            }

            //Requests by month
            var currentDate = DateTime.Now;
            var lastSixMonthFromCurrentDate = currentDate.AddMonths(-5);
            var firstDateOfLastSixMonth = new DateTime(lastSixMonthFromCurrentDate.Year, lastSixMonthFromCurrentDate.Month, 1);

            var requests = await _context.BorrowBills.Where(b => b.CreateDate >= firstDateOfLastSixMonth &&
                                                                    b.CreateDate <= currentDate && b.Status == (int) Status.Returned)
                                                    .ToListAsync();
            var groupRequests = from r in requests
                                group r by r.CreateDate?.Month into groupResult
                                orderby groupResult.Key
                                select groupResult;

            var requestsWithinSixMonths = new List<RequestsByMonthDTO>();
            foreach (var r in groupRequests)
            {
                var statistic = new RequestsByMonthDTO();
                statistic.Month = r.Key;
                statistic.SumOfRequests = r.Count();
                requestsWithinSixMonths.Add(statistic);
            }

            var lastRequestsWithinSixMonthsList = new List<RequestsByMonthDTO>();
            for (var i = firstDateOfLastSixMonth.Month; i <= currentDate.Month; i++)
            {
                var isExist = false;
                foreach (var s in requestsWithinSixMonths)
                {
                    if (s.Month == i)
                    {
                        isExist = true; 
                        break;
                    }
                }
                if (!isExist)
                {
                    var statistic = new RequestsByMonthDTO();
                    statistic.Month = i;
                    statistic.SumOfRequests = 0;
                    lastRequestsWithinSixMonthsList.Add(statistic);
                }
            }

            lastRequestsWithinSixMonthsList.AddRange(requestsWithinSixMonths);

            //Books rate by category
            var bookRateByCategoryList = new List<BooksRateByCategoryDTO>();
            foreach(var c in categoryList)
            {
                var bookCount = await _context.Books.Where(b => b.IsDeleted != true && b.CategoryId == c.Id).CountAsync();
                bookRateByCategoryList.Add(new BooksRateByCategoryDTO()
                {
                    CategoryName = c.Name!,
                    SumOfBooks = bookCount
                });
            }

            var result = new StatisticDTO
            {
                SumOfReaders = usersCount,
                SumOfBooks = booksCount,
                SumOfCompleteRequests = requestsCount,
                SumOfRequestByBookCategory = requestsByBookCategory,
                SumOfRequestByMonth = lastRequestsWithinSixMonthsList,
                BooksRateByCategory = bookRateByCategoryList,
            };

            return new ApiResult<StatisticDTO>(result)
            {
                Message = "",
                StatusCode = 200
            };
        }
    }
}
