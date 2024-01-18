import { Cross as Hamburger } from 'hamburger-react';
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link, NavLink, useNavigate } from 'react-router-dom';
// import Logo from '../../public/NavbarLogo.svg';
import './Navbar.css';

const Navbar = () =>{
  const [showNavbar, setShowNavbar] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const navigate = useNavigate();

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const handleNavLinkClick = (link) => {
    setActiveLink(link);
  };

  const iconwidth = {
    objectFit: 'cover',
    height: '23px',
    borderRadius: '50%',
    overflow: 'hidden',
  };

  const token = localStorage.getItem('token');
  return (
    <nav className='mainnavbar'>
      <div className='navContainer'>
        <Link to='/'>
          <div className='logo'>
            <img 
            // src={ Logo }
             style={ { width: '80%', height: '80%' } } />
          </div>
        </Link>
        <div className='menu-icon' onClick={ handleShowNavbar }>
          <Hamburger direction='left' size={ 32 } color='#FD9F00' duration={ 0.1 } />
        </div>
        <div className={ `nav-elements ${ showNavbar && 'active' }` }>
          <ul className='d-flex justify-content-center align-items-center '>
            <li>
              <NavLink
                to='/home'
                activeClassName='active'
                onClick={ () => handleNavLinkClick( 'home' ) }
                style={ { color: activeLink === 'home' ? '#FD9F00' : '#444444' } }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/List'
                // to='List'
                activeClassName='active'
                onClick={ () => handleNavLinkClick( 'List' ) }
                style={ {
                  color: activeLink === 'List' ? '#FD9F00' : '#444444',
                } }
              >
                List Items
              </NavLink>
            </li>
            {/* <li>
              <NavLink
                to='/project'
                activeClassName='active'
                onClick={ () => handleNavLinkClick( 'Categories ' ) }
                style={ {
                  color: activeLink === 'Categories ' ? '#FD9F00' : '#444444',
                } }
              >
                Categories
              </NavLink>
            </li>

            <li>
              <NavLink
                to='/About'
                activeClassName='active'
                onClick={ () => handleNavLinkClick( 'services' ) }
                style={ {
                  color: activeLink === 'services' ? '#FD9F00' : '#444444',
                } }
              >
                About Us
              </NavLink>
            </li> */}
            {token ? (
              <>
                <li>
                  <NavLink to='/AddPro'>
                    <button className='border-0 p-1 rounded-5 mx-1 w-100' style={{ backgroundColor: '#FD9F00', color: '#fff' }}>
                      Add Product
                    </button>
                  </NavLink>
                </li>
                <li>
                  <div className='shadow rounded-5 p-2'>
                    <img src='/Search.svg' alt='' style={iconwidth} />
                  </div>
                </li>
                <li>
                  <NavLink to='/ProfileDetails'>
                    <div style={{ width: '35px', height: '35px', borderRadius: '50%', overflow: 'hidden' }}>
                      <img src='/User Profile Image.jpg' style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt='' />
                    </div>
                  </NavLink>
                </li>
              </>
            ) : (
              <li>
                <NavLink to='/login'>
                  <button className='border-0 p-1 rounded-5 mx-1 w-100' style={{ backgroundColor: '#FD9F00', color: '#fff' }}>
                    Login
                  </button>
                </NavLink>
              </li>
            )}
       
          </ul>
        </div>
      </div>
    </nav >
  );
};

export default Navbar;
