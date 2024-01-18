import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from './pages/Home/MainPage';
import Homepage from './pages/Home/MainPage';
import ListPage from './pages/ListPage/index.jsx';
import SofaPage from './pages/SofaPage/index.jsx';
import AddPro from './pages/AddProduct/index.jsx';
import ProfileDetails from './pages/ProfilePage/index.jsx';
import Login from "./pages/Login/index.jsx";
import SignUp from "./pages/Sign up/index.jsx";
import Aboutus from "./pages/Home/Aboutus.jsx";
function App ()
{


  return (
    <>
      <BrowserRouter>
        {/* <Home /> */ }
        {/* <MainPage /> */ }
        {/* <ScrollToTop /> */ }
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/home" element={ <Homepage /> } />
          <Route path="/List" element={ <ListPage /> } />
          <Route path="/SofaPage/:id" element={ <SofaPage /> } />
          <Route path="/AddPro" element={ <AddPro /> } />
          <Route path="/Login" element={ <Login /> } />
          <Route path="/SignUp" element={ <SignUp /> } />
          <Route path="/About" element={ <Aboutus /> } />
          <Route path="/ProfileDetails" element={ <ProfileDetails /> } />
          {/*  <Route path="/Services" element={ <Services /> } />
          <Route path="/Project" element={ <Project /> } />
          <Route path="/PORTFOLIO" element={ <PORTFOLIO /> } />
          {/* <Route path="/Team" element={<Team />} />
        <Route path="/Client" element={<Client />} />
         
          <Route path="/ContactUs" element={ <ContactUs /> } /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
