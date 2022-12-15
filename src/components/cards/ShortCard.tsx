import React from "react";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {MdInsertComment} from 'react-icons/md'
import {IoIosShareAlt} from 'react-icons/io'
import {FiMoreHorizontal} from 'react-icons/fi'
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

interface ShortCardProps{
  active:number
  currentIndex:number,
  data:string
}

const ShortCard:React.FC<ShortCardProps> = ({active,currentIndex,data}) => {
    const videoRef:any = React.useRef(null);


    React.useEffect(() => {
      if(active === currentIndex){
        if(currentIndex === 0){
          videoRef.current.muted = true
        }
        videoRef && videoRef.current && videoRef.current.play();
      }else{
        videoRef && videoRef.current && videoRef.current.pause();
      }
    },[active])


  return (
    <div className="flex w-[347px] h-[calc(100vh-100px)] relative">
      <video
        ref={videoRef}
        className="rounded-xl w-full h-full object-fill"
        poster={data.replace('mp4','png')}
        controls
      >
        <source src={data} />
      </video>
      <div className="ml-4 h-full flex flex-col justify-end absolute md:relative right-2 bottom-[10%]">
        <div className="flex justify-center cursor-pointer flex-col items-center w-[55px] mt-4">
          <div className="flex h-[50px] hover:bg-gray-300 w-[50px] items-center  justify-center rounded-full bg-[#2f2f2f] md:bg-gray-200">
            <AiFillLike fontSize={24} className='text-white md:text-black' />
          </div>
          <span className="text-center text-white text-sm md:text-md md:text-black">22 N</span>
        </div>
        <div className="flex justify-center cursor-pointer flex-col items-center mt-4 w-[55px] mx-auto">
          <div className="flex h-[50px] hover:bg-gray-300 w-[50px] items-center  justify-center rounded-full bg-[#2f2f2f] md:bg-gray-200">
            <AiFillDislike fontSize={24} className='text-white md:text-black' />
          </div>
          <span className="text-center text-white text-sm md:text-md md:text-black">100</span>
        </div>
        <div className="flex justify-center cursor-pointer flex-col items-center w-[55px] mt-4">
          <div className="flex h-[50px] hover:bg-gray-300 w-[50px] items-center  justify-center rounded-full bg-[#2f2f2f] md:bg-gray-200">
            <MdInsertComment fontSize={24} className='text-white md:text-black' />
          </div>
          <span className="text-center text-white text-sm md:text-md md:text-black">0</span>
        </div>
        <div className="flex justify-center cursor-pointer flex-col w-[55px] items-center mt-4">
          <div className="flex h-[50px] hover:bg-gray-300 w-[50px] items-center  justify-center rounded-full bg-[#2f2f2f] md:bg-gray-200">
            <IoIosShareAlt fontSize={28} className='text-white md:text-black' />
          </div>
          <span className="text-center text-white text-sm md:text-md md:text-black">Chia sẻ</span>
        </div>
        <div className="flex justify-center cursor-pointer flex-col items-center mt-4">
          <div className="flex h-[50px] hover:bg-gray-300 w-[50px] items-center  justify-center rounded-full bg-[#2f2f2f] md:bg-gray-200">
            <FiMoreHorizontal fontSize={24} className='text-white md:text-black' />
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
