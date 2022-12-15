import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "node_modules/video-react/dist/video-react.css"

import "../styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
      Component,
      pageProps: { session, ...pageProps },
    }) => {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default MyApp;
