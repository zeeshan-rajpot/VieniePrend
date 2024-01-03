import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Furniture.css';
import MainTab from './MainTab.jsx';
import { useMediaQuery } from 'react-responsive';

export const FurniturePortfolio = () =>
{
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const paraStyle = {

    justifyContent: 'center',
    fontSize: '14px',
    color: '#747E93',
    width: isMobile ? '100%' : '60%',
  };



  return (
    <div>
      <div className='image'>
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
                  color: '#72B63C',
                  fontSize: '16px'
                } }
              >
                Portfolio
              </h5>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4 style={ { color: '#444444', fontSize: '32px' } }>Explore Latest Projects</h4>
            </Col>
          </Row>
          <Col>
            <Row>
              <p className='m-auto'
                style={
                  paraStyle

                }
              >
                Software development outsourcing is just a tool to achieve
                business goals. But there is no way to get worthwhile results
                without cooperation and trust between a client company.
              </p>
            </Row>
          </Col>
          <MainTab
            style={ {
              marginBottom: '30px !important',
              justifyContent: 'center',
            } }
          />
        </Container>
      </div>
    </div>
  );
};
export default FurniturePortfolio;