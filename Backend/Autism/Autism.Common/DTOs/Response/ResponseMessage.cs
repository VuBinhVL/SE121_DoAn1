using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Autism.Common.DTOs.Response
{
    public class ResponseMessage
    {
        public ResponseMessage() { }
        public ResponseMessage(int httpStatusCode, string msg)
        {
            this.HttpStatusCode = httpStatusCode;
            this.Message = msg;
        }
        public int HttpStatusCode { get; set; }
        public string? Message { get; set; }
    }
}
