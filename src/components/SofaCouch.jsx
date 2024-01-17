import React from 'react';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import './SofaCouch.css';
import { Link } from 'react-router-dom';

const TruncatedParagraph = ({ text, maxLength }) => {
  const truncatedText = text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;

  return (
    <p style={{ color: '#585D5E', fontSize: '10px', textAlign: 'left' }}>
      {truncatedText}
    </p>
  );
};

export const SofaCouch = ( { title, imageSrc, detail, backgroundColor ,likes ,comments ,createdAt ,idproduct ,maxLength } ) =>{


  const formattedDate = new Date(createdAt).toLocaleString();

  return (
    <div >
      <Card
        className='shadow'
        style={ {
          width: '100%',
          // height: '24rem',
          borderRadius: '22px',
          marginTop: '70px',
        } }
      >
        <div
          style={ {
            maxHeight: '400px',
            overflow: 'hidden',
            borderRadius: '22px 22px 0px 0px',
          } }
        >
          <Link to={`/SofaPage/${idproduct}`}>
          <Card.Img
            variant='top'
            style={ { width: '100%', objectFit: 'cover', height:'200px' } }
            src={ imageSrc }
          />
          </Link>
        </div>
        <Card.Body>
          <Row className='d-flex justify-content-between align-items-center'>
            <Col lg={ 7 }>
              <div className='d-flex justify-content-start align-items-center'>

                <img src="./PostPerson.png" alt="" className='me-2' />

                <h5
                  style={ {
                    color: '#444444',
                    textAlign: 'left',
                    fontSize: '0.8em',
                  } }
                >
                  { title }
                </h5>
              </div>

            </Col>
            <Col lg={ 5 }>
              <img src="./Hearticon.svg" alt="" />
              <img src="./chaticon.svg" alt="" />
            </Col>
          </Row>
          <Row className='d-flex justify-content-between align-items-center'>
            <Col lg={ 6 } xs={ 6 }>
              <div className='text-start'>

                <p className='my-0' style={ { color: '#000000', fontSize: '11px' } }>{likes} likes</p>
              </div>
              

              <TruncatedParagraph text={detail} maxLength={30} />
            </Col>
            <Col lg={ 6 } xs={ 6 }>
              <button className='Seebtnport'
                style={ { backgroundColor: backgroundColor || '#72b63c' } }
              >
                Book
                <img className='a-1' src='./First.svg' alt='Arrow 1' />
                <img className='a-2' src='./Second.svg' alt='Arrow 2' />
                <img className='a-3' src='./third.svg' alt='Arrow 3' />
              </button>
            </Col>
          </Row>
          <Row>
            <Col className='text-start'>
              <p className='my-0' style={ { color: '#B7BBC0', fontSize: '11px' } }>View all {comments} comments</p>
            </Col>
            <div className='text-start'><p className='my-0' style={ { color: '#C6CCD2', fontSize: '8px' } }>{formattedDate} </p></div>
          </Row>
        </Card.Body>
      </Card>



    </div>
  );
};
export default SofaCouch;