import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Project.css';
import SofaCard from '../../components/SofaCouch.jsx';
import { Link, NavLink, useNavigate } from 'react-router-dom';

export const Project = () =>
{
  return (
    <>

      <div className='imageg '>
        <Container className='mt-5'
          style={ {
            // marginTop: '20%',
            justifyContent: 'center',
            textAlign: 'center',
          } }
        >

          <Row>
            <Col>
              <h5
                style={ {
                  paddingTop: '10%',
                  color: '#444444',
                  fontSize: '25px'
                } }
              >
                ALL PRODUCT'S
              </h5>
            </Col>
          </Row>
          <Row>
            <p className='m-auto'
              style={ {
                justifyContent: 'center',
                fontSize: '14px',
                color: '#585D5E',
                width: '70%'
              } }
            >
              Text to Fill provides a flexible platform ts or
              services so atform to sell your or services so that you can focus on
            </p>
          </Row>


          <Row >
            <Col lg={ 4 } xs={ 12 } md={ 4 } xl={ 4 }>
              <SofaCard
                title=' 1 Chapel Hill, UK'
                detail='Text to Fill provides a flexible platform to sell s so atform to sell your products or'
                imageSrc='./aichair.png'
                style={ {
                  marginTop: '40px',
                } }
              />

            </Col>
            <Col lg={ 4 } xs={ 12 } md={ 4 } xl={ 4 }>
              <SofaCard
                title=' 1 Chapel Hill, UK'
                detail='Text to Fill provides a flexible platform to sell s so atform to sell your products or'
                imageSrc='./aichair.png'
                backgroundColor='#D90202'
                style={ {
                  marginTop: '40px',
                } }
              />

            </Col>

            <Col lg={ 4 } xs={ 12 } md={ 4 } xl={ 4 }>
              <SofaCard
                title=' 1 Chapel Hill, UK'
                detail='Text to Fill provides a flexible platform to sell s so atform to sell your products or'
                imageSrc='./aichair.png'
                style={ {
                  marginTop: '40px',
                } }
              />

            </Col>
            <Col lg={ 4 } xs={ 12 } md={ 4 } xl={ 4 }>
              <SofaCard
                title=' 1 Chapel Hill, UK'
                detail='Text to Fill provides a flexible platform to sell s so atform to sell your products or'
                imageSrc='./aichair.png'
                backgroundColor='#D90202'
                style={ {
                  marginTop: '40px',
                } }
              />

            </Col>
            <Col lg={ 4 } xs={ 12 } md={ 4 } xl={ 4 }>
              <SofaCard
                title=' 1 Chapel Hill, UK'
                detail='Text to Fill provides a flexible platform to sell s so atform to sell your products or'
                imageSrc='./aichair.png'
                style={ {
                  marginTop: '40px',
                } }
              />

            </Col>
            <Col lg={ 4 } xs={ 12 } md={ 4 } xl={ 4 }>
              <SofaCard
                title=' 1 Chapel Hill, UK'
                detail='Text to Fill provides a flexible platform to sell s so atform to sell your products or'
                imageSrc='./aichair.png'
                backgroundColor='#D90202'
                style={ {
                  marginTop: '40px',
                } }
              />

            </Col>
          </Row>
          <Row>
            <Col className='mt-5 m-auto' xs={ 12 } lg={ 4 } xl={ 4 } md={ 4 }>
              <a
                href='/List'>
                <button className='rounded-5 p-2' style={ { color: '#C6CCD2', border: '1px solid #C6CCD2', backgroundColor: '#fff', width: '100%' } }>View all</button>
              </a>
            </Col>

          </Row>
        </Container>

      </div >
    </>
  );
};
export default Project;