import React from "react";
import nhanbiettuky1 from "../../../../assets/images/nhanbiettuky1.jpg";
import nhanbiettuky2 from "../../../../assets/images/nhanbiettuky2.jpg";
import "./Topic4.css";

export default function Topic4() {
  return (
    <div className="topic4-autism">
      {/* Video */}
      <div className="autism-video">
        <iframe
          width="600"
          height="315"
          src="https://www.youtube.com/embed/_snimIOTp9o"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Nội dung */}
      <div className="autism-content">
        <h2>Dấu hiệu và đặc điểm</h2>
        <p>
          Các dấu hiệu và đặc điểm đầu tiên của chứng tự kỷ (còn được gọi là rối
          loạn phổ tự kỷ hoặc ASD) có thể rất khác nhau và xuất hiện vào những
          thời điểm khác nhau. Một số người trong phổ tự kỷ biểu hiện các dấu
          hiệu trong vài tháng đầu đời. Những người khác không biểu hiện các dấu
          hiệu và đặc điểm cho đến tận rất lâu sau đó.
        </p>

        {/* Dấu hiệu ở trẻ dưới 12 tháng tuổi */}
        <h3>Đối với trẻ dưới 12 tháng tuổi</h3>
        <ul>
          <li>Ít hoặc không nói lắp</li>
          <li>Ít hoặc không có giao tiếp bằng mắt</li>
          <li>Thể hiện sự quan tâm nhiều hơn đến đồ vật hơn là con người</li>
          <li>Dường như không nghe thấy khi được nói chuyện trực tiếp</li>
          <li>Chơi đồ chơi theo cách khác thường hoặc hạn chế</li>
          <li>
            Những chuyển động lặp đi lặp lại bằng ngón tay, bàn tay, cánh tay
            hoặc đầu
          </li>
          <li>
            Bắt đầu phát triển các kỹ năng ngôn ngữ nhưng sau đó dừng lại hoặc
            mất đi các kỹ năng đó
          </li>
        </ul>

        {/* Dấu hiệu ở trẻ dưới 2 tuổi */}
        <h3>Đối với trẻ dưới 2 tuổi</h3>
        <ul>
          <li>Lĩnh vực quan tâm rất cụ thể</li>
          <li>Không quan tâm hoặc quan tâm hạn chế đến những đứa trẻ khác</li>
          <li>Các vấn đề về hành vi như tự làm hại bản thân hoặc tự cô lập</li>
          <li>Lặp lại các từ hoặc cụm từ mà không có vẻ hiểu chúng</li>
          <li>
            Khó khăn trong các tương tác xã hội qua lại (như chơi trò ú òa)
          </li>
          <li>
            Thích mọi thứ theo một cách nhất định, chẳng hạn như luôn ăn cùng
            một loại thức ăn
          </li>
        </ul>

        {/* Dấu hiệu ở mọi lứa tuổi */}
        <h3>Các dấu hiệu có thể có ở mọi lứa tuổi</h3>
        <ul>
          <li>Ít giao tiếp bằng mắt</li>
          <li>
            Phản ứng riêng biệt với:
            <ul>
              <li>Đèn</li>
              <li>Hương vị</li>
              <li>Mùi</li>
              <li>Âm thanh</li>
              <li>Màu sắc</li>
              <li>Kết cấu</li>
            </ul>
          </li>
          <li>Sở thích rất cụ thể</li>
          <li>Lặp lại các từ hoặc cụm từ (nói lặp lại)</li>
          <li>Hành vi lặp đi lặp lại, chẳng hạn như quay tròn</li>
          <li>Giao tiếp phi ngôn ngữ hoặc chậm phát triển ngôn ngữ</li>
          <li>
            Phản ứng dữ dội với những thay đổi nhỏ trong thói quen hoặc môi
            trường xung quanh
          </li>
        </ul>
      </div>
      {/* Hình ảnh ở cuối nội dung */}
      <div className="autism-images">
        <img src={nhanbiettuky1} alt="Hình ảnh nhận biết tự kỷ" />
        <img src={nhanbiettuky2} alt="Hình ảnh nhận biết tự kỷ" />
      </div>
    </div>
  );
}
