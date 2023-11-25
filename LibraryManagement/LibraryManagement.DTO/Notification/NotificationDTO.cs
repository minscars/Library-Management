using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryManagement.DTO.Notification
{
    public class NotificationDTO
    {
        public int Id { get; set; }
        public int BillId { get; set; }
        public string Status { get; set; }
        public Guid UserId { get; set; }    
        public string Message { get; set; }
        public DateTime CreateDate { get; set; }
        public bool IsViewed { get; set; }
    }
}
