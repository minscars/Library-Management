using LibraryManagement.Data.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryManagement.Data.Configurations
{
    public class BorrowBillDetailConfig : IEntityTypeConfiguration<BorrowBillDetail>
    {
        public void Configure(EntityTypeBuilder<BorrowBillDetail> builder)
        {
            builder.Property(x => x.BorrowBillId).IsRequired();
            builder.Property(x => x.BookId).IsRequired();
            builder.Property(x => x.Amount).IsRequired().HasDefaultValue(1);
            builder.HasKey(b => new { b.BorrowBillId, b.BookId });
        }
    }
}
