import React, { FC, useEffect } from "react";
import Footer from "../Footer";
import Header from "../Header";
import useChangeWidth from "../hooks/useChangeWidth";
import Sidebar from "../Sidebar";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const [openSidebar, setOpenSidebar] = React.useState(false);
  const [fullSidebar, setFullSidebar] = React.useState(false);
  const width = useChangeWidth();

  useEffect(() => {
    if (width < 768) {
      setFullSidebar(true);
    }
  }, [width]);

  return (
    <div>
      <Header
        handleDisplay={() => setOpenSidebar(!openSidebar)}
        handleFullSidebar={() => setFullSidebar(!fullSidebar)}
      />
      <div className="flex min-h-screen px-4 pt-[56px]">
        <Sidebar
          isOpen={openSidebar}
          isFull={fullSidebar}
          handleHide={() => setOpenSidebar(false)}
        />
        <div className="flex-1 pr-4">{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
