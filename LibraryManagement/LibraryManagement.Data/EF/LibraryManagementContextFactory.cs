using LibraryManagement.Data.EF;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MinsCarsShop.Data.EF
{
    public class LibraryManagementContextFactory : IDesignTimeDbContextFactory<LibraryManagementDbContext>
    {
        public LibraryManagementDbContext CreateDbContext(string[] args)
        {
            IConfigurationRoot configuration = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json")
                .Build();

            var connectionString = configuration.GetConnectionString("Default");

            var optionsBuilder = new DbContextOptionsBuilder<LibraryManagementDbContext>();
            optionsBuilder.UseSqlServer(connectionString);

            return new LibraryManagementDbContext(optionsBuilder.Options);
        }
    }
}
