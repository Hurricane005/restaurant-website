import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiOutlineXMark } from "react-icons/hi2";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed z-50 w-full h-24 bg-primary">
      {/* container */}
      <div className="flex items-center justify-between w-full h-full px-8 ">
        {/* left side */}
        <div>
          <h1 className="text-3xl font-bold ">.FOODSPACE</h1>
        </div>

        {/* right side */}
        <div className="hidden space-x-4 text-xl lg:flex ">
          <ul className="space-x-4 text-xl lg:flex">
            <li>
              <Link
                to="home"
                spy={true}
                smooth={true}
                duration={500}
                className="pb-2 hover:border-b-2 border-b-secondary"
                href="/"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                className="pb-2 hover:border-b-2 border-b-secondary"
                href="/"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="menu"
                spy={true}
                smooth={true}
                duration={500}
                className="pb-2 hover:border-b-2 border-b-secondary"
                href="/"
              >
                Menu
              </Link>
            </li>

            <li>
              <Link
                to="menu"
                spy={true}
                smooth={true}
                duration={500}
                className="pb-2 hover:border-b-2 border-b-secondary"
                href="/"
              >
                Gallery
              </Link>
            </li>

            <li>
              <Link
                to="reservation"
                spy={true}
                smooth={true}
                duration={500}
                className="pb-2 hover:border-b-2 border-b-secondary"
                href="/"
              >
                Reservation
              </Link>
            </li>
          </ul>
        </div>
        {/* hamburger icon */}
        <div className="z-20 lg:hidden text-secondary">
          {nav ? (
            <HiOutlineXMark onClick={handleClick} size={30} />
          ) : (
            <GiHamburgerMenu onClick={handleClick} size={24} />
          )}
        </div>
        {/* mobile menu */}

        <div
          className={
            nav
              ? " pb-24 mt-24 translate-x-[0%] transition duration-300 ease-in absolute top-0 right-0 flex flex-col items-center justify-center w-screen h-screen  bg-primary"
              : " pb-24 mt-24 -translate-x-[100%] transition duration-300 ease-in absolute top-0 right-0 flex flex-col items-center justify-center w-screen h-screen  bg-primary"
          }
        >
          <ul className="flex flex-col items-center justify-center space-y-8 text-2xl">
            <li>
              <Link
                onClick={handleClick}
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="pb-2 hover:border-b-2 border-b-secondary"
                href="/"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                onClick={handleClick}
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="pb-2 hover:border-b-2 border-b-secondary"
                href="/"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                onClick={handleClick}
                to="menu"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="pb-2 hover:border-b-2 border-b-secondary"
                href="/"
              >
                Menu
              </Link>
            </li>

            <li>
              <Link
                onClick={handleClick}
                to="menu"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="pb-2 hover:border-b-2 border-b-secondary"
                href="/"
              >
                Gallery
              </Link>
            </li>

            <li>
              <Link
                onClick={handleClick}
                to="reservation"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="pb-2 hover:border-b-2 border-b-secondary"
                href="/"
              >
                Reservation
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
