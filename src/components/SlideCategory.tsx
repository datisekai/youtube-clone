import React from "react";
import { Navigation} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import useSlidesView from "./hooks/useSlideView";

const SlideCategory = () => {

  return (
    <Swiper
      className="w-full"
      modules={[Navigation]}
      spaceBetween={8}
      slidesPerView={'auto'}
      navigation
    >
      {[
        "Tất cả",
        "Âm nhạc",
        "Trực tiếp",
        "Danh sách kết hợp",
        "Trò chơi",
        "Mới tải lên gần đây",
        "Đã xem",
        "Đề xuất mới",
      ].map((item, index) => (
        <SwiperSlide key={index} className={`w-auto text-md rounded-lg bg-gray-200 text-center hover:cursor-pointer  px-4 py-[6px] ${index === 0 ? 'bg-black text-white' : 'hover:bg-gray-300'}`}>
          {item}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};



export default SlideCategory;
