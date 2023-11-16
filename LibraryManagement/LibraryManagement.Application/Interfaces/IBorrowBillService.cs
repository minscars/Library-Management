using LibraryManagement.DTO.BorrowBill;
using LibraryManagement.DTO.Contants;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryManagement.Application.Interfaces
{
    public interface IBorrowBillService
    {
        Task<ApiResult<int>> Borrow(Guid IdUser);
        Task<ApiResult<List<BorrowBillDTO>>> GetAllBorrowBillByUserAsync(Guid IdUser);
        Task<ApiResult<BorrowBillDetailDTO>> GetBorrowBillByIdAsync(int Id);
        Task<ApiResult<List<BorrowBillDTO>>> GetAllBorrowBillAsync();
        Task<ApiResult<bool>> UpdateStatusAsync(BorrowBillStatusDTO reuqest);
    }
}
