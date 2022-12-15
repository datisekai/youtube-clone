import * as React from "react";

function ChannelIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" pointerEvents="none" display="block" {...props}>
      <g className="style-scope yt-icon">
        <path d="M10 18v-6l5 3-5 3zm7-15H7v1h10V3zm3 3H4v1h16V6zm2 3H2v12h20V9zM3 10h18v10H3V10z" />
      </g>
    </svg>
  );
}

export default ChannelIcon;
