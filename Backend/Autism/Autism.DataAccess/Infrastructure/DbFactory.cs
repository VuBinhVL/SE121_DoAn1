using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Autism.DataAccess.Infrastructure
{
    public interface IDbFactory
    {
        AutismContext Init();
    }
    public class DbFactory : IDbFactory
    {
        private readonly DbContextOptions<AutismContext> options;
        private AutismContext? dbContext;

        public DbFactory(DbContextOptions<AutismContext> options)
        {
            this.options = options;
        }

        public AutismContext Init()
        {
            return dbContext ??= new AutismContext(options);
        }
    }
}
