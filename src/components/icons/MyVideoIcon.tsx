import * as React from "react";

function MyVideoIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" pointerEvents="none" display="block" {...props}>
      <g className="style-scope yt-icon">
        <path d="M10 8l6 4-6 4V8zm11-5v18H3V3h18zm-1 1H4v16h16V4z" />
      </g>
    </svg>
  );
}

export default MyVideoIcon;
