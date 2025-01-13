import React from "react";
import "./Topic1.css";

export default function Topic1() {
  return (
    <div className="topic1-autism">
      {/* Video */}
      <div className="autism-video">
        <iframe
          width="600"
          height="315"
          src="https://www.youtube.com/embed/6jUv3gDAM1E"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Nội dung giới thiệu */}
      <div className="autism-content">
        <p>
          <strong>Tự kỷ (Autism)</strong> là một rối loạn phát triển thần kinh
          đặc trưng bởi sự giao tiếp và tương tác xã hội kém, các hành vi lặp đi
          lặp lại và rập khuôn. Triệu chứng đã bắt đầu từ thời thơ ấu và phát
          triển dần theo thời gian nếu không được chữa trị kịp thời. [1]
        </p>
        <p>Tự kỷ được chia thành 2 loại là:</p>
        <ul>
          <li>
            <strong>Tự kỷ bẩm sinh:</strong> Dạng tự kỷ phát triển từ khi trẻ
            mới sinh ra cho đến giai đoạn 3 tuổi. Biểu hiện đặc trưng dễ nhận
            biết là trẻ chậm phát triển.
          </li>
          <li>
            <strong>Tự kỷ không điển hình:</strong> Trẻ vẫn phát triển bình
            thường trong giai đoạn từ 12-30 tháng tuổi. Sau đó, trẻ đột nhiên
            không phát triển nữa hoặc mất hết những khả năng mà trẻ đã học được
            trong quá trình trưởng thành.
          </li>
        </ul>
        <p>
          <strong>Tự kỷ có phải là bệnh không?</strong>
          <br />
          Không. Tự kỷ không phải là bệnh mà chỉ là bộ não của bạn hoạt động
          theo cách khác với những người xung quanh bạn và nó mặc định từ lúc
          bạn sinh ra. Tự kỷ không phải là một tình trạng bệnh có phương pháp
          điều trị hoặc chữa bệnh, nên người bị hội chứng tự kỷ lại rất cần được
          hỗ trợ về mặt tinh thần lẫn thể chất. [2]
        </p>

        {/* Các mức độ tự kỷ */}
        <h2>Các mức độ tự kỷ</h2>
        <ol>
          <li>
            <strong>Hội chứng Asperger</strong>
            <p>
              Hội chứng Asperger là rối loạn về phát triển thần kinh, tâm lý,
              suy giảm khả năng giao tiếp và khả năng tương tác xã hội. Trẻ có
              thể có trí thông minh ở mức trung bình hoặc có thể vượt trội hơn
              với người khác và hoàn toàn không bị mất khả năng ngôn ngữ.
            </p>
            <p>
              Biểu hiện sớm của người hội chứng Asperger biểu hiện từ nhỏ, trẻ
              không nhìn vào mắt khi nói chuyện, không thể giao tiếp người thân
              kể cả bố mẹ bằng mắt. Trong các tình huống giao tiếp xã hội trẻ
              cảm thấy bị lúng túng, không biết trả lời hay phản ứng như thế nào
              khi có người tiếp cận, nói chuyện với trẻ.
            </p>
          </li>
          <li>
            <strong>Rối loạn tự kỷ</strong>
            <p>
              Rối loạn tự kỷ là một hiện tượng liên quan đến nhận thức, ngôn
              ngữ, cảm giác kèm theo những hành vi rối loạn, suy yếu. Hội chứng
              rối loạn tự kỷ phát triển hệ thần kinh ở não do một số gen bất
              thường gây ra làm thay một cấu trúc ở những bộ phận như sinh hóa
              thần kinh không được bình thường, thùy trán, tiểu não, thùy thái
              dương,…
            </p>
            <p>
              Hiện nay nguyên nhân rối loạn tự kỷ vẫn còn đang bỏ ngỏ. Tuy
              nhiên, theo thống kê các trường hợp mắc tự kỷ cho thấy nguyên nhân
              do gen di truyền chiếm 25%. Ngoài ra, rối loạn tự kỷ còn do môi
              trường xung quanh tác động như yếu tố tâm lý xuất phát từ gia
              đình, trẻ bị stress hay yếu tố thần kinh và sinh học như động
              kinh, việc chăm sóc trẻ của bố mẹ chưa đúng,…
            </p>
          </li>
          <li>
            <strong>Rối loạn phát triển lan tỏa (PDD-NOS)</strong>
            <p>
              PDD-NOS là một rối loạn phát triển thần kinh làm suy yếu tăng
              trưởng và phát triển của não. Trong số nhiều loại hội chứng tự kỷ
              khác nhau, các bác sĩ chẩn đoán coi PDD-NOS là một loại tự kỷ
              không điển hình.
            </p>
            <p>
              Theo thống kê của Trung tâm Kiểm soát bệnh tật thì 68 trẻ thì có 1
              trẻ sẽ mắc rối loạn phát triển lan tỏa và cứ 1000 người trưởng
              thành trên toàn thế giới thì có 6 người trong số đó sẽ mắc chứng
              rối loạn phát triển lan tỏa.
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
}
