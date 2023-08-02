import React, { ReactNode } from "react";

enum COLORS {
  "primary-crimson" = "bg-primary-crimson",
  "primary-blueviolet" = "bg-primary-blueviolet"
}

enum HOVER {
  "secondary-crimson" = "secondary-crimson",
  "secondary-blueviolet" = "secondary-blueviolet"
}

type AvailableColors = keyof typeof COLORS;
type AvailableHover = keyof typeof HOVER;

interface ButtonProps {
  children: ReactNode;
  bgColor?: AvailableColors;
  hover?: AvailableHover;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, bgColor, hover, onClick }) => {
  return (
    <button
      className={` px-8 py-2 rounded-md ${bgColor ? COLORS[bgColor] : COLORS["primary-crimson"]}
         text-white font-semibold transition-all duration-200 md:text-base text-sm ${
           hover ? "hover:bg-" + HOVER[hover] : "hover:bg-" + HOVER["secondary-blueviolet"]
         }`}
      onClick={onClick || undefined}
    >
      {children}
    </button>
  );
};

export default Button;
