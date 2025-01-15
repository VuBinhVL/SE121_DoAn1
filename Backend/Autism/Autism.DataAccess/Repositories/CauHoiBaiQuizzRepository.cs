using Autism.DataAccess.Infrastructure;
using Autism.DataAccess.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Autism.DataAccess.Repositories
{
    
    public interface ICauHoiBaiQuizzRepository : IRepository<CauHoiBaiQuizz>
    {


    }
    public class CauHoiBaiQuizzRepository : RepositoryBase<CauHoiBaiQuizz>, ICauHoiBaiQuizzRepository
    {
        private readonly AutismContext _context;
        public CauHoiBaiQuizzRepository(IDbFactory dbFactory, AutismContext context) : base(dbFactory)
        {
            _context = context;
        }
        public async Task<IEnumerable<CauHoiBaiQuizz>> GetAllAsync()
        {
            return await _context.CauHoiBaiQuizzs
                .Include(cq => cq.ChiTietDapAnQuizzs)
                    .ThenInclude(ct => ct.DapAnBaiQuizz)
                .ToListAsync();
        }


    }
}
