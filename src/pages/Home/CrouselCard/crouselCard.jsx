import React from 'react';
import Card from 'react-bootstrap/Card';
import { Rating } from '@mui/material';
import { Box } from '@mui/material';
import './crouselCard.css';
export const crouselCard = ( { isActive } ) =>
{
  const isCenter = isActive;
  return (
    <div>
      <>
        { ' ' }
        <div
          className={ `testimonial-card ${ isActive ? 'active' : '' } ${ isCenter ? 'center' : ''
            }` }
        >
          <Card className='rescard'
            style={ { maxWidth: '95%', border: 'transparent' } }
          >
            <Card.Body>
              <Box
                sx={ {
                  display: 'flex',
                  alignItems: 'center',
                  marginTop: '20px',
                  marginLeft: '10px',
                } }
              >
                <Rating
                  name='half-rating-read'
                  defaultValue={ 5 }
                  precision={ 5 }
                  readOnly
                />
              </Box>
              <Card.Text
                style={ {
                  textAlign: 'left',
                  marginLeft: '10px',
                  marginRight: '10px',
                  marginTop: '10px',
                  fontSize: '0.6rem',
                } }
              >
                A digital agency is a business you hire to outsource your digital
                marketing efforts, instead of handling in-house. They can provide
                your business with a variety of digital solutions to promote your
                product or service online and help you.
              </Card.Text>
              <div
                className='d-flex align-items-center'
                style={ {
                  marginTop: '20px',
                } }
              >
                <div
                  style={ {
                    width: '100px',
                    height: '100px',
                    marginLeft: '10px',
                    borderRadius: '50%',
                    background: `url('https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80') center/cover no-repeat`,
                  } }
                />
                <div
                  style={ {
                    marginLeft: '20px',
                    textAlign: 'left',
                  } }
                >
                  <h3
                    style={ {
                      fontSize: '1.2em',
                      color: '#391400',
                    } }
                  >
                    Alan Martí
                  </h3>
                  <h6
                    style={ {
                      color: '#391400',
                      fontSize: '0.8em',
                    } }
                  >
                    Meta Inc.
                  </h6>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </>
    </div>
  );
};
export default crouselCard;