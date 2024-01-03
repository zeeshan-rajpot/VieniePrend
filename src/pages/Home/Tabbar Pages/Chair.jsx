import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SofaCard from '../../../components/SofaCouch.jsx';
export const Chair = () =>
{
  return (
    <div>


      <Container>

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

    </div>
  );
};
export default Chair;