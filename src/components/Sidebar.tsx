import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import sidebars from "./data/sidebar";
import { AiOutlineDown } from "react-icons/ai";
import useChangeWidth from "./hooks/useChangeWidth";

interface SidebarProps{
  isOpen:boolean,
  isFull:boolean,
  handleHide:() => void
}

const Sidebar:React.FC<SidebarProps> = ({isOpen, handleHide, isFull}) => {
  const router = useRouter();
  const width = useChangeWidth()


  return (
    <>
      <div className={`${!isOpen && 'hidden lg:block'}  bg-white select-none  sidebar fixed min-h-screen left-0 z-50 pb-5 top-[56px]  bottom-0 overflow-y-scroll ${isFull ? 'w-[240px] px-4' : 'w-[80px] px-6'}`}>
        <div onClick={handleHide} className={`fixed bg-[rgba(0,0,0,0.6)] top-0 left-[240px] right-0 bottom-0 ${!isOpen && 'hidden'}`}></div>
        <div className={`${isFull && 'border-b border-gray-300'}  py-2`}>
          {sidebars.main.map((item) => {
            const Icon = item.icon;
            return (
              <Link key={item.url} href={item.url}>
                <div
                  className={`${!isFull ? 'flex-col justify-center' : router.asPath.indexOf(item.url) != -1 && "bg-gray-200"} flex items-center transition-all hover:cursor-pointer hover:bg-gray-200 rounded-xl py-2 px-4`}
                >
                  <Icon width="24px" height="24px" />
                  <span className={`${!isFull ? 'text-[10px] whitespace-nowrap mt-2' : 'text-md  ml-5'}`}>{item.title}</span>
                </div>
              </Link>
            );
          })}
        </div>
        <div className={`${!isFull && 'hidden'} py-2 border-b border-gray-300`}>
          {sidebars.optional.map((item) => {
            const Icon = item.icon;
            return (
              <Link key={item.url} href={item.url}>
                <div
                  className={`flex items-center transition-all hover:cursor-pointer ${
                    router.asPath.indexOf(item.url) != -1 && "bg-gray-200"
                  } hover:bg-gray-200 rounded-xl py-2 px-4`}
                >
                  <Icon width="24px" height="24px" />
                  <span className="text-md ml-5">{item.title}</span>
                </div>
              </Link>
            );
          })}
        </div>
        <div className={`${!isFull && 'hidden'} py-2 border-b border-gray-300`}>
          <h2 className="text-lg">Kênh đăng ký</h2>
          <div className="mt-2">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="flex items-center py-2 hover:bg-gray-300 rounded-xl px-4 hover:cursor-pointer"
              >
                <LazyLoadImage
                  src="https://picsum.photos/200"
                  className="w-[30px] h-[30px] rounded-full border"
                />
                <span className="line-clamp-1 text-md ml-5">Jenny Remix</span>
              </div>
            ))}
            <div className="flex items-center py-1 hover:bg-gray-300 rounded-xl px-4 hover:cursor-pointer">
              <AiOutlineDown className="w-[24px]" />
              <span className="line-clamp-1 text-md ml-5 ">
                Hiển thị thêm 33 mục
              </span>
            </div>
          </div>
        </div>
        <div className={`${!isFull && 'hidden'} py-2 border-b border-gray-300`}>
          <h2 className="text-lg">Khám phá</h2>
          <div className="mt-2">
            {["Thịnh hành", "Âm nhạc", "Trò chơi", "Tin tức"].map((item) => (
              <p
                className="text-md py-2 rounded-xl hover:cursor-pointer hover:bg-gray-300 px-4"
                key={item}
              >
                {item}
              </p>
            ))}
            <div className="flex items-center py-1 hover:bg-gray-300 rounded-xl px-4 hover:cursor-pointer">
              <AiOutlineDown className="w-[24px]" />
              <span className="line-clamp-1 text-md ml-5 ">
                Hiển thị thêm 33 mục
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={`hidden lg:block ${isFull ? 'w-[240px]' : 'w-[80px]'}`}></div>
    </>
  );
};

export default Sidebar;
