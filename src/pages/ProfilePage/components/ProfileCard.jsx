import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './ProfileCard.css';
import { Link } from 'react-router-dom';
const TruncatedParagraph = ({ text, maxLength }) => {
  const truncatedText = text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;

  return (
    <p style={{ color: '#585D5E', fontSize: '12px' }}>
      {truncatedText}
    </p>
  );
};
const Name = ({ text, maxLength }) => {
  const name = text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;

  return (
    <p className='my-0' style={{ color: '#000000', fontSize: '18px', fontWeight: '600' }}>
      {name}
    </p>
  );
};
export const ProfileCard = ({ backgroundColor, title, detail, imageSrc, likes, createdAt, idproduct }) => {

  const cardStyle = {
    backgroundImage: `url(${imageSrc})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '386px',
    width: 'auto',
    overflow: 'hidden',
  };
  const formattedDate = new Date(createdAt).toLocaleString();
  return (
    <div>

      <Link to={`/SofaPage/${idproduct}`}>
        <div className='profileCard mt-3' style={{ backgroundColor, ...cardStyle }}>
          <div className='text-end '>

            <button className='border-0 shadow p-1 mt-4 bg-white  ' style={{ borderRadius: '25px 0 0 25px', width: '52.36px', height: '23.14px' }}>
              <div className='rounded-5 ' style={{
                backgroundColor: backgroundColor || '#72b63c',

                width: '14.61px', height: '14.61px', boxShadow: ' 0 3px 6px rgba(0, 0, 0, 0.3)'
              }}>
              </div>
            </button>
          </div>
        </div>

      </Link>
      <Row className='mt-4'>
        <Col lg={8} xl={8} xs={12} md={8}>
          <div className='d-flex justify-content-start align-items-start'>

            <div style={{ width: '38.96px', height: '38.96px', backgroundPosition: 'center', objectFit: 'cover', borderRadius: '50%' }}>
              <img src={imageSrc} alt="" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
            </div>
            <div className='d-flex flex-column align-items-start justify-content-start ms-4'>

              <Name className='my-0' text={title} maxLength={9} />
              <p className='my-0' style={{ color: '#000000', fontSize: '12px' }}> 1 Chapel Hill, UK</p>
            </div>
          </div>

        </Col>
        <Col lg={4} xl={4} xs={12} md={4}>

          <div className='d-flex justify-content-between align-items-center'>
            <img src="/public/ProfilePage/like-svgrepo-com.svg" alt="" />
            <img src="/public/ProfilePage/message-round-svgrepo-com.svg" alt="" />
          </div>


        </Col>
      </Row>

      <div className='text-start'>
        <p className='my-0' style={{ color: '#000000', fontSize: '12px' }}>{likes} likes</p>
      </div>
      <div className='text-start'>
        {/* <p >{detail}</p> */}
        <TruncatedParagraph className='my-0' text={detail} maxLength={30} />
      </div>
      <div className='my-0 text-start' >
        <p style={{ color: '#C6CCD2', fontSize: '10px' }}>{formattedDate} </p>
      </div>





    </div>
  );
};
export default ProfileCard;