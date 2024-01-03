import React from 'react';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import './SofaCouch.css';
export const SofaCouch = ( { title, imageSrc, detail, backgroundColor } ) =>
{
  return (
    <div >
      <Card
        className='shadow'
        style={ {
          width: '100%',
          height: '28rem',
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
          <Card.Img
            variant='top'
            style={ { width: '100%', objectFit: 'cover' } }
            src={ imageSrc }
          />
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

                <p className='my-0' style={ { color: '#000000', fontSize: '11px' } }>830 likes</p>
              </div>
              <p style={ { color: '#585D5E', fontSize: '10px', textAlign: 'left' } }>
                { detail }
              </p>
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
              <p className='my-0' style={ { color: '#B7BBC0', fontSize: '11px' } }>View all 171 comments</p>
            </Col>
            <div className='text-start'><p className='my-0' style={ { color: '#C6CCD2', fontSize: '8px' } }>4 days ago</p></div>
          </Row>
        </Card.Body>
      </Card>



    </div>
  );
};
export default SofaCouch;