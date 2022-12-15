import React from "react";
import MainLayout from "../components/layouts/MainLayout";
import { Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { Player } from "video-react";
import dynamic from "next/dynamic";
import ShortCard from "../components/cards/ShortCard";
import useChangeWidth from "../components/hooks/useChangeWidth";
import Meta from "../components/Meta";




const Shorts = () => {

  const width = useChangeWidth()

  let slide = 1.3;

  if(width < 768){
    slide = 1;
  }

  const [activePlay, setActivePlay] = React.useState(0)

  return (
    <>
      <Meta title="Shorts" description="Thưởng thức video và nhạc bạn yêu thích, tải nội dung do bạn sáng tạo lên và chia sẻ nội dung đó với gia đình, bạn bè cũng như mọi người trên YouTube."/>
      <MainLayout>
        <div className="flex flex-col justify-center h-[100vh] mt-4">
          <Swiper
            direction="vertical"
            className="h-full w-full"
            modules={[ Pagination]}
            spaceBetween={0}
            slidesPerView={1}
          centeredSlides={false}
            pagination={{
              clickable: true,
            }}
            onSlideChange={(swiper) => {
              setActivePlay(swiper.realIndex);
            }}
          >
            {["http://res.cloudinary.com/drhjt2o51/video/upload/v1652340512/vroi2gnvwniel5qeissb.mov", "http://res.cloudinary.com/drhjt2o51/video/upload/v1650698702/u4y7zo8m6cldlpn2yx48.mp4", "http://res.cloudinary.com/drhjt2o51/video/upload/v1650698191/f7eenmporpr2v5wvipgt.mp4", "http://res.cloudinary.com/drhjt2o51/video/upload/v1650021717/z7bqwz6yi0tteqrft3yy.mp4", "http://res.cloudinary.com/drhjt2o51/video/upload/v1650012890/cbweq3iefub9c8jynttg.mp4"].map((item, index) => (
              <SwiperSlide key={item} className={`flex justify-center w-full h-full`}>
               <ShortCard data={item} active={activePlay} currentIndex={index}/>
              </SwiperSlide>
            ))}
          </Swiper>
         
        </div>
      </MainLayout>
    </>
  );
};

export default Shorts;
