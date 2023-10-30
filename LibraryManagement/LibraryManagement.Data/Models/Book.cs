﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryManagement.Data.Models
{
    public class Book
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public int Quantity_Import {  get; set; } //số sách nhập vào kho
        public int Quantity_Export {  get; set; } //số sách xuất kho
        public int Quantity_On_Hand { get; set; } //số sách tồn kho
        public int Quantity_Borrowed {  get; set; } //số lượt mượn
        public string? Image { get; set; }
        public int CategoryId { get; set; }
        public bool IsDeleted { get; set; }
        public DateTime? CreatedTime { get; set; }
        public DateTime? UpdatedTime { get; set; }
        public virtual List<BorrowBillDetail> BorrowBillDetail { get; set; }
        public virtual Category Category { get; set; }

    }
}
