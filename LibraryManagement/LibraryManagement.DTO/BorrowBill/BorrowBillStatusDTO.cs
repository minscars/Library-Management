using LibraryManagement.Data.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryManagement.DTO.BorrowBill
{
    public class BorrowBillStatusDTO
    {
        public int BorrowBillId { get; set; }
        public StatusEnums.Status Status { get; set; }
        public string? Comment { get; set; }
    }
}
