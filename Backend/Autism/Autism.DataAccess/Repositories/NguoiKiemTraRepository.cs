using Autism.DataAccess.Infrastructure;
using Autism.DataAccess.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Autism.DataAccess.Repositories
{
  
    public interface INguoiKiemTraRepository : IRepository<NguoiKiemTra>
    {


    }
    public class NguoiKiemTraRepository : RepositoryBase<NguoiKiemTra>, INguoiKiemTraRepository
    {
        private readonly AutismContext _context;
        public NguoiKiemTraRepository(IDbFactory dbFactory, AutismContext context) : base(dbFactory)
        {
            _context = context;
        }


    }
}
