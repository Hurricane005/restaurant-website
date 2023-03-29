import React from "react";
import hero from "../assets/restaurantOverview.png";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div id="home" className="hidden w-full h-screen sm:block ">
      <div className="relative z-10 w-full h-screen opacity-130">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-x-0 flex flex-col items-center justify-center transform -translate-y-1/2 top-1/2 ">
          <h1 className="pb-8 text-5xl text-center">
            Entdecken Sie unsere innovative Küche in gemütlicher <br />
            Atmosphäre für ein unvergessliches Erlebnis.
          </h1>

          <button className="px-4 py-2 text-5xl text-white bg-transparent border-4 border-white hover:border-primary hover:bg-primary rounded-xl">
            <Link
              to="reservation"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="pb-2 hover:border-b-2 border-b-secondary"
              href="/"
            >
              Reservieren sie jetzt ihren Tisch!
            </Link>
          </button>
        </div>
        <img
          src={hero}
          alt="restaurant table"
          className="object-cover w-full h-screen "
        />
      </div>
    </div>
  );
};

export default Hero;
