import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './clientsCrousel.css';
import Card from '../pages/Home/CrouselCard/crouselCard.jsx';
import { Col } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
export const clientsCrousel = () =>
{
  const [ activeIndex, setActiveIndex ] = useState( 0 );

  const handleSlideChange = index =>
  {
    setActiveIndex( index );
  };

  const handlePrevClick = () =>
  {
    if ( activeIndex > 0 )
    {
      setActiveIndex( activeIndex - 1 );
    }
  };

  const handleNextClick = () =>
  {
    if ( activeIndex < 6 )
    {
      // Assuming 6 is the maximum index
      setActiveIndex( activeIndex + 1 );
    }
  };
  const isMobile = useMediaQuery( { maxWidth: 768 } ); // Adjust the width to your desired mobile breakpoint

  const centerPercentage = isMobile ? 80 : 33.33;
  return (
    <div>


      <Carousel
        showArrows={ false }
        showThumbs={ false }
        showStatus={ false }
        selectedItem={ activeIndex }
        onChange={ handleSlideChange }
        infiniteLoop={ false }
        showIndicators={ true }
        emulateTouch={ true }
        centerMode={ true }
        centerSlidePercentage={ centerPercentage }
      >
        <Col className='carousel-image'>
          <Card isActive={ activeIndex === 0 } />
        </Col>
        <Col className='carousel-image'>
          <Card isActive={ activeIndex === 1 } />
        </Col>
         <Col className='carousel-image'>
          <Card isActive={ activeIndex === 2 } />
        </Col>
        <Col className='carousel-image'>
          <Card isActive={ activeIndex === 3 } />
        </Col>
        <Col className='carousel-image'>
          <Card isActive={ activeIndex === 4 } />
        </Col>
        <Col className='carousel-image'>
          <Card isActive={ activeIndex === 5 } />
        </Col>
        <Col className='carousel-image'>
          <Card isActive={ activeIndex === 6 } />
        </Col>
      </Carousel>{ ' ' }
      <div
        className={ `custom-arrow custom-prev shadow ${ activeIndex === 0 ? 'disabled' : ''
          }` }
        onClick={ handlePrevClick }
      >
        <img src='./LeftArrow.svg' alt='leftButton' />
      </div>
      <div
        className={ `custom-arrow custom-next shadow ${ activeIndex === 6 ? 'disabled' : ''
          }` }
        onClick={ handleNextClick }
      >
        <img src='./RightArrow.svg' alt='RightButton' />
      </div>


    </div>
  );
};
export default clientsCrousel;