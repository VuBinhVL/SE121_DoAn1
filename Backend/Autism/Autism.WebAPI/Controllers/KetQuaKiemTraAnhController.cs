using Autism.Common.ConstValue;
using Autism.Common.Helpers;
using Microsoft.AspNetCore.Mvc;
using Python.Runtime;
using System;
using System.IO;

namespace Autism.WebAPI.Controllers
{
    [Route("api")]
    [ApiController]
    public class KetQuaKiemTraAnhController : ControllerBase
    {
        public KetQuaKiemTraAnhController()
        {
           
        }

        [HttpPost("predict-image/{fileName}")]
        public IActionResult PredictImage(string fileName)
        {
            try
            {
                var filePath = Path.Combine(Utils.GetPathUpload(), fileName);

                if (!System.IO.File.Exists(filePath))
                {
                    return NotFound(new { message = "Không tìm thấy file để xử lý." });
                }

                // Đường dẫn đến file predict.py
                // Sử dụng đường dẫn tương đối dựa trên thư mục gốc của dự án
                string scriptPath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "..\\..\\..", "Script", "predict.py");
                if (!System.IO.File.Exists(scriptPath))
                {
                    return NotFound(new { message = "Không tìm thấy file predict.py." });
                }

                // Khởi tạo môi trường Python và thực thi script
                using (Py.GIL())
                {
                    dynamic sys = Py.Import("sys");
                    sys.path.append(Path.GetDirectoryName(scriptPath)); // Thêm thư mục chứa predict.py vào sys.path

                    dynamic predictModule = Py.Import("predict"); // Import module predict
                    dynamic result = predictModule.predict(filePath); // Gọi hàm predict(filePath)

                    return Ok(new { message = "Dự đoán thành công", result = result.ToString() });
                }
            }
            catch (PythonException pyEx)
            {
                return StatusCode(500, new { message = "Lỗi khi xử lý bằng Python", details = pyEx.Message });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "Hệ thống gặp sự cố", details = ex.Message });
            }
        }
    }
}