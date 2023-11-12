using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryManagement.DTO.Request
{
    public class DeleteItemInSaveDTO
    {
        public Guid UserId { get; set; }
        public int BookId { get; set; }
    }
}
