import React from "react";
import nguyennhantuky1 from "../../../../assets/images/nguyennhantuky1.jpg";
import nguyennhantuky2 from "../../../../assets/images/nguyennhantuky2.jpg";
import "./Topic3.css";

export default function Topic3() {
  return (
    <div className="topic3-autism">
      <div className="causes-images">
        <img src={nguyennhantuky1} alt="Triệu chứng tự kỷ 1" />
        <img src={nguyennhantuky2} alt="Triệu chứng tự kỷ 2" />
      </div>
      {/* Nội dung */}
      <div className="causes-content">
        <h2>Nguyên nhân rối loạn phổ tự kỷ và yếu tố rủi ro</h2>
        <p>
          Không tìm được nguyên nhân gây rối loạn phổ tự kỷ. Tuy nhiên, với sự
          phức tạp và mức độ nghiêm trọng của các triệu chứng, bệnh có thể do di
          truyền và yếu tố môi trường gây ra. Các nguyên nhân gồm:
        </p>

        {/* Danh sách nguyên nhân */}
        <ul>
          <li>
            <strong>1. Gen di truyền:</strong> Với một số trẻ, rối loạn phổ tự
            kỷ có thể liên quan đến rối loạn di truyền, chẳng hạn như hội chứng
            Rett hoặc hội chứng X dễ gãy. Ở các trường hợp khác, những đột biến
            di truyền có thể làm tăng nguy cơ mắc chứng rối loạn phổ tự kỷ.
          </li>
          <li>
            <strong>2. Có anh chị em mắc ASD:</strong> Gia đình có con rối loạn
            phổ tự kỷ, đứa con khác cũng có nguy cơ cao mắc bệnh này. Ngoài ra,
            cha mẹ hoặc người thân của trẻ mắc chứng rối loạn phổ tự kỷ có thể
            gặp phải những vấn đề nhỏ về kỹ năng giao tiếp hoặc biểu hiện một số
            triệu chứng của bệnh.
          </li>
          <li>
            <strong>3. Có cha mẹ lớn tuổi:</strong> Có mối liên hệ giữa những
            đứa trẻ sinh ra từ cha mẹ lớn tuổi và chứng rối loạn phổ tự kỷ nhưng
            cần nhiều nghiên cứu hơn để chứng minh điều này.
          </li>
          <li>
            <strong>4. Biến chứng khi sinh:</strong> Một số loại thuốc, chẳng
            hạn như axit valproic và thalidomide khi dùng trong thời kỳ mang
            thai cũng khiến con sinh ra có nguy cơ cao mắc bệnh tự kỷ. [5]
          </li>
          <li>
            <strong>5. Sinh non thiếu tháng:</strong> Trẻ sinh ra trước 26 tuần
            tuổi có nguy cơ mắc chứng rối loạn phổ tự kỷ cao hơn trẻ bình
            thường.
          </li>
          <li>
            <strong>6. Giới tính:</strong> Các bé trai có nguy cơ mắc chứng rối
            loạn phổ tự kỷ cao gấp 4 lần so với bé gái.
          </li>
        </ul>
      </div>
    </div>
  );
}
