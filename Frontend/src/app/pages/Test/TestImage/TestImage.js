import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { fetchUploadFormData, fetchPost2, fetchPost, fetchGet } from "../../../lib/httpHandler";
import './TestImage.css';

const AutismClassifier = () => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState(""); 
  const [result, setResult] = useState({
    label: "",
    probabilities: []
  });
  const [userId, setUserId] = useState("");
  const [nguoiDungId, setnguoiDungId] = useState("");
  const [ketqua, setKetqua] = useState(""); // Thêm trạng thái mới cho kết quả
    // Truyền thông tin qua
    const location = useLocation();
    const { id } = location.state || {}; // Lấy ID người kiểm tra từ state

  useEffect(() => {
    // Fetch user ID if needed, similar to the Quizz component
    const uri2 = "/api/info";
    fetchGet(
      uri2,
      (res) => {
        console.log(res);
        setnguoiDungId(res.nguoiDungId);
      },
      (fail) => console.log(fail.message),
      () => console.log("Mất kết nối")
    );
  }, [id]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Vui lòng chọn một file ảnh!");
      return;
    }
  
    try {
      const formData = new FormData();
      formData.append("file", file);
  
      await fetchUploadFormData("/api/asset/upload-image", formData, 
        (data) => {
          const fileName = file.name; // Tên file tải lên
          const filePath = `/images/${fileName}`; // Đường dẫn lưu file trên server
          
          // Gửi yêu cầu để lưu file lên server
          fetchPost2("/api/asset/save-image", formData, 
            (saveData) => {
              setFileName(filePath); // Lưu đường dẫn thay vì chỉ tên file
              alert("Upload thành công!");
            },
            (error) => {
              console.error("Lỗi upload:", error);
              alert("Đã xảy ra lỗi trong quá trình upload!");
            },
            () => alert("Có lỗi xảy ra với server khi upload!")
          );
        },
        (error) => {
          console.error("Lỗi upload:", error);
          alert("Đã xảy ra lỗi trong quá trình upload!");
        },
        () => alert("Có lỗi xảy ra với server khi upload!")
      );
    } catch (error) {
      console.error("Lỗi không xác định trong upload:", error);
      alert("Đã xảy ra lỗi không xác định trong upload!");
    }
  };

  const handlePredict = async () => {
    if (!file) { 
      alert("Vui lòng upload ảnh trước khi dự đoán!");
      return;
    }
  
    try {
      const formData = new FormData();
      formData.append("file", file);
      
      fetchPost2("/api/asset/classify-image", formData, 
        (predictData) => {
          setResult({
            label: predictData.label || "Không xác định",
            probabilities: predictData.probabilities || []
          });
          setKetqua(predictData.label || "Không xác định"); // Cập nhật ketqua
        },
        (error) => {
          console.error("Lỗi dự đoán:", error);
          alert("Đã xảy ra lỗi trong quá trình dự đoán!");
        },
        () => alert("Có lỗi xảy ra với server khi dự đoán!")
      );
    } catch (error) {
      console.error("Lỗi không xác định trong dự đoán:", error);
      alert("Đã xảy ra lỗi không xác định trong dự đoán!");
    }
  };

  const handleSave = async () => {
    if (!nguoiDungId) {
      alert("Không thể lưu kết quả vì không có ID người dùng!");
      return;
    }

    // Kiểm tra nếu result và probabilities có dữ liệu trước khi truy cập
    const autismProb = (result.probabilities && result.probabilities[0] && result.probabilities[0].probability) || 0;
    const nonAutismProb = (result.probabilities && result.probabilities[1] && result.probabilities[1].probability) || 0;

    const data = {
      NguoiDungId: nguoiDungId,
      NgayKiemTra: new Date(),
      nguoiKiemTraId: id || 0,
      KetQua: ketqua, // Sử dụng trạng thái ketqua
      AutismProb: autismProb,
      Non_AutismProb: nonAutismProb,
      Image: fileName
    };

    fetchPost(
      "/api/kiem-tra-anh/save", 
      data,
      (res) => {
        alert("Kết quả đã được lưu thành công!");
      },
      (fail) => {
        console.error("Lỗi khi lưu kết quả:", fail);
        alert("Đã xảy ra lỗi khi lưu kết quả!");
      },
      () => alert("Có lỗi xảy ra với server khi lưu kết quả!")
    );
  };

  return (
    <div className="container">
      <h1>Autism Classifier</h1>
      <input type="file" onChange={handleFileChange} />
      <button className="upload" onClick={handleUpload}>Upload</button>
      <button className="predict" onClick={handlePredict} disabled={!file}>Dự đoán</button>
      {ketqua && <button className="save" onClick={handleSave}>Lưu</button>}
      {file && (
        <div className="image-preview">
          <img src={URL.createObjectURL(file)} alt="Uploaded Image" />
          <p>Ảnh đã tải lên</p>
        </div>
      )}
      {ketqua && ( // Hiển thị kết quả khi ketqua có giá trị
        <div className="result">
          <h2>Kết quả: {ketqua}</h2>
          <p>Dự đoán: {ketqua === 'Autistic' ? 'Autistic' : 'Non-Autistic'}</p>
          <h3>Xác suất (khả năng tin cậy):</h3>
          {result.probabilities && result.probabilities.length > 0 ? (
            <table className="probability-table">
              <thead>
                <tr>
                  <th>Lớp</th>
                  <th>Lớp</th>
                  <th>Xác suất</th>
                </tr>
              </thead>
              <tbody>
                {result.probabilities.map((prob, index) => (
                  <tr key={index}>
                    <td>{prob.class || `Class ${index}`}</td>
                    <td>{prob.label || `Label ${index}`}</td>
                    <td>{prob.probability ? (prob.probability * 100).toFixed(2) + '%' : 'N/A'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>Không có dữ liệu xác suất.</p>
          )}
          <h3>Hiệu suất phân loại:</h3>
          <table className="metrics-table">
            <thead>
              <tr>
                <th>STT</th>
                <th>Chỉ số</th>
                <th>Giá trị</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0</td>
                <td>Độ chính xác</td>
                <td>0.89</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Recall</td>
                <td>0.89</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Precision</td>
                <td>0.89</td>
              </tr>
              <tr>
                <td>3</td>
                <td>F1-score</td>
                <td>0.89</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AutismClassifier;