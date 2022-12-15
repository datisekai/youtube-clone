import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const VideoCard = () => {
  return (
    <div>
      <LazyLoadImage
        src="https://picsum.photos/200"
        className="aspect-[137/76] w-full rounded-xl"
      />
      <div className="mt-3 flex">
        <LazyLoadImage
          src="https://picsum.photos/200"
          className="h-[36px] w-[36px] rounded-full"
        />
       <div className="ml-2 ">
       <h2 className="text-sm font-bold line-clamp-2">
          Cứu Vãn Kịp Không Remix - Tại Sao Em Thay Đổi Remix - Nhạc Trẻ Remix
          Hot TikTok 2022
        </h2>
        <h4 className="text-[#666] mt-2 text-sm">Em Ơi</h4>
        <div className=" text-[#666] text-sm flex items-center">
            <span>41 N lượt xem</span>
            <span className="ml-2">3 tuần trước</span>
        </div>
       </div>
      </div>
    </div>
  );
};

export default VideoCard;
