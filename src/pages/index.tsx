import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import VideoCard from "../components/cards/VideoCard";
import MainLayout from "../components/layouts/MainLayout";
import Meta from "../components/Meta";
import SlideCategory from "../components/SlideCategory";

const Home: NextPage = (props) => {
  return (
    <>
      <Meta title="Youtube" description="Thưởng thức video và nhạc bạn yêu thích, tải nội dung do bạn sáng tạo lên và chia sẻ nội dung đó với gia đình, bạn bè cũng như mọi người trên YouTube."/>
      <MainLayout>
        <div className=''>
          <div className=" sticky top-[55px] md:top-[56px]  bg-white pt-2 pb-4 left-[110px] right-0 ">
            <SlideCategory/>
          </div>

          <div className='mt-[24px] pr-4'>
            <div className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {[1,2,3,4,5,6,7,8,9,10].map(item => <VideoCard key={item}/>)}
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Home;
