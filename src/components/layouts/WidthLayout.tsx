import React, { FC } from "react";

interface WidthLayoutProps {
  maxWidth?: number;
  children: React.ReactNode;
}

const WidthLayout: FC<WidthLayoutProps> = ({ maxWidth = 1200, children }) => {
  return (
    <div className="mx-auto" style={{ maxWidth }}>
      {children}
    </div>
  );
};

export default WidthLayout;
