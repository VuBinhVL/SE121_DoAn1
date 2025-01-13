using Autism.DataAccess.Infrastructure;
using Autism.DataAccess.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Autism.DataAccess.Repositories
{

    public interface IDapAnBaiQuizzRepository : IRepository<DapAnBaiQuizz>
    {
        Task<bool> GetDungSaiAsync(int dapAnBaiQuizzId);

    }
    public class DapAnBaiQuizzRepository : RepositoryBase<DapAnBaiQuizz>, IDapAnBaiQuizzRepository
    {
        private readonly AutismContext _context;
        public DapAnBaiQuizzRepository(IDbFactory dbFactory, AutismContext context) : base(dbFactory)
        {
            _context = context;
        }
        public async Task<bool> GetDungSaiAsync(int dapAnBaiQuizzId)
        {
            var dapAn = await _context.DapAnBaiQuizzs.FindAsync(dapAnBaiQuizzId);
            return dapAn?.DungSai ?? false;
        }


    }
}
