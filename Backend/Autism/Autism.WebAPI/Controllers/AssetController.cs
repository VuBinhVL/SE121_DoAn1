using Autism.Common.ConstValue;
using Autism.Common.DTOs.Response;
using Autism.Common.Helpers;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace Autism.WebAPI.Controllers
{
    [Route("api/asset")]
    [ApiController]
    public class AssetController : ControllerBase
    {
        public AssetController()
        {
            if (!Directory.Exists(Utils.GetPathUpload()))
            {
                Directory.CreateDirectory(Utils.GetPathUpload());
            }
        }


        [HttpPost("upload-image")]
        public async Task<IActionResult> UploadImage([FromForm] IFormFile file)
        {
            try
            {
                if (file == null || file.Length == 0)
                {
                    return BadRequest(new { message = "Bạn chưa chọn file." });
                }

                var fileName = Path.GetRandomFileName() + Path.GetExtension(file.FileName);
                var filePath = Path.Combine(Utils.GetPathUpload(), fileName);

                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await file.CopyToAsync(stream);
                }

                return Ok(new { fileName = fileName });
            }
            catch (Exception e)
            {
                return StatusCode(HttpStatusCode.InternalServerError, HttpStatusCode.HeThongGapSuCo);
            }
        }

        [HttpGet("view-image/{fileName}")]
        public IActionResult ViewImage(string fileName)
        {
            try
            {
                var filePath = Path.Combine(Utils.GetPathUpload(), fileName);

                if (!System.IO.File.Exists(filePath))
                {
                    return NotFound("Không tìm thấy hình ảnh");
                }

                var fileExtension = Path.GetExtension(fileName).ToLower();
                string contentType = fileExtension switch
                {
                    ".jpg" or ".jpeg" => "image/jpeg",
                    ".png" => "image/png",
                    ".gif" => "image/gif",
                    ".bmp" => "image/bmp",
                    _ => "application/octet-stream" // Dùng mặc định nếu không xác định được
                };

                var fileBytes = System.IO.File.ReadAllBytes(filePath);
                return File(fileBytes, contentType);
            }
            catch (Exception e)
            {
                return StatusCode(HttpStatusCode.InternalServerError, HttpStatusCode.HeThongGapSuCo);
            }
        }
        [HttpPost("classify-image")]
        public async Task<IActionResult> ClassifyImage([FromForm] IFormFile file)
        {
            string filePath = null;  // Declare filePath outside the try block
            try
            {
                if (file == null || file.Length == 0)
                {
                    return BadRequest(new { message = "Bạn chưa chọn file." });
                }

                // Lưu ảnh vào thư mục tạm thời
                var fileName = Path.GetRandomFileName() + Path.GetExtension(file.FileName);
                filePath = Path.Combine(Path.GetTempPath(), fileName);  // Assign filePath here

                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await file.CopyToAsync(stream);
                }

                // Gửi ảnh đến API Python
                using (var client = new HttpClient())
                using (var form = new MultipartFormDataContent())
                {
                    using (var fileStream = new FileStream(filePath, FileMode.Open))
                    {
                        form.Add(new StreamContent(fileStream), "file", fileName);

                        var response = await client.PostAsync("http://127.0.0.1:8000/predict/", form);
                        var responseString = await response.Content.ReadAsStringAsync();

                        if (!response.IsSuccessStatusCode)
                        {
                            return StatusCode(500, new { message = "Phân loại thất bại", detail = responseString });
                        }

                        var result = JsonConvert.DeserializeObject<PredictionResult>(responseString);
                        return Ok(new
                        {
                            label = result.label ?? "Không xác định",
                            probabilities = result.probabilities ?? new List<Probability>()
                        });

                    }
                }
            }
            catch (Exception e)
            {
                return StatusCode(500, new { message = "Hệ thống gặp sự cố", detail = e.Message });
            }
            finally
            {
                // Xóa file tạm sau khi xử lý xong
                if (!string.IsNullOrEmpty(filePath) && System.IO.File.Exists(filePath))
                {
                    System.IO.File.Delete(filePath);
                }
            }
        }


    }

}
