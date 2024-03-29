﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace LibraryManagement.Data.Enums
{
    public class StatusPostEnums
    {
        public enum StatusPost : int
        {
            [Display(Name = "Pending")]
            Pending = 1,
            [Display(Name = "Approve")]
            Approve = 2,
            [Display(Name = "Posted")]
            Borrowing = 3,
            [Display(Name = "Cancel")]
            Cancel = 4,
        }
        public static string GetDisplayName(Enum enumValue)
        {
            string displayName;
            displayName = enumValue.GetType()
                .GetMember(enumValue.ToString())
                .FirstOrDefault()
                .GetCustomAttribute<DisplayAttribute>()?
                .GetName();
            if (String.IsNullOrEmpty(displayName))
            {
                displayName = enumValue.ToString();
            }
            return displayName;
        }
    }
}
