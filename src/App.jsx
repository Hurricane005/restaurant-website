import React from "react";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Footer from "./pages/Footer";
import Hero from "./pages/Hero";
import Menu from "./pages/Menu";
import Reservation from "./pages/Reservation";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Reservation />
      <Footer />
    </div>
  );
};

export default App;
