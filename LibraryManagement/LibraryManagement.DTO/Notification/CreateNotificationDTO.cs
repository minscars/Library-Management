using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryManagement.DTO.Notification
{
    public class CreateNotificationDTO
    {
        public int IdBill {  get; set; }
        public string Message { get; set; }
        public Guid IdUser { get; set; }
    }
}
