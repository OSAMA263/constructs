import React from "react";
import { IoArrowForward } from "react-icons/io5";

export default function LimeButtonArrow({ text, children}) {
  return React.cloneElement(children, {
    className:
      "sm:p-5 p-3 font-medium rounded-2xl bg-lime [&_svg]:-rotate-45 [&:hover_svg]:rotate-0 hover:cursor-pointer",
    children: (
      <span className="flex items-center tracking-widest uppercase gap-x-2">
        <small className="sm:text-base text-xs">{text}</small>
        <IoArrowForward />
      </span>
    ),
  });
}
