import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './ProfileCard.css';
export const ProfileCard = ( { backgroundColor } ) =>
{
  return (
    <div>


      <div className='backgroundProfile mt-3'>
        <div className='text-end '>

          <button className='border-0 shadow p-1 mt-4 bg-white  ' style={ { borderRadius: '25px 0 0 25px', width: '52.36px', height: '23.14px' } }>
            <div className='rounded-5 ' style={ {
              backgroundColor: backgroundColor || '#72b63c',

              width: '14.61px', height: '14.61px', boxShadow: ' 0 3px 6px rgba(0, 0, 0, 0.3)'
            } }>
            </div>
          </button>
        </div>
      </div>


      <Row className='mt-4'>
        <Col lg={ 8 } xl={ 8 } xs={ 12 } md={ 8 }>
          <div className='d-flex justify-content-start align-items-start'>

            <div style={ { width: '38.96px', height: '38.96px', backgroundPosition: 'center', objectFit: 'cover', borderRadius: '50%' } }>
              <img src="./ProfilePage/bave-pictures-MFWmhm1-izo-unsplash.png" alt="" style={ { width: '100%', height: '100%', borderRadius: '50%' } } />
            </div>
            <div className='d-flex flex-column align-items-start justify-content-start ms-4'>
              <p className='my-0' style={ { color: '#000000', fontSize: '18px', fontWeight: '600' } }>Francesco</p>
              <p className='my-0' style={ { color: '#000000', fontSize: '12px' } }> 1 Chapel Hill, UK</p>
            </div>
          </div>

        </Col>
        <Col lg={ 4 } xl={ 4 } xs={ 12 } md={ 4 }>

          <div className='d-flex justify-content-between align-items-center'>
            <img src="/public/ProfilePage/like-svgrepo-com.svg" alt="" />
            <img src="/public/ProfilePage/message-round-svgrepo-com.svg" alt="" />
          </div>


        </Col>
      </Row>

      <div className='text-start'>
        <p className='my-0' style={ { color: '#000000', fontSize: '12px' } }>830 likes</p>
      </div>
      <div className='text-start'>
        <p className='my-0' style={ { color: '#585D5E', fontSize: '12px' } }>Text to Fill provides a flexible platform to sell s so atform to sell your products or</p>
      </div>
      <div className='my-0' className='text-start'>
        <p style={ { color: '#C6CCD2', fontSize: '10px' } }>4 days ago</p>
      </div>





    </div>
  );
};
export default ProfileCard;