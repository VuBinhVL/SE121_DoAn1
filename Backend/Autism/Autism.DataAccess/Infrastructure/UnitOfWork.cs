using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Autism.DataAccess.Infrastructure
{
    public interface IUnitOfWork
    {
        Task CommitAsync();
    }
    public class UnitOfWork : IUnitOfWork
    {
        private readonly IDbFactory dbFactory;
        private AutismContext? dbContext;

        public UnitOfWork(IDbFactory dbFactory)
        {
            this.dbFactory = dbFactory;
        }
        public AutismContext DbContext => dbContext ?? (dbContext = dbFactory.Init());

        public async Task CommitAsync()
        {
            await DbContext.SaveChangesAsync();
        }

    }
}
