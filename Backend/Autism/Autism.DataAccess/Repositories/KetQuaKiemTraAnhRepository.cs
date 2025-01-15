using Autism.DataAccess.Infrastructure;
using Autism.DataAccess.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Autism.DataAccess.Repositories
{
  
    public interface IKetQuaKiemTraAnhRepository : IRepository<KetQuaKiemTraAnh>
    {


    }
    public class KetQuaKiemTraAnhRepository : RepositoryBase<KetQuaKiemTraAnh>, IKetQuaKiemTraAnhRepository
    {
        private readonly AutismContext _context;
        public KetQuaKiemTraAnhRepository(IDbFactory dbFactory, AutismContext context) : base(dbFactory)
        {
            _context = context;
        }


    }
}
