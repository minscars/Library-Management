using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryManagement.Data.Enums
{
    public enum StatusEnums : int
    {
        [Description("This request is pending approve")]
        Pending = 1,
        [Description("This request is approved")]
        Approve = 2,
        [Description("This request is borrowing")]
        Borrowing = 3,
        [Description("This request is returned")]
        Returned = 4,
    }
}
