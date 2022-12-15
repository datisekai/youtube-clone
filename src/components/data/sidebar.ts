import ChannelIcon from "../icons/ChannelIcon";
import HomeIcon from "../icons/HomeIcon";
import Library from "../icons/Library";
import LikeIcon from "../icons/LikeIcon";
import MyVideoIcon from "../icons/MyVideoIcon";
import SeenLaterIcon from "../icons/SeenLaterIcon";
import SeenVideoIcon from "../icons/SeenVideoIcon";
import ShortIcon from "../icons/ShortIcon";

const sidebars = {
  main: [
    {
      url: "/",
      title: "Trang chủ",
      icon: HomeIcon,
    },
    {
      url: "/shorts",
      title: "Shorts",
      icon: ShortIcon,
    },
    {
      url: "/subcriptions",
      title: "Kênh đăng ký",
      icon: ChannelIcon,
    },
  ],
  optional: [
    {
      url: "/library",
      title: "Thư viện",
      icon: Library,
    },
    {
      url: "/seen-video",
      title: "Video đã xem",
      icon: SeenVideoIcon,
    },
    {
      url: "/my-video",
      title: "Video của bạn",
      icon: MyVideoIcon,
    },
    {
      url: "/seen-later",
      title: "Xem sau",
      icon: SeenLaterIcon,
    },
    {
      url: "/like-video",
      title: "Video đã thích",
      icon: LikeIcon,
    },
  ],
};

export default sidebars;
