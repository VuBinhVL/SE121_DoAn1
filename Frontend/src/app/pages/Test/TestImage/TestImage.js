import React, { useState } from "react";
import { fetchUploadFormData, fetchPost2 } from "../../../lib/httpHandler";
import './TestImage.css'; // Import the CSS file

const AutismClassifier = () => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState(""); 
  const [result, setResult] = useState({
    label: "",
    probabilities: []
  });

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
          setFileName(data.fileName); 
          alert("Upload thành công!");
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
          console.log("Full predictData:", predictData); // Đảm bảo log đầy đủ
          setResult({
            label: predictData.label || "Không xác định",
            probabilities: predictData.probabilities || []
          });
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

  return (
    <div className="container">
      <h1>Autism Classifier</h1>
      <input type="file" onChange={handleFileChange} />
      <button className="upload" onClick={handleUpload}>Upload</button>
      <button className="predict" onClick={handlePredict} disabled={!file}>Dự đoán</button>
      {file && (
        <div className="image-preview">
          <img src={URL.createObjectURL(file)} alt="Uploaded Image" />
          <p>Ảnh đã tải lên</p>
        </div>
      )}
      {result.label && (
        <div className="result">
          <h2>Kết quả: {result.label}</h2>
          <p>Dự đoán: {result.label === 'Autistic' ? 'Autistic' : 'Non-Autistic'}</p>
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