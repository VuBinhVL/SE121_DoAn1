using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Autism.Common.DTOs.Response.NguoiDung
{
    public class Response_Login
    {
        public int HttpStatusCode { get; set; }
        public string? Message { get; set; }
        public string? Token { get; set; }
    }
}
