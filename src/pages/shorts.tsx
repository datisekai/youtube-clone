import React from "react";
import MainLayout from "../components/layouts/MainLayout";
import { Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { Player } from "video-react";
import dynamic from "next/dynamic";
import ShortCard from "../components/cards/ShortCard";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const Shorts = () => {
  return (
    <>
      <MainLayout>
        <div className="flex flex-col justify-center">
          <Swiper
            direction="vertical"
            className="h-full w-full"
            modules={[Navigation, Pagination]}
            slidesPerView={"auto"}
            navigation
            pagination={{
              clickable: true,
            }}
          >
            {[1, 2, 3, 4, 5].map((item, index) => (
              <SwiperSlide key={item} className={` mt-4 flex justify-center `}>
               <ShortCard/>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </MainLayout>
    </>
  );
};

export default Shorts;
