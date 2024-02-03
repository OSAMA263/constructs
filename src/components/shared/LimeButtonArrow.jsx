import React from "react";
import { IoArrowForward } from "react-icons/io5";

export default function LimeButtonArrow({ text, children }) {
  return React.cloneElement(children, {
    className:
      "p-5 font-medium rounded-2xl bg-lime [&_svg]:-rotate-45 [&:hover_svg]:rotate-0 hover:cursor-pointer",
    children: (
      <span className="flex items-center tracking-widest uppercase gap-x-2">
        <small>{text}</small>
        <IoArrowForward />
      </span>
    ),
  });
}
