import React from "react";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {MdInsertComment} from 'react-icons/md'
import {IoIosShareAlt} from 'react-icons/io'
import {FiMoreHorizontal} from 'react-icons/fi'

const ShortCard = () => {
  return (
    <div className="flex">
      <video
        className="rounded-xl"
        poster="https://res.cloudinary.com/drhjt2o51/video/upload/v1650698191/f7eenmporpr2v5wvipgt.png"
        width={347}
        height={617}
        controls
      >
        <source src="http://res.cloudinary.com/drhjt2o51/video/upload/v1650698191/f7eenmporpr2v5wvipgt.mp4" />
      </video>
      <div className="ml-2 flex flex-col justify-end">
        <div className="flex justify-center cursor-pointer flex-col items-center w-[55px] mt-4">
          <div className="flex h-[50px] w-[50px] items-center  justify-center rounded-full bg-gray-300">
            <AiFillLike fontSize={24} />
          </div>
          <span className="text-center">22 N</span>
        </div>
        <div className="flex justify-center cursor-pointer flex-col items-center mt-4 w-[55px] mx-auto">
          <div className="flex h-[50px] w-[50px] items-center  justify-center rounded-full bg-gray-300">
            <AiFillDislike fontSize={24} />
          </div>
          <span className="text-center">100</span>
        </div>
        <div className="flex justify-center cursor-pointer flex-col items-center w-[55px] mt-4">
          <div className="flex h-[50px] w-[50px] items-center  justify-center rounded-full bg-gray-300">
            <MdInsertComment fontSize={24} />
          </div>
          <span className="text-center">0</span>
        </div>
        <div className="flex justify-center cursor-pointer flex-col w-[55px] items-center mt-4">
          <div className="flex h-[50px] w-[50px] items-center  justify-center rounded-full bg-gray-300">
            <IoIosShareAlt fontSize={28} />
          </div>
          <span className="text-center">Chia sẻ</span>
        </div>
        <div className="flex justify-center cursor-pointer flex-col items-center mt-4">
          <div className="flex h-[50px] w-[50px] items-center  justify-center rounded-full bg-gray-300">
            <FiMoreHorizontal fontSize={24} />
          </div>
        </div>
        <div className="flex justify-center cursor-pointer flex-col items-center mt-4 ">
        <LazyLoadImage src="https://picsum.photos/200" className="w-[50px] h-[50px] rounded-full"/>

        </div>
      </div>
    </div>
  );
};

export default ShortCard;
