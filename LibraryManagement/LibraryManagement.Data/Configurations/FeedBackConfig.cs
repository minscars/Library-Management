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
    public class FeedBackConfig : IEntityTypeConfiguration<FeedBack>
    {
        public void Configure(EntityTypeBuilder<FeedBack> builder)
        {
            builder.Property(x => x.Id).IsRequired();
            builder.Property(x => x.Content).IsRequired();
            builder.Property(x => x.Rate).HasDefaultValue(0);
            builder.Property(x => x.CreatedDate).HasDefaultValue(DateTime.Now);
            builder.Property(x => x.IsDeleted).HasDefaultValue(false);
        }
    }
}
