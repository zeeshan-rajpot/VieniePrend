import React from 'react';
import './HeroSection.css';
import { Row, Col } from 'react-bootstrap';
import SofaCard from '../components/SofaCouch.jsx';
import { NavLink, useNavigate } from 'react-router-dom';
export const HeroSection = () =>
{
  return (
    <>
      <div style={ { overflowX: 'hidden' } }>
        <div className='heroSectionImage'>
          <div className='m-auto' style={ { paddingTop: '200px', width: '90%' } }>

            <h1 style={ { color: '#FFF' } }>New upload</h1>
            <p style={ { color: '#FFF', width: '40%' } }>Lorem ipsum dolor sit amet,Stet clita kasd loremet clita
              kasd lrem ipsum dolor sit amet. sed diam  eirmod
              tempor dolore.</p>
          </div>
        </div >

        <div className='mt-5 text-center'>

          <h2 style={ { color: '#000000' } }>New Upload</h2>
          <p className='m-auto' style={ { width: '40%', color: '#585D5E' } }>Text to Fill provides a flexible platform to sell your products or
            services so atform to sell your products or services so that you can focus on </p>

        </div >
        <Row className='mt-5 m-auto mb-5' style={ { width: '90%' } }>
          <Col lg={ 3 } xs={ 12 } md={ 3 } xl={ 3 }>
            <SofaCard
              Name='Harry'
              desc='1 Chapel Hill, UK'
              detail='Text to Fill provides a flexible platform to sell s so atform to sell your products or'
              imageSrc='./aichair.png'
              style={ {
                marginTop: '40px',
              } }
            />

          </Col>

          <Col lg={ 3 } xs={ 12 } md={ 3 } xl={ 3 }   >
            <NavLink
              to='/SofaPage'
              style={ { textDecoration: 'none' } }
            >

              <SofaCard
                title=' 1 Chapel Hill, UK'
                Name='Harry'
                desc='1 Chapel Hill, UK'
                detail='Text to Fill provides a flexible platform to sell s so atform to sell your products or'
                imageSrc='./SecondPage/sitting-old-chair-surrounded-by-nature-generated-by-ai.png'
                backgroundColor='#D90202'
                style={ {
                  marginTop: '40px',
                } }
              />
            </NavLink>
          </Col>

          <Col lg={ 3 } xs={ 12 } md={ 3 } xl={ 3 }>
            <SofaCard
              Name='Harry'
              desc='1 Chapel Hill, UK'
              detail='Text to Fill provides a flexible platform to sell s so atform to sell your products or'
              imageSrc='./aichair.png'
              style={ {
                marginTop: '40px',
              } }
            />

          </Col>
          <Col lg={ 3 } xs={ 12 } md={ 3 } xl={ 3 }>
            <SofaCard
              Name='Harry'
              desc='1 Chapel Hill, UK'
              detail='Text to Fill provides a flexible platform to sell s so atform to sell your products or'
              imageSrc='./aichair.png'
              style={ {
                marginTop: '40px',
              } }
            />

          </Col>
          <Col lg={ 3 } xs={ 12 } md={ 3 } xl={ 3 }>
            <SofaCard
              Name='Harry'
              desc='1 Chapel Hill, UK'
              detail='Text to Fill provides a flexible platform to sell s so atform to sell your products or'
              imageSrc='./aichair.png'
              style={ {
                marginTop: '40px',
              } }
            />

          </Col>

          <Col lg={ 3 } xs={ 12 } md={ 3 } xl={ 3 }   >
            <NavLink
              to='/SofaPage'
              style={ { textDecoration: 'none' } }
            >

              <SofaCard
                title=' 1 Chapel Hill, UK'
                Name='Harry'
                desc='1 Chapel Hill, UK'
                detail='Text to Fill provides a flexible platform to sell s so atform to sell your products or'
                imageSrc='./SecondPage/sitting-old-chair-surrounded-by-nature-generated-by-ai.png'
                backgroundColor='#D90202'
                style={ {
                  marginTop: '40px',
                } }
              />
            </NavLink>
          </Col>

          <Col lg={ 3 } xs={ 12 } md={ 3 } xl={ 3 }>
            <SofaCard
              Name='Harry'
              desc='1 Chapel Hill, UK'
              detail='Text to Fill provides a flexible platform to sell s so atform to sell your products or'
              imageSrc='./aichair.png'
              style={ {
                marginTop: '40px',
              } }
            />

          </Col>
          <Col lg={ 3 } xs={ 12 } md={ 3 } xl={ 3 }>
            <SofaCard
              Name='Harry'
              desc='1 Chapel Hill, UK'
              detail='Text to Fill provides a flexible platform to sell s so atform to sell your products or'
              imageSrc='./aichair.png'
              style={ {
                marginTop: '40px',
              } }
            />

          </Col>
          <Col lg={ 3 } xs={ 12 } md={ 3 } xl={ 3 }>
            <SofaCard
              Name='Harry'
              desc='1 Chapel Hill, UK'
              detail='Text to Fill provides a flexible platform to sell s so atform to sell your products or'
              imageSrc='./aichair.png'
              style={ {
                marginTop: '40px',
              } }
            />

          </Col>

          <Col lg={ 3 } xs={ 12 } md={ 3 } xl={ 3 }   >
            <NavLink
              to='/SofaPage'
              style={ { textDecoration: 'none' } }
            >

              <SofaCard
                title=' 1 Chapel Hill, UK'
                Name='Harry'
                desc='1 Chapel Hill, UK'
                detail='Text to Fill provides a flexible platform to sell s so atform to sell your products or'
                imageSrc='./SecondPage/sitting-old-chair-surrounded-by-nature-generated-by-ai.png'
                backgroundColor='#D90202'
                style={ {
                  marginTop: '40px',
                } }
              />
            </NavLink>
          </Col>

          <Col lg={ 3 } xs={ 12 } md={ 3 } xl={ 3 }>
            <SofaCard
              Name='Harry'
              desc='1 Chapel Hill, UK'
              detail='Text to Fill provides a flexible platform to sell s so atform to sell your products or'
              imageSrc='./aichair.png'
              style={ {
                marginTop: '40px',
              } }
            />

          </Col>
          <Col lg={ 3 } xs={ 12 } md={ 3 } xl={ 3 }>
            <SofaCard
              Name='Harry'
              desc='1 Chapel Hill, UK'
              detail='Text to Fill provides a flexible platform to sell s so atform to sell your products or'
              imageSrc='./aichair.png'
              style={ {
                marginTop: '40px',
              } }
            />

          </Col>
          <Col lg={ 3 } xs={ 12 } md={ 3 } xl={ 3 }>
            <SofaCard
              Name='Harry'
              desc='1 Chapel Hill, UK'
              detail='Text to Fill provides a flexible platform to sell s so atform to sell your products or'
              imageSrc='./aichair.png'
              style={ {
                marginTop: '40px',
              } }
            />

          </Col>

          <Col lg={ 3 } xs={ 12 } md={ 3 } xl={ 3 }   >
            <NavLink
              to='/SofaPage'
              style={ { textDecoration: 'none' } }
            >

              <SofaCard
                title=' 1 Chapel Hill, UK'
                Name='Harry'
                desc='1 Chapel Hill, UK'
                detail='Text to Fill provides a flexible platform to sell s so atform to sell your products or'
                imageSrc='./SecondPage/sitting-old-chair-surrounded-by-nature-generated-by-ai.png'
                backgroundColor='#D90202'
                style={ {
                  marginTop: '40px',
                } }
              />
            </NavLink>
          </Col>

          <Col lg={ 3 } xs={ 12 } md={ 3 } xl={ 3 }>
            <SofaCard
              Name='Harry'
              desc='1 Chapel Hill, UK'
              detail='Text to Fill provides a flexible platform to sell s so atform to sell your products or'
              imageSrc='./aichair.png'
              style={ {
                marginTop: '40px',
              } }
            />

          </Col>
          <Col lg={ 3 } xs={ 12 } md={ 3 } xl={ 3 }>
            <SofaCard
              Name='Harry'
              desc='1 Chapel Hill, UK'
              detail='Text to Fill provides a flexible platform to sell s so atform to sell your products or'
              imageSrc='./aichair.png'
              style={ {
                marginTop: '40px',
              } }
            />

          </Col>

        </Row>
      </div>
    </>
  );
};
export default HeroSection;