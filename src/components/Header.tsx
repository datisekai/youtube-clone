import Link from "next/link";
import React from "react";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { BsBell, BsKeyboardFill, BsSearch } from "react-icons/bs";
import { FaMicrophone } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { RxHamburgerMenu } from "react-icons/rx";
import { LazyLoadImage } from "react-lazy-load-image-component";
import BellIcon from "./icons/BellIcon";
import RecordIcon from "./icons/RecordIcon";
import Logo from "./Logo";
import {TfiUpload} from 'react-icons/tfi'

interface HeaderProps {
  handleFullSidebar: () => void;
  handleDisplay:() => void
}

const Header: React.FC<HeaderProps> = ({ handleFullSidebar,handleDisplay }) => {
  const [textSearch, setTextSearch] = React.useState("");

  return (
    <>
      <div className="fixed top-0 right-0 left-0 z-50 flex px-2 md:px-6 h-[56px] items-center justify-between bg-white">
        <div className="flex flex-1 items-center">
          <div onClick={handleFullSidebar} className="hidden lg:block rounded-full p-2 transition-all hover:cursor-pointer hover:bg-gray-300">
            <RxHamburgerMenu fontSize={24} />
          </div>
          <div onClick={handleDisplay} className="block lg:hidden rounded-full p-2 transition-all hover:cursor-pointer hover:bg-gray-300">
            <RxHamburgerMenu fontSize={24} />
          </div>
          <Link href={"/"}>
            <div className="py-[18px] pl-[14px] pr-[16px]">
              <Logo />
            </div>
          </Link>
        </div>
        <div className="hidden md:flex flex-[1.5] items-center">
          <div className="flex flex-1 items-center rounded-tl-full rounded-bl-full border border-gray-300 py-2 px-2">
            <input
              type="text"
              value={textSearch}
              onChange={(e) => setTextSearch(e.target.value)}
              className="placeholder:text-md text-md w-full px-2 outline-none"
              placeholder="Tìm kiếm"
            />
            <BsKeyboardFill fontSize={24} className="hover:cursor-pointer" />
            {textSearch && (
              <GrClose
                fontSize={24}
                onClick={() => setTextSearch("")}
                className="ml-2 cursor-pointer"
              />
            )}
          </div>
          <div className="rounded-br-full  rounded-tr-full border-r border-t border-b border-gray-300 bg-gray-100 px-6 py-2 hover:cursor-pointer hover:bg-gray-300">
            <BsSearch fontSize={24} className="p-[2px]" />
          </div>
          <div className="ml-2 rounded-full p-2 transition-all hover:cursor-pointer hover:bg-gray-300">
            <FaMicrophone fontSize={24} />
          </div>
        </div>
        <div className="flex flex-1 items-center justify-end">
        <div className="block md:hidden ml-4 rounded-full p-2 hover:cursor-pointer hover:bg-gray-300">
            <BsSearch fontSize={18}/>
          </div>
          <div className="rounded-full p-2 hover:cursor-pointer hover:bg-gray-300">
            <RecordIcon width="24px" height="24px" className='hidden md:block'/>
            <TfiUpload fontSize={18} className='block md:hidden'/>
          </div>
          <div className="hidden md:block relative ml-4 rounded-full p-2 hover:cursor-pointer hover:bg-gray-300">
            <BellIcon width="24px" height="24px" />
            <span className="absolute top-[2px] right-0 flex h-[20px] w-[20px] items-center justify-center rounded-full border border-white bg-red-700 text-[12px] text-white">
              1
            </span>
          </div>
         
          <LazyLoadImage
            src="https://picsum.photos/200"
            className="ml-4 md:ml-6 h-[40px] w-[40px] rounded-full border"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
