import React from "react";
import AgricultureHero from "./components/AgricultureHero";
import IrisPolymersAbout from "./components/IrisPolymersAbout";
import ElegantWhyChooseUs from "./components/ElegantWhyChooseUs";
import ClientLogosSection from "./components/ClientLogosSection ";
import ClientTestimonialsSection from "./components/ClientTestimonialsSection ";

const page = () => {
  return (
    <>
      <AgricultureHero />
      <IrisPolymersAbout />
      <ElegantWhyChooseUs />
      <ClientLogosSection />
      <ClientTestimonialsSection />
    </>
  );
};

export default page;
