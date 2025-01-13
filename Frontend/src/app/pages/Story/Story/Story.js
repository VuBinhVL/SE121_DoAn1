import React from "react";
import story from "../../../assets/icons/story.png";
import vtv from "../../../assets/images/vtv-logo.png";
import NewsCard from "../../../components/Story/NewsCard/NewCard";
import "./Story.css";

export default function Story() {
  // Dữ liệu các bài viết
  const news = [
    {
      image:
        "https://i1-vnexpress.vnecdn.net/2019/11/18/buc-tranh-1684-1574073412.jpg?w=1020&h=0&q=100&dpr=1&fit=crop&s=zXbxLCfSwga-3Tbg3NGM8A",
      title: "Cậu bé tự kỷ thay đổi nhờ bức tranh của cô giáo",
      author: "Tú Anh",
      time: "Thứ ba, 19/11/2019 - 09:00",
      source:
        "https://s1.vnecdn.net/vnexpress/restruct/i/v9543/v2_2019/pc/graphics/logo.svg",
      link: "https://vnexpress.net/cau-be-tu-ky-thay-doi-nho-buc-tranh-cua-co-giao-4014174.html",
    },
    {
      image:
        "https://cdn-images.vtv.vn/thumb_w/1200/2018/11/12/img20181111232724571-93a71-15420129910421225325649.jpg",
      title:
        "Nam sinh mắc chứng tự kỷ với bài phát biểu tốt nghiệp truyền cảm hứng mạnh mẽ",
      author: "Thái Hằng",
      time: "Thứ ba, 13/11/2028 - 06:48",
      source: "https://static.mediacdn.vn/vtv/web_images/vtv_times-01.svg",
      link: "https://vtv.vn/giao-duc/nam-sinh-mac-chung-tu-ky-voi-bai-phat-bieu-tot-nghiep-truyen-cam-hung-manh-me-20181112160116119.htm",
    },
    {
      image:
        "http://static.baovanhoa.vn/zoom/600_400/Portals/0/EasyGalleryImages/1/72638/%E2%80%9CNgh%E1%BB%87-s%C4%A9%E2%80%9D-Nguy%E1%BB%85n-Kh%E1%BA%AFc-H%C6%B0ng-bi%E1%BB%83u-di%E1%BB%85n-ghi-ta-trong-l%C3%BAc-th%C4%83ng-b%E1%BA%B1ng-tr%C3%AAn-xe-%C4%91%E1%BA%A1p-m%E1%BB%99t-b%C3%A1nh-v%C3%A0-%C4%91%E1%BB%99i-b%C3%B3ng-tr%C3%AAn-%C4%91%E1%BA%A7u.jpg",
      title: "Câu chuyện truyền cảm hứng từ một trẻ tự kỷ",
      author: " Kiều Bích Hậu ",
      time: "Thứ hai, 08/01/2024 - 02:47",
      source: "https://static.baovanhoa.vn/web/images/logo-bvh.png",
      link: "https://baovanhoa.vn/gia-dinh/cau-chuyen-truyen-cam-hung-tu-mot-tre-tu-ky-67451.html",
    },
    {
      image:
        "https://cdn.tuoitre.vn/thumb_w/1200/471584752817336320/2024/6/14/base64-17183794201892108694418.png",
      title:
        "Chuyện của Gia Huy, từ cậu bé tự kỷ trở thành học sinh giỏi Tin học quốc gia",
      author: " Nguyễn Văn Dũng",
      time: "Thứ hai, 15/06/2024 - 05:53",
      source:
        "https://upload.wikimedia.org/wikipedia/commons/1/1f/Tu%E1%BB%95i_Tr%E1%BA%BB_Logo.svg",
      link: "https://tuoitre.vn/chuyen-cua-gia-huy-tu-cau-be-tu-ky-tro-thanh-hoc-sinh-gioi-tin-hoc-quoc-gia-20240614222035695.htm",
    },
    {
      image:
        "https://cdn-images.vtv.vn/thumb_w/1200/2022/10/16/4-16659209318712041544584-crop-16659209767452117270324.jpg",
      title: "Hành trình của cậu bé tự kỷ với giấc mơ vượt lên số phận",
      author: " Duy Tuấn ",
      time: "Chủ nhật, 16/10/2022 - 19:36",
      source: vtv,
      link: "https://vtv.vn/xa-hoi/hanh-trinh-cua-cau-be-tu-ky-voi-giac-mo-vuot-len-so-phan-20221016185313054.htm",
    },
    {
      image:
        "https://cdn.tuoitre.vn/thumb_w/1200/471584752817336320/2023/7/4/base64-16884484013531747152456.png",
      title: "Cậu bé tự kỷ năm xưa viết sách giúp đỡ trẻ tự kỷ",
      author: " Linh Đoan",
      time: "Thứ tư, 04/07/2023 - 14:44",
      source:
        "https://upload.wikimedia.org/wikipedia/commons/1/1f/Tu%E1%BB%95i_Tr%E1%BA%BB_Logo.svg",
      link: "https://tuoitre.vn/cau-be-tu-ky-nam-xua-viet-sach-giup-do-tre-tu-ky-20230704125115818.htm",
    },
  ];

  return (
    <div className="story-page">
      <div className="story-header">
        <img src={story} alt="Story Icon" className="story-icon" />
        <h2>Câu chuyện thành công</h2>
      </div>

      <div className="story-list">
        {news.map((item, index) => (
          <NewsCard
            key={index}
            image={item.image}
            title={item.title}
            author={item.author}
            time={item.time}
            source={item.source}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
}
