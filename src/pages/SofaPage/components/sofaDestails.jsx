import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import './sofaDetails.css';
import Carousel from 'react-bootstrap/Carousel';
import { ClipLoader } from "react-spinners";
import Heart from "react-heart"
import { useMediaQuery } from 'react-responsive';

export const sofaDestails = ({ data, id }) => {
  console.log(data.likes)
  const [active, setActive] = useState(false);

  const [newComment, setNewComment] = useState('');
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const token = localStorage.getItem('token');
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
  // const [newgetcomment, setGetnewComment] = useState([]);
  const [loading, setLoading] = useState(false);

  const [userComment, setUserComment] = useState([]);

  const fetchPostComments = async () => {
    try {
      setLoading(true);

      if (!id) {
        // If id is not available, do nothing and wait
        return;
      }

      const response = await axios.get(
        `https://vieniprent.azurewebsites.net/api/customer/post/comment/get/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Handle the response
      console.log('Post Comments:', response.data.comments);
      setUserComment(response?.data?.comments);
      // You can further process the response here
    } catch (error) {
      console.error('Error fetching post comments:', error);
      // Handle errors here
    } finally {
      // Set loading to false when the fetch is complete (whether successful or not)
      setLoading(false);
    }
  };

  useEffect(() => {
    // Fetch post comments when the component is mounted
    fetchPostComments();
  }, [id, token]);

  const handleAddComment = async () => {
    try {
      const response = await axios.post(
        'https://vieniprent.azurewebsites.net/api/customer/post/comment/add',
        {
          text: newComment,
          user: '659ed01f5ff9467536eb7c5b', // replace with the actual user ID
          post: data?._id,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Fetch post comments again after adding a new comment
      fetchPostComments();

      console.log(response.data);
      // Optionally, you can update the UI or perform other actions after adding a comment.
    } catch (error) {
      alert('Login to add the comment');
      console.error(error);
      // Handle error, show error message, or perform other actions on error.
    }
  };


  const handleLikePost = async () => {
    const token = localStorage.getItem('token');
    console.log(token);

    try {
      // Make an API call to like the post by ID
      const response = await axios.put(
        `https://vieniprent.azurewebsites.net/api/customer/post/like/${data?._id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );


      // Check if the status is OK before updating the like status
      if (response.status === 200) {
        setActive(true);
      } else {
        console.error('Failed to like post:', response.data);
      }
    } catch (error) {
      console.error('Error liking post:', error.response.data);
      if (error.response.status === 401) {
        alert('Login to like the comment');
      } else {
        console.error('Failed to like post:', error.response.data);
      }
    }
  };


  // const isLiked = data.likes.some((like) => like._id === userId);

  return (
    <div>


      <Container className='m-auto' style={{ width: '80%' }}>

        <Row className='mt-5'>
          <Col lg={10} xl={10} xs={12}>
            <div className='d-flex'>
              <div className="circle-container">
                <img src='/SofaDetails/Person.jpg' alt="Circle" className="circle-image" />
              </div>
              <div className='d-flex flex-column ms-4'>
                <p className='my-0 ' style={{ color: '#000000', fontSize: '18px', fontWeight: '500' }}>{data?.user?.name}</p>
                <p className='my-0 ' style={{ color: '#000000', fontSize: '13px' }}> {data?.location}</p>
              </div>
            </div>
          </Col>
          <Col lg={2} xl={2} xs={12}>
            <button
              className='w-100 p-2 rounded-5 border-0 mt-3 mt-md-0'
              style={{ backgroundColor: '#FD9F00', color: '#fff' }}>
              View Profile
            </button>
          </Col>
        </Row>
        <Row className='mt-5'>
          <Col lg={12} xl={12} xs={12}>
            <div className='m-auto bgImageDetails shadow'
              // style={{ backgroundImage: 'url("/public/SofaDetails/old-chair.png")' }}
              style={{ backgroundImage: data?.images && data.images.length > 0 ? `url("${data.images[0]}")` : 'none' }}
            >

              <div className='text-center mx-auto rounded-5 ' style={detailStyle}>
                <p className='text-center pt-3 my-0' style={{ color: '#FFFDFA', fontSize: '22px' }}>{data?.name}</p>
                <p className='my-0 px-4 pb-2' style={{ color: '#FFFDFA', fontSize: '14px' }}>   {data?.description} </p>
              </div>
            </div>
          </Col>
        </Row>
        {/* 
        <Carousel activeIndex={index} onSelect={handleSelect}>
        {data?.images?.map((image, idx) => (
  <Carousel.Item key={idx} style={{ height: '600px' }}>
    <img src={image} alt={`Slide ${idx + 1}`} />
    <Carousel.Caption>
      <h3 className="text-dark">{data.name}</h3>

      <p className="text-dark">{data.description}</p>
    </Carousel.Caption>
  </Carousel.Item>
))}
</Carousel> */}

        <Row className='mt-5  mx-auto d-flex justify-content-between align-items-center' style={ShadowWidth}>
          <Col lg={9}>
            <div className='d-block d-md-flex  justify-content-start align-items-center py-5'>

              <div style={{ width: '2rem' }}>
                <Heart isActive={active} onClick={handleLikePost} />

              </div>
              <span className='my-0 fs-5 ms-3' style={{ color: '#000000' }}>{data?.likes?.length} likes</span>
              <div className='d-flex justify-content-center align-items-center ms-0 ms-md-5 mt-4 mt-md-0'>
                <img src="/SofaDetails/message-round-svgrepo-com.svg" alt="" />
                <p className='my-0 fs-5 ms-3' style={{ color: '#000000' }}>{data?.comments?.length} Comments</p>
              </div>

            </div>

          </Col>
          <Col lg={3}>

            <button className='w-100 border-0 shadow p-2 bg-transparent ' style={{ borderRadius: '25px 0 0 25px' }}><div className='rounded-5 ' style={{ backgroundColor: '#4CC171', width: '30px', height: '27px', marginRight: '100px', boxShadow: ' 0 3px 6px rgba(0, 0, 0, 0.3)' }}></div></button>
          </Col>
        </Row>
        <div className='mb-5 shadow mx-auto ' style={ShadowWidth}>
          <div className='d-flex justify-content-between align-items-center p-4'>
            <div className='' style={{ width: '70%' }}>

              <p className='my-0' style={{ color: '#585D5E', fontSize: '10px' }}>
                {data?.description}
              </p>
            </div>
            <div>
              <p style={{ color: '#C6CCD2', fontSize: '13px' }}>4 days ago</p>
            </div>
          </div>
          <div ><button className='w-25 p-2 border-0  ms-3' style={{ backgroundColor: '#FD9F00', color: '#fff', borderRadius: '0  33px 33px 0' }}>Interested </button></div>


          <div className='p-2 ms-2'>
            <p className='my-0' style={{ color: '#C6CCD2', fontSize: '13px' }}>
              24 People shows interest
            </p>
          </div>

          <div className='p-2 ms-2 d-flex' style={{ position: 'relative' }}>
            {imageSources.map((src, index) => (
              <div
                key={index}
                style={{
                  width: '28px',
                  height: '28px',
                  backgroundPosition: 'center',
                  objectFit: 'cover',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  position: 'relative',
                  zIndex: 4 - index,
                  marginLeft: index === 0 ? '0px' : '-8px',
                }}
              >
                <img src={src} alt="" style={{ width: '100%', height: '100%' }} />
              </div>
            ))}
          </div>



          <div className='p-2 ms-2'>
            <p className='my-0' style={{ color: '#C6CCD2', fontSize: '13px' }}>
              {data?.comments?.length} Comments
            </p>
          </div>

          {loading ? (
            <div className='d-flex justify-content-center align-item-center m-5' style={{ height: '200px' }}>
              <ClipLoader color={'#ffcc35'} loading={loading} size={100} />
            </div>
          ) : (
            <div>
              {data?.comments?.length > 0 ? (
                userComment.map((user, index) => (
                  <div key={index} className='shadow p-3 mx-3 rounded-5 mt-5'>
                    <div className='p-2 ms-2 mt-2 d-flex align-items-center '>
                      <div
                        style={{
                          width: '28px',
                          height: '28px',
                          backgroundPosition: 'center',
                          objectFit: 'cover',
                          borderRadius: '50%',
                          overflow: 'hidden',
                        }}
                      >
                        <img src='' alt='' style={{ width: '100%', height: '100%' }} />
                      </div>
                      <div className='ms-3'>
                        <p className='my-0' style={{ color: '#585D5E', fontSize: '14px' }}>
                          {user?.user?.name}
                        </p>
                      </div>
                    </div>
                    <p className='my-0 ms-3' style={{ color: '#585D5E', fontSize: '14px' }}>
                      {user?.text}
                    </p>
                  </div>
                ))
              ) : (
                <div className='shadow p-3 mx-3 rounded-5 mt-5'>
                  <div className='p-2 ms-2 mt-2 d-flex align-items-center '>
                    <p>No comments yet.</p>
                  </div>
                </div>
              )}
            </div>
          )}




          <div>
            <div className='p-2 ms-2 mt-2 d-flex align-items-center '>
              <textarea
                className='shadow p-3 mx-3 rounded-4 mt-5 w-100'
                col='20'
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
            </div>

            <div className='my-5 text-center'>
              <button
                className='p-2 bg-transparent px-3 rounded-5'
                style={{ border: '1px solid #000', color: '#000' }}
                onClick={handleAddComment}
              >
                Add Comment
              </button>
            </div>
          </div>

          <div className='my-5 text-center'>
            <button className='p-2 bg-transparent px-5 rounded-5 ' style={{ border: '1px solid #C6CCD2', color: '#C6CCD2' }}>View all</button>
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