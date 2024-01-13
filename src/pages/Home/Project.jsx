import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import './Project.css';
import SofaCard from '../../components/SofaCouch.jsx';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ClipLoader } from "react-spinners";

export const Project = () =>{
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const apiUrl = 'https://vieniprent.azurewebsites.net/api/customer/post/all/get';
  const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YTEwZDM0NDZkMjhmNzkzYWNjNDAxNCIsImlhdCI6MTcwNTA1MzUyMX0.C7aOrv_wFnjJaTNVBMsPgF9HVEPhtHYm6hc9lMJrFk0';

  useEffect(() => {
    const fetchApiData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(apiUrl, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`,
          },
        });

        setData(response.data.posts);
        setLoading(false);
        console.log(response.data.posts)
      } catch (error) {
        console.error('Error fetching API data:', error.message);
      }finally {
        setLoading(false);
      }
    };

    fetchApiData();
  }, []);

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

          {loading ? (
  <div className='d-flex justify-content-center align-item-center m-5' >
    <ClipLoader
      color={"#ffcc35"}
      loading={loading}
      size={100}
    />
  </div>
) : (
          data.map((item) => (
            <Col key={item.id} lg={4} xs={12} md={4} xl={4}>
              <SofaCard
              idproduct={item._id}
                title={item.name}
                detail={item.description}
                imageSrc={item.images[0]}
                likes={item.likes.length}
                comments={item.comments.length}
                createdAt={item.createdAt}
                style={{
                  marginTop: '40px',
                }}
              />
            </Col>
            ))
            )}
            
          </Row>
          <Row>
            <Col className='mt-5 m-auto' xs={ 12 } lg={ 4 } xl={ 4 } md={ 4 }>
              <Link
                to='/List'>
                <button className='rounded-5 p-2' style={ { color: '#C6CCD2', border: '1px solid #C6CCD2', backgroundColor: '#fff', width: '100%' } }>View all</button>
              </Link>
            </Col>

          </Row>
        </Container>

      </div >
    </>
  );
};
export default Project;