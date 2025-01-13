import React from "react";
import trieuchungtuky1 from "../../../../assets/images/trieuchungtuky1.png";
import trieuchungtuky2 from "../../../../assets/images/trieuchungtuky2.png";
import "./Topic2.css";

export default function Topic2() {
  return (
    <div className="topic2-autism">
      {/* Triệu chứng ở trẻ em */}
      <div className="symptoms-section">
        <h2>1. Triệu chứng tự kỷ ở trẻ em</h2>
        {/* Hình ảnh dưới tiêu đề */}
        <div className="symptoms-images">
          <img src={trieuchungtuky1} alt="Triệu chứng tự kỷ 1" />
          <img src={trieuchungtuky2} alt="Triệu chứng tự kỷ 2" />
        </div>

        <p>
          Trẻ có dấu hiệu bị hội chứng tự kỷ thường có những biểu hiện điển hình
          sau đây:
        </p>
        <ul>
          <li>
            <strong>Về mặt cảm xúc:</strong> Khi còn nhỏ trẻ đã không biết cách
            giao tiếp với cha mẹ, không nhìn thẳng vào mắt người đối diện và khó
            phân biệt giữa người lạ và người quen. Khi đi học, trẻ thường thu
            mình lại một góc, ít giao tiếp với ai kể cả bạn bè và thầy cô.
          </li>
          <li>
            <strong>Về hành vi:</strong> Trẻ có thói quen chơi một món đồ chơi
            nhất định, thích thú với những âm thanh do mình tự tạo ra mà chẳng
            cần quan tâm đến lời nói từ cha mẹ. Thậm chí có một số trẻ tự làm
            hại chính bản thân bằng cách đập tay vào đầu, cào cấu thân thể đến
            chảy máu.
          </li>
          <li>
            <strong>Về ngôn ngữ:</strong> Trẻ có biểu hiện chậm biết nói, câu
            nói đơn điệu hoặc không mang một ý nghĩa nào, đôi lúc trẻ tự lẩm bẩm
            một mình bằng lời nói vô nghĩa, không xác định được.
          </li>
        </ul>
      </div>

      {/* Triệu chứng ở người lớn */}
      <div className="symptoms-section">
        <h2>2. Triệu chứng tự kỷ ở người lớn</h2>
        <p>
          Ngoài trẻ em, đối với người lớn khi có những dấu hiệu tự kỷ thường đi
          kèm với các triệu chứng:
        </p>

        {/* Các nhóm triệu chứng */}
        <h3>2.1 Đối với những mối quan hệ xung quanh:</h3>
        <ul>
          <li>
            Gặp những vấn đề trong giao tiếp xã hội, tư thế không tự nhiên và
            hay nói những lời vô nghĩa.
          </li>
          <li>Thiếu sự cảm thông với người khác và luôn cho mình đúng.</li>
          <li>Khó tạo nên tình bạn với những người xung quanh.</li>
          <li>Ít quan tâm và chia sẻ với những người xung quanh.</li>
        </ul>

        <h3>2.2 Với công việc hằng ngày:</h3>
        <ul>
          <li>Chậm tiếp thu, làm việc với năng suất kém.</li>
          <li>
            Khó bắt đầu cuộc nói chuyện và không biết cách duy trì cuộc nói
            chuyện đó.
          </li>
          <li>
            Hành động rập khuôn, làm đi làm lại hoặc lẩm bẩm một số từ nào đó.
          </li>
          <li>Ngớ người với những câu nói ẩn ý của người khác.</li>
        </ul>

        <h3>2.3 Về hành vi:</h3>
        <ul>
          <li>
            Chỉ tập trung vào một thứ nào đó, chứ không nhìn toàn bộ. Ví dụ chỉ
            tập trung vào bánh xe thay vì cả chiếc xe.
          </li>
          <li>Các hành vi luôn rập khuôn, máy móc, thiếu sự linh hoạt.</li>
          <li>
            Chỉ quan tâm đến một chủ đề nào đó mà không cần biết người bên cạnh
            đang nói chủ đề gì.
          </li>
        </ul>
      </div>
    </div>
  );
}
