import React from "react";
import { Row, Col } from "react-bootstrap";
import "./HeroSection.css";
import { useMediaQuery } from 'react-responsive';

const HeroSection = () =>
{
  const isMobile = useMediaQuery( { maxWidth: 768 } ); // Adjust the width to your desired mobile breakpoint

  const ParaPercentage = isMobile ? 100 : 80;
  return (
    <>
      <div
        className="background"

      >
        <Row className="d-flex mt-4" >
          <Col
            lg={ 5 }
            className="Detail text-left ps-4 ps-lg-5 "
            style={ { marginTop: '130px' } }
          >
            <h6 className="heroh6 ">Gift Your Goods </h6>
            <h3 className="heroh3">
              Unlocking<span style={ { color: '#FD9F00' } }> Value One</span> Pre-Loved
            </h3>
            <p style={ { fontSize: '12px', color: '#747E93', ParaPercentage } }>
              Welcome to <span style={ { color: '#FD9F00' } }>  VIENI E PREND</span> , where unused items find new purpose! Simplify decluttering by gifting your wardrobes, beds, kitchen appliances, and more to eager new owners. Connect effortlessly, reduce waste, and join a community dedicated to sharing and sustainability. Start your journey of generosity today
            </p>
            <button className="scroll-button mb-4 shadow">
              Get Started
              <img className="arrow-1" src='./firstarrow.svg' alt="Arrow 1" />
              <img className="arrow-2" src='./secondArrow.svg' alt="Arrow 2" />
              <img className="arrow-3" src='./thirdarrow.svg' alt="Arrow 3" />
            </button>
          </Col>
          <Col className="heroImage" lg={ 7 }>
            <img className="heroImage" src='./Herosideimg.png' alt="heroImage" style={ { width: '100%' } } />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default HeroSection;



