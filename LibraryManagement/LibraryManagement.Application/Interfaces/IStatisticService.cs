using LibraryManagement.DTO.Contants;
using LibraryManagement.DTO.Statistic;

namespace LibraryManagement.Application.Interfaces
{
    public interface IStatisticService
    {
        Task<ApiResult<StatisticDTO>> GetStatisticInfoAsync();
    }
}
