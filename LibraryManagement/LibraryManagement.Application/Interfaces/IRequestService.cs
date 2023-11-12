using LibraryManagement.DTO.Contants;
using LibraryManagement.DTO.Request;

namespace LibraryManagement.Application.Interfaces
{
    public interface IRequestService
    {
        public Task<ApiResult<List<RequestDTO>>> GetAllSavedBookByUserAsync(Guid userId);
        public Task<ApiResult<bool>> AddToRequestAsync(SaveBookDTO requestDTO);
        public Task<ApiResult<bool>> UpdateQuantityAsync(SaveBookDTO requestDTO);
        public Task<ApiResult<bool>> DeleteItemInSaveAsync(DeleteItemInSaveDTO request);
    }
}
