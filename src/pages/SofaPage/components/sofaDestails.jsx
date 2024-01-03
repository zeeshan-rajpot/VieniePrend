import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './sofaDetails.css';
import { useMediaQuery } from 'react-responsive';

export const sofaDestails = () =>
{
  const isMobile = useMediaQuery( { maxWidth: 768 } );

  const detailStyle = {
    width: isMobile ? '100%' : '80%',
    marginTop: '420px',
    background: ' rgba(255,255,255,0.1)',
    backdropFilter: 'blur(5px)',

  };
  const ShadowWidth = {
    width: isMobile ? '100%' : '80%',
  };
  const imageSources = [
    "https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // ... add other image URLs here
  ];
  const userInformation = [
    {
      name: ' Jerry ',
      image:
        'https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      text:
        'Text to Fill provides a flexible platform to sell your products or Text to Fill provides a flexible platform to sell your products or Text to Fill provides a flexible platform to sell your products or Text to Fill provides a flexible platform to sell your products or Text to Fill provides a',
    },
    {
      name: '  Mariya',
      image:
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      text:
        'Text to Fill provides a flexible platform to sell your products or Text to Fill provides a flexible platform to sell your products or Text to Fill',
    },
    {
      name: '  Mariya',
      image:
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      text:
        'Text to Fill provides a flexible platform to sell your products or Text to Fill provides a flexible platform to sell your products or Text to Fill',
    },
    {
      name: '  Mariya',
      image:
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      text:
        'Text to Fill provides a flexible platform to sell your products or Text to Fill provides a flexible platform to sell your products or Text to Fill',
    },
  ];
  return (
    <div>


      <Container className='m-auto' style={ { width: '80%' } }>

        <Row className='mt-5'>
          <Col lg={ 10 } xl={ 10 } xs={ 12 }>
            <div className='d-flex'>
              <div className="circle-container">
                <img src='./SofaDetails/Person.jpg' alt="Circle" className="circle-image" />
              </div>
              <div className='d-flex flex-column ms-4'>
                <p className='my-0 ' style={ { color: '#000000', fontSize: '18px', fontWeight: '500' } }>Francesco</p>
                <p className='my-0 ' style={ { color: '#000000', fontSize: '13px' } }> 1 Chapel Hill, UK</p>
              </div>
            </div>
          </Col>
          <Col lg={ 2 } xl={ 2 } xs={ 12 }>
            <button
              className='w-100 p-2 rounded-5 border-0 mt-3 mt-md-0'
              style={ { backgroundColor: '#FD9F00', color: '#fff' } }>
              View Profile
            </button>
          </Col>
        </Row>
        <Row className='mt-5'>
          <Col lg={ 12 } xl={ 12 } xs={ 12 }>
            <div className='m-auto bgImageDetails shadow'>

              <div className='text-center mx-auto rounded-5 ' style={

                detailStyle
              }>
                <p className='text-center pt-3 my-0' style={ { color: '#FFFDFA', fontSize: '22px' } }>Cloud Chair with Seater</p>
                <p className='my-0 px-4 pb-2' style={ { color: '#FFFDFA', fontSize: '14px' } }>Text to Fill provides a flexible platform to sell your products or
                  services so atform to sell your products or services so that you can focus on </p>
              </div>
            </div>
          </Col>
        </Row>

        <Row className='mt-5  mx-auto d-flex justify-content-between align-items-center' style={ ShadowWidth }>
          <Col lg={ 9 }>
            <div className='d-block d-md-flex  justify-content-start align-items-center py-5'>
              <div className='d-flex justify-content-center align-items-center'>
                <img src="./SofaDetails/like-svgrepo-com.svg" alt="" />
                <p className='my-0 fs-5 ms-3' style={ { color: '#000000' } }>830 likes</p>
              </div>
              <div className='d-flex justify-content-center align-items-center ms-0 ms-md-5 mt-4 mt-md-0'>
                <img src="./SofaDetails/message-round-svgrepo-com.svg" alt="" />
                <p className='my-0 fs-5 ms-3' style={ { color: '#000000' } }>100 Comments</p>
              </div>

            </div>

          </Col>
          <Col lg={ 3 }>

            <button className='w-100 border-0 shadow p-2 bg-transparent ' style={ { borderRadius: '25px 0 0 25px' } }><div className='rounded-5 ' style={ { backgroundColor: '#4CC171', width: '30px', height: '27px', marginRight: '100px', boxShadow: ' 0 3px 6px rgba(0, 0, 0, 0.3)' } }></div></button>
          </Col>
        </Row>
        <div className='mb-5 shadow mx-auto ' style={ ShadowWidth }>
          <div className='d-flex justify-content-between align-items-center p-4'>
            <div className='' style={ { width: '70%' } }>

              <p className='my-0' style={ { color: '#585D5E', fontSize: '10px' } }>Text to Fill provides a flexible platform to sell s so atform to sell your products or Text to Fill provides a flexible platform to sell s so atform to sell your products or Text to Fill  provides a flexible platform to sell s so atform to sell your products or Text to Fill provides a flexible platform to sell s so atform to sell your products or Text to Fill provides a
              </p>
            </div>
            <div>
              <p style={ { color: '#C6CCD2', fontSize: '13px' } }>4 days ago</p>
            </div>
          </div>
          <div ><button className='w-25 p-2 border-0  ms-3' style={ { backgroundColor: '#FD9F00', color: '#fff', borderRadius: '0  33px 33px 0' } }>Interested </button></div>

          <div className='p-2 ms-2'>
            <p className='my-0' style={ { color: '#C6CCD2', fontSize: '13px' } }>
              24 People shows interest
            </p>
          </div>

          <div className='p-2 ms-2 d-flex' style={ { position: 'relative' } }>
            { imageSources.map( ( src, index ) => (
              <div
                key={ index }
                style={ {
                  width: '28px',
                  height: '28px',
                  backgroundPosition: 'center',
                  objectFit: 'cover',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  position: 'relative',
                  zIndex: 4 - index,
                  marginLeft: index === 0 ? '0px' : '-8px',
                } }
              >
                <img src={ src } alt="" style={ { width: '100%', height: '100%' } } />
              </div>
            ) ) }
          </div>

          <div className='p-2 ms-2'>
            <p className='my-0' style={ { color: '#C6CCD2', fontSize: '13px' } }>
              100 Comments
            </p>
          </div>



          <div>
            { userInformation.map( ( user, index ) => (
              <div key={ index } className='shadow p-3 mx-3 rounded-5 mt-5'>
                <div className='p-2 ms-2 mt-2 d-flex align-items-center '>
                  <div
                    style={ {
                      width: '28px',
                      height: '28px',
                      backgroundPosition: 'center',
                      objectFit: 'cover',
                      borderRadius: '50%',
                      overflow: 'hidden',
                    } }
                  >
                    <img src={ user.image } alt='' style={ { width: '100%', height: '100%' } } />
                  </div>
                  <div className='ms-3'>
                    <p className='my-0' style={ { color: '#585D5E', fontSize: '14px' } }>
                      { user.name }
                    </p>
                  </div>
                </div>
                <p className='my-0 ms-3' style={ { color: '#585D5E', fontSize: '14px' } }>
                  { user.text }
                </p>
              </div>
            ) ) }
          </div>

          <div className='my-5 text-center'>
            <button className='p-2 bg-transparent w-25 rounded-5 ' style={ { border: '1px solid #C6CCD2', color: '#C6CCD2' } }>View all</button>
          </div>
          <br />
          <br />
          <br />
        </div>

      </Container>

    </div>
  );
};
export default sofaDestails;