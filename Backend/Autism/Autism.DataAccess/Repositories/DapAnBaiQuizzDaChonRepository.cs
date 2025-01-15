using Autism.DataAccess.Infrastructure;
using Autism.DataAccess.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Autism.DataAccess.Repositories
{ 

    public interface IDapAnBaiQuizzDaChonRepository : IRepository<DapAnBaiQuizzDaChon>
    {


    }
    public class DapAnBaiQuizzDaChonRepository : RepositoryBase<DapAnBaiQuizzDaChon>, IDapAnBaiQuizzDaChonRepository
    {
        private readonly AutismContext _context;
        public DapAnBaiQuizzDaChonRepository(IDbFactory dbFactory, AutismContext context) : base(dbFactory)
        {
            _context = context;
        }


    }
}
