using Autism.DataAccess.Infrastructure;
using Autism.DataAccess.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Autism.DataAccess.Repositories
{

    public interface IBaiQuizzRepository : IRepository<BaiQuizz>
    {


    }
    public class BaiQuizzRepository : RepositoryBase<BaiQuizz>, IBaiQuizzRepository
    {
        private readonly AutismContext _context;
        public BaiQuizzRepository(IDbFactory dbFactory, AutismContext context) : base(dbFactory)
        {
            _context = context;
        }


    }
}
