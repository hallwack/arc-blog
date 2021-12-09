import React from "react";

interface Props {}

const Navbar = (props: Props) => {
  return (
    <div className="flex flex-row justify-between container-page items-center">
      <a
        href="./index.html"
        className="font-inter uppercase font-bold text-4xl text-light-primary"
      >
        ARC Blog
      </a>
      <nav>
        <ul className="flex flex-row space-x-10 items-center">
          <li className="font-inter text-lg font-semibold uppercase hover:text-light-grey transition duration-500 text-light-primary">
            <a href="./index.html">Home</a>
          </li>
          <li className="font-inter text-lg font-semibold uppercase hover:text-light-grey transition duration-500 text-light-primary">
            <a href="./men_clothes.html">Articles</a>
          </li>
          <li className="font-inter text-lg font-semibold uppercase hover:text-light-grey transition duration-500 text-light-primary">
            <a href="./women_clothes.html">Categories</a>
          </li>
          <li className="font-inter text-lg font-semibold uppercase hover:text-light-grey transition duration-500 text-light-primary">
            <a href="./about.html">About</a>
          </li>
          <li className="font-inter text-lg text-light-primary underline hover:no-underline">
            <a href="./login.html">Login</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
