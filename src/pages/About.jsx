import React from "react";
import restaurantImg from "../assets/restaurant1.png";
import team from "../assets/team.png";

const About = () => {
  return (
    <div
      id="about"
      className="w-full pt-32 lg:pt-28 lg:min-h-screen lg:flex lg:flex-col lg:justify-center lg:items-center bg-primary"
    >
      {/* container */}
      <div className="container flex flex-col px-4 mx-auto space-y-16 text-center lg:text-2xl lg:max-w-6xl lg:h-full lg:justify-center">
        <div className="grid lg:pb-16 lg:grid-cols-2">
          <div className="mx-auto lg:mx-0">
            <img src={restaurantImg} alt="" className="rounded-xl w-[350px]" />
          </div>
          <div className="pt-16 space-y-4 lg:pt-0 ">
            <h1 className="text-2xl text-center lg:text-5xl lg:text-right">
              Herzlich Willkommen
            </h1>
            <p className="lg:text-right">
              Herzlich willkommen in unserem neuen Restaurant, dem
              Genussparadies! Wir laden Sie ein, in einer warmen und gemütlichen
              Atmosphäre köstliche Speisen und Getränke zu genießen. Unsere
              sorgfältig ausgewählte Speisekarte vereint traditionelle und
              moderne Küche, um Ihren Gaumen zu verwöhnen. Unser freundliches
              und engagiertes Team freut sich darauf, Ihnen einen
              unvergesslichen Aufenthalt zu bereiten. Schauen Sie vorbei und
              erleben Sie selbst die Geschmacksexplosion in unserem
              kulinarischen Refugium!
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-2">
          <div className="space-y-4 ">
            <h1 className="text-2xl text-center lg:text-5xl lg:text-left">
              Über Uns
            </h1>
            <p className="lg:text-left">
              Wir sind eine Gruppe junger Freunde, die ihre Leidenschaft für
              gutes Essen und Gastfreundschaft teilen. Gemeinsam haben wir
              unseren Traum von einem eigenen Restaurant verwirklicht, um Ihnen
              eine unvergessliche kulinarische Erfahrung zu bieten. Unsere
              Stärke liegt in der Kombination aus Kreativität, Teamgeist und dem
              Streben nach Perfektion. Wir sind stolz darauf, unseren Gästen
              einzigartige und köstliche Gerichte in einer einladenden
              Atmosphäre präsentieren zu können. Besuchen Sie uns und werden Sie
              Teil unserer gastronomischen Familie!
            </p>
          </div>
          <div className="flex justify-end pt-16 mx-auto lg:pt-0 lg:mx-0">
            <img src={team} alt="" className="w-[350px] rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
