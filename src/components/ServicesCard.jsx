import React from 'react';
import { Card } from 'react-bootstrap';
import './Servicescard.css';
export const ServicesCard = ( { logoSrc, heading, paragraph } ) =>
{
  return (
    <div className='mt-5'>
      <div className='d-flex flex-column align-items-center my-5 OurService'>
        <img className='cardLogo' src={ logoSrc } alt='GraphicDesigning' />
        <Card className='service'>
          <h3
            style={ {
              fontSize: '18px',
              color: '#FFFFFF'
            } }
          >
            { heading }
          </h3>
          <p
            className='mb-4'
            style={ {
              textAlign: 'center',
              color: '#B6BCC9',
              fontSize: '13px',
            } }
          >
            { paragraph }
          </p>
        </Card>
      </div>

    </div>
  );
};
export default ServicesCard;