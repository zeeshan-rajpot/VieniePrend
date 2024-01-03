import React from 'react';
import Footer from "../../components/Footer.jsx";
import NavBar from "../../components/Navbar.jsx";
import HeroSection from '../ListPage/components/HeroSection.jsx';
export const index = () =>
{
  return (
    <div>

      <NavBar />
      <HeroSection />

      <Footer />
    </div>
  );
};
export default index;