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
    public class RequestConfig : IEntityTypeConfiguration<Request>
    {
        public void Configure(EntityTypeBuilder<Request> builder)
        {
            builder.HasKey(r => new { r.BookId, r.UserId });
            builder.Property(x => x.UserId).IsRequired();
            builder.Property(x => x.BookId).IsRequired();
            builder.Property(x => x.Quantity).HasDefaultValue(1);
            builder.Property(x => x.IsDeleted).HasDefaultValue(false);
            builder.Property(x => x.IsSelected).HasDefaultValue(true);
        }
    }
}
