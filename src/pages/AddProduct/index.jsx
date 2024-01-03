import React from 'react';
import Footer from "../../components/Footer.jsx";
import NavBar from "../../components/Navbar.jsx";
import MainPage from './Components/MainPage.jsx';
export const index = () =>
{
  return (
    <div>

      <NavBar />

      <MainPage />

      <Footer />

    </div>
  );
};
export default index;