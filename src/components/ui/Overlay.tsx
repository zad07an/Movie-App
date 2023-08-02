import React from "react";

interface OverlayProps {
  onClick?: () => void;
}

const Overlay: React.FC<OverlayProps> = ({ onClick }) => {
  return (
    <section
      className=" w-full h-screen fixed top-0 left-0 bg-[rgba(0_,0_,0_,0.7)] backdrop-blur-sm z-[9999]"
      onClick={onClick}
    ></section>
  );
};

export default Overlay;
