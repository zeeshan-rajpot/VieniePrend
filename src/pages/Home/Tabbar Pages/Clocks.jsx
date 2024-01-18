






import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import SofaCard from '../../../components/SofaCouch.jsx';
import { ClipLoader } from "react-spinners";
export const Clocks = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const apiUrl = 'https://vieniprent.azurewebsites.net/api/customer/post/all/get';
  const token = localStorage.getItem('token');
  useEffect(() => {
    const fetchApiData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(apiUrl, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });

        setData(response.data.posts);
        setLoading(false);
        console.log(response.data.posts)
      } catch (error) {
        console.error('Error fetching API data:', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchApiData();
  }, []);

  const filteredData = data.filter((item) => item.category === 'Clocks');
  return (
    <div>


      <Container>

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
            filteredData.map((item) => (
              <Col key={item.id} lg={4} xs={12} md={4} xl={4}>
                <SofaCard
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
          <Col className='mt-5 m-auto' xs={12} lg={4} xl={4} md={4}>
            <a
              href='/List'>
              <button className='rounded-5 p-2' style={{ color: '#C6CCD2', border: '1px solid #C6CCD2', backgroundColor: '#fff', width: '100%' }}>View all</button>
            </a>
          </Col>
        </Row>

      </Container>

    </div>
  );
};
export default Clocks;