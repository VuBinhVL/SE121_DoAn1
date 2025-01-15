using Autism.DataAccess.Infrastructure;
using Autism.DataAccess.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Autism.DataAccess.Repositories
{
    public interface INguoiDungRepository : IRepository<NguoiDung>
    {
       

    }
    public class NguoiDungRepository : RepositoryBase<NguoiDung>, INguoiDungRepository
    {
        private readonly AutismContext _context;
        public NguoiDungRepository(IDbFactory dbFactory, AutismContext context) : base(dbFactory)
        {
            _context = context;
        }
       

    }
}
