import React, { useState, useEffect } from "react";
import axios from 'axios';
import './ProfilePage.css';
import { Container, Row, Col } from 'react-bootstrap';
import ProfileCard from '../components/ProfileCard.jsx';
import { ClipLoader } from "react-spinners";
import { useMediaQuery } from 'react-responsive';

export const ProfileDetails = () => {

  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    // Fetch user profile data when the component mounts
    const fetchProfileData = async () => {
      try {
        // Get the token from your localStorage or wherever it is stored
        const token = localStorage.getItem('token');

        // Make a GET request with the token in the headers
        const response = await axios.get(
          'https://vieniprent.azurewebsites.net/api/auth/myprofile/get',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // Handle the response
        console.log('Profile Data:', response.data);
        setProfileData(response.data);
        // You can further process the response here
      } catch (error) {
        console.error('Error fetching profile data:', error);
        // Handle errors here
      }
    };

    // Call the fetchProfileData function
    fetchProfileData();
  }, []);
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

  const isMobile = useMediaQuery({ maxWidth: 768 });
  const ProfileWidth = {
    width: isMobile ? '100%' : '80%',
  };


  return (
    <div>
      <div className='ProfilebackgroundImage'>
      </div>

      <Container className='m-auto' style={ProfileWidth}>

        {/* <div style={ { width: '30%' } }>
            <div style={ { width: '150px', height: '150px', backgroundPosition: 'center', objectFit: 'cover', borderRadius: '46px', transform: 'translateX(-15px) ' } } >
              <img src="./ProfilePage/bave-pictures-MFWmhm1-izo-unsplash.png" alt="" style={ { width: '100%', height: '100%', borderRadius: '46px' } } />
            </div>
          </div> */}
        <div className=' w-100 d-flex justify-content-center align-items-center  shadow profilepersonimage '>
          <div className='m-auto' style={{ width: '20%', transform: ' translateY(0px)' }}>
            <div style={{ width: '30%' }}>
              <div style={{ width: '150px', height: '150px', backgroundPosition: 'center', objectFit: 'cover', borderRadius: '50%', transform: 'translateX(-15px) ' }} >
                <img src="./ProfilePage/bave-pictures-MFWmhm1-izo-unsplash.png" alt="" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
              </div>
            </div>
          </div>
          <div className='m-auto d-flex ' style={{ width: '80%' }}>

            <div className='d-flex justify-content-between align-items-center' style={{ width: '100%' }}>
              <div className='d-flex justify-content-between align-items-center '>
                <div className='d-flex flex-column justify-content-start align-items-start'>
                  <p className='my-0 name' style={{ color: '#585D5E', fontSize: '22px' }}>{profileData?.user?.name}</p>
                  <p className='my-0 name' style={{ color: '#585D5E', fontSize: '14px' }}> {profileData?.user?.location?.streetAddress}   {profileData?.user?.location?.city}   {profileData?.user?.location?.state}</p>
                </div>
              </div>
              <div style={{ paddingRight: '0px !important' }}>
                <button className='border-0 text-white shadow p-1 mt-4 w-100 ' style={{ borderRadius: '25px 0 0 25px', backgroundColor: '#FD9F00' }}>
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>


        <Row className='mt-5'>
        <p style={{ color: '#14100C', fontSize: '20px' }}>Uploaded Products</p>
        {loading ? (
            <div className='d-flex justify-content-center align-item-center m-5' >
              <ClipLoader
                color={"#ffcc35"}
                loading={loading}
                size={100}
              />
            </div>
          ) : (
          Array.isArray(data) ? (
            data.map((post) => (
              <Col lg={4} xl={4} md={4} key={post._id}>
                <ProfileCard
                  idproduct={post._id}
                  title={post.name}
                  detail={post.description}
                  imageSrc={post.images[0]}
                  likes={post.likes.length}
                  // comments={post.comments.length}
                  createdAt={post.createdAt}
                  backgroundColor='#E22A2A'
                />
              </Col>
            ))
          ) : (
            <p>No posts available.</p>
          )
        )}
      </Row>
      </Container>
    </div>
  );
};

export default ProfileDetails;
