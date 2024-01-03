import React from 'react';
import Footer from "../../components/Footer.jsx";
import NavBar from "../../components/Navbar.jsx";
import ProfileDetails from './components/ProfileDetails.jsx';
export const index = () =>
{
  return (
    <div>
      <NavBar />
      <ProfileDetails />

      <Footer />



    </div>
  );
};
export default index;