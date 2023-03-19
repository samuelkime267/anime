import React from "react";

const Button = ({ text, className }) => {
  return (
    <button
      className={`text-darkBlue capitalize bg-lemon px-[24px] py-[10px] w-fit ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
