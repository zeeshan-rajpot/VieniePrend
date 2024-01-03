import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import NavBar from "../../components/Navbar.jsx";
import AboutUs from "./Aboutus.jsx";
import Award from './Award.jsx';
import Client from "./Clients.jsx";
import Discover from './Discover.jsx';
import FurniturePortfolio from './FurniturePortfolio.jsx';
import HeroSection from './HeroSection.jsx';
import Project from "./Project.jsx";
// import Team from "../Team/index.js";
// import About from "../About/Contact.js";
import Footer from "../../components/Footer.jsx";
export const MainPage = () =>
{
  const location = useLocation();
  const [ sectionId, setSectionId ] = useState( null );

  useEffect( () =>
  {
    if ( location.state && location.state.sectionId )
    {
      setSectionId( location.state.sectionId );
    }
  }, [ location ] );

  useEffect( () =>
  {
    const scrollToSection = () =>
    {
      if ( sectionId )
      {
        const servicesSection = document.getElementById( sectionId );
        if ( servicesSection )
        {
          servicesSection.scrollIntoView( { behavior: "smooth" } );
        }
      }
    };

    // Delay the scroll action to ensure the element is ready
    const timeout = setTimeout( scrollToSection, 100 );

    return () => clearTimeout( timeout );
  }, [ sectionId ] );

  return (
    <div style={ { overflowX: 'hidden' } }>
      <NavBar />
      <HeroSection />

      <AboutUs />
      <Discover />
      <Award />
      <FurniturePortfolio />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <section id="services" >
        <Project />
      </section>
      <section id="client" >
        <Client />
      </section>
      <Footer />

    </div>
  );
};
export default MainPage;