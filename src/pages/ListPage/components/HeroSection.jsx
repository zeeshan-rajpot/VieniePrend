import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './HeroSection.css';
import { Row, Col } from 'react-bootstrap';
import SofaCard from '../components/SofaCouch.jsx';
import { NavLink, useNavigate } from 'react-router-dom';
import { ClipLoader } from "react-spinners";

export const HeroSection = () => {
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
        setLoading(false);
        setData(response.data.posts);
        console.log(response.data.posts)
      } catch (error) {
        console.error('Error fetching API data:', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchApiData();
  }, []);
  return (
    <>
      <div style={{ overflowX: 'hidden' }}>
        <div className='heroSectionImage'>
          <div className='m-auto' style={{ paddingTop: '200px', width: '90%' }}>

            <h1 style={{ color: '#FFF' }}>New upload</h1>
            <p style={{ color: '#FFF', width: '40%' }}>Lorem ipsum dolor sit amet,Stet clita kasd loremet clita
              kasd lrem ipsum dolor sit amet. sed diam  eirmod
              tempor dolore.</p>
          </div>
        </div >

        <div className='mt-5 text-center'>

          <h2 style={{ color: '#000000' }}>New Upload</h2>
          <p className='m-auto' style={{ width: '40%', color: '#585D5E' }}>Text to Fill provides a flexible platform to sell your products or
            services so atform to sell your products or services so that you can focus on </p>

        </div >
        <Row className='mt-5 m-auto mb-5' style={{ width: '90%' }}>
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
    <Col key={item.id} lg={3} xs={12} md={3} xl={3}>
      <SofaCard
      idproduct={item._id}
        Name={item.user.name}
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
      </div>
    </>
  );
};
export default HeroSection;