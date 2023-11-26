using LibraryManagement.Application.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace LibraryManagement.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StatisticsController : ControllerBase
    {
        private IStatisticService _statisticService;
        public StatisticsController(IStatisticService statisticService)
        {
            _statisticService = statisticService;
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> GetStatisticInfoAsync()
        {
            var result = await _statisticService.GetStatisticInfoAsync();
            return Ok(result.Data);
        }
    }
}
