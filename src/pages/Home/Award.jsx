import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Award.css';
export const Award = () =>
{
  return (
    <div>
      <Container
        className="shadow my-5"
        style={ {
          marginTop: '150px',
          justifyContent: 'center',
          alignItem: 'center',
        } }
      >
        <Row
          className='backDot d-flex justify-content-center align-items-center flex-wrap '
          style={ {
            padding: '3%',
          } }
        >
          <Col xs={ 12 } lg={ 6 }
            style={ {
              maxWidth: '100%',
            } }
          >
            <h6
              style={ {
                color: '#72B63C',
                fontSize: "16px"
              } }
            >
              Our Awards
            </h6>
            <h4
              className='Ourh4'
              style={ {
                fontSize: '25px',
                color: '#444444',
              } }
            >
              Our Achievements
            </h4>
            <p
              className='pCount '
              style={ {
                color: ' #747E93',
                fontSize: '14px',
                width: '65%'
              } }
            >
              Lorem ipsum dolor sit amet, elit, do risus commodo viverra
              facilisis.
            </p>
          </Col>
          <Col xs={ 4 } lg={ 2 } className='CountCol'>
            <span className='h3Count'>10 Y</span>
            <p className='h5countTitle'>Experience</p>
          </Col>
          <Col xs={ 4 } lg={ 2 } className='CountCol'>
            <span className='h3Count'>200 +</span>
            <p className='h5countTitle'>Happy Clients</p>
          </Col>
          <Col xs={ 4 } lg={ 2 } className='CountCol'>
            <span className='h3Count'>300 +</span>
            <p className='h5countTitle'>Projects Done</p>
          </Col>

        </Row>
      </Container>




    </div>
  );
};
export default Award;