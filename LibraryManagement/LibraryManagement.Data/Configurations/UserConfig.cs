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
    public class UserConfig : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.Property(x => x.Id).IsRequired();
            builder.Property(x => x.Name).IsRequired().HasMaxLength(30);
            builder.Property(x => x.Phone).IsRequired().HasMaxLength(10);
            builder.Property(x => x.Email).IsRequired();
            builder.Property(x => x.Address).IsRequired();
            builder.Property(x => x.Avatar).HasDefaultValue("default.png");
            builder.Property(x => x.Password).IsRequired();
            builder.Property(x => x.RegisteredDate).HasDefaultValue(DateTime.Now);
            builder.Property(x => x.UpdatedDate).HasDefaultValue(DateTime.Now);
        }
    }
}
