import React from "react";
import { ourBlog } from "../data";
import LayoutSection from "../../../shared/LayoutSection";
import tw from "tailwind-styled-components";
import { GoPlus } from "react-icons/go";
import { Link } from "react-router-dom";

export default function OurBlog() {
  return (
    <LayoutSection styles="py-28 bg-gray-200 ">
      <div className="w-[60%] mx-auto">
        <Header />
        {/* grid cards */}
        <div className="grid grid-cols-3 gap-x-4">
          {ourBlog.map(({ bg, details, text }) => (
            <Card {...{ bg, details, text }} key={bg} />
          ))}
        </div>
      </div>
    </LayoutSection>
  );
}

const Header = () => {
  return (
    <div className="flex-between border-b border-black py-6 mb-20">
      <div className="text-5xl font-bold text-black">
        <span>Our</span>
        <span className="font-extralight italic"> Blog</span>
      </div>
      <div className="font-medium text-darkGray space-y-4">
        <h1>OUR RECENT ARTICLES</h1>
        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
      </div>
    </div>
  );
};

const Card = ({ bg, details, text }) => {
  const { avatar, name, role, date } = details;

  return (
    <Link className="font-medium text-darkGray space-y-4 relative">
      <img src={bg} className="rounded-2xl" alt={bg} />
      {/* avatar details */}
      <div className="flex-between text-sm">
        <div className="flex items-center gap-x-4">
          <img className="rounded-full w-16" src={avatar} alt={avatar} />
          <div className="flex flex-col items-center gap-y-2">
            <h1>{name}</h1>
            <small className="w-1/2 h-[1px] bg-black"></small>
          </div>
        </div>
        {/*  */}
        <div className="tracking-widest text-center space-y-2">
          <h1 className="p-2 rounded-lg bg-lime w-fit">{role}</h1>
          <h1>{date}</h1>
        </div>
      </div>
      {/* large text */}
      <h1 className="font-semibold text-4xl text-black">{text}</h1>
      <button className="lime-button !bottom-[90%] text-2xl">
        <GoPlus />
      </button>
    </Link>
  );
};
