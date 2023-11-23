import React from "react";
import Hero from "../Hero.tsx";
import Header from "../Header.tsx";
import Footer from "../Footer.tsx";
import Specials from "../Specials.tsx";
import CustomerSays from "../CustomersSay.tsx";
import About from "../About.tsx";
function HomePage() {
  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        <Specials />
        <CustomerSays />
        <About />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
