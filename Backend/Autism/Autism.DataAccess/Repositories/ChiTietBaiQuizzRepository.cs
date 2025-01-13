using Autism.DataAccess.Infrastructure;
using Autism.DataAccess.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Autism.DataAccess.Repositories
{
   
    public interface IChiTietBaiQuizzRepository : IRepository<ChiTietBaiQuizz>
    {


    }
    public class ChiTietBaiQuizzRepository : RepositoryBase<ChiTietBaiQuizz>, IChiTietBaiQuizzRepository
    {
        private readonly AutismContext _context;
        public ChiTietBaiQuizzRepository(IDbFactory dbFactory, AutismContext context) : base(dbFactory)
        {
            _context = context;
        }


    }
}
