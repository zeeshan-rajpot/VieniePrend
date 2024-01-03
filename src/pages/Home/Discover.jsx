import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Card from '../../components/ServicesCard.jsx';
import './Dicover.css';
export const Discover = () =>
{
  return (
    <div>

      <div className='backgroundimage'>
        <Row className='text-center' style={ { paddingTop: '120px' } }>
          <div className='d-flex flex-column align-items-center '>
            <p className='my-0' style={ { color: '#72B63C', fontSize: '12px' } }>Discover</p>
            <p className='my-0' style={ { color: '#72B63C', fontSize: '18px' } }> What We Offer</p>
            <p style={ { color: '#fff', fontSize: '30px' } }> Experience the VIENI E PREND Advantage</p>
          </div>
        </Row>
        <Row className='m-auto' style={ { width: '80%' } }>
          <Col lg={ 3 }>
            <Card logoSrc='./Effortless Listing.svg'
              heading='Effortless Listing'
              paragraph='Easily showcase your unused home items with simple photo uploads and descriptions.' />
          </Col>
          <Col lg={ 3 }>
            <Card logoSrc='./Clutter-Free.svg'
              heading='Clutter-Free Spaces'
              paragraph='Declutter your home and make space for new memories while giving your items a second life elsewhere.' />
          </Col>
          <Col lg={ 3 }>
            <Card logoSrc='./Gifting.svg'
              heading='Gifting Made Simple'
              paragraph='Transform clutter into meaningful gifts by sharing your items with appreciative new owners.' />
          </Col>
          <Col lg={ 3 }>
            <Card logoSrc='./Gifting.svg'
              heading='Community Engagement'
              paragraph='Become part of a like-minded community passionate about sharing and reducing waste.' />
          </Col>
        </Row>
      </div>
    </div >
  );
};
export default Discover;