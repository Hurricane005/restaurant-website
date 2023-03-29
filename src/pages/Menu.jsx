import React from "react";
import meal1 from "../assets/meal1.jpg";
import meal2 from "../assets/meal2.jpg";
import meal3 from "../assets/meal3.jpg";
import meal4 from "../assets/meal4.jpg";
import meal5 from "../assets/meal5.jpg";
import meal6 from "../assets/meal6.jpg";
import meal7 from "../assets/meal7.jpg";
import meal8 from "../assets/meal8.jpg";

const Menu = () => {
  return (
    <div
      id="menu"
      className="w-full pt-16 sm:h-screen sm:flex sm:flex-col sm:justify-center sm:items-center bg-primary"
    >
      <div className="pb-16 space-y-4 text-center">
        <h2 className="text-2xl sm:text-5xl">Unsere Speisen</h2>
        <h3 className="text-xl sm:text-3xl">
          Lade dir unsere Speisekarte direkt herunter:
          <p className="inline-block pb-2 ml-4 cursor-pointer hover:border-b hover:font-semibold">
            Speisekarte
          </p>
        </h3>
        <p>Hier ein kleine Gallerie unserer Speisen</p>
      </div>
      {/* grid container */}
      <div className="grid grid-cols-1 gap-4 px-4 pb-8 sm:grid-cols-2 xl:grid-cols-4 sm:max-w-6xl sm:items-center sm:mx-auto sm:justify-center">
        <div className="h-48 sm:hover:scale-125">
          <img className="object-cover w-full h-full" src={meal1} alt="" />
        </div>
        <div className="h-48 sm:hover:scale-125 ">
          <img className="object-cover w-full h-full" src={meal2} alt="" />
        </div>
        <div className="h-48 sm:hover:scale-125 ">
          <img className="object-cover w-full h-full" src={meal3} alt="" />
        </div>
        <div className="h-48 sm:hover:scale-125 ">
          <img className="object-cover w-full h-full" src={meal4} alt="" />
        </div>
        <div className="h-48 sm:hover:scale-125 ">
          <img className="object-cover w-full h-full" src={meal5} alt="" />
        </div>
        <div className="h-48 sm:hover:scale-125 ">
          <img className="object-cover w-full h-full" src={meal6} alt="" />
        </div>
        <div className="h-48 sm:hover:scale-125 ">
          <img className="object-cover w-full h-full" src={meal7} alt="" />
        </div>
        <div className="h-48 sm:hover:scale-125 ">
          <img className="object-cover w-full h-full" src={meal8} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Menu;
