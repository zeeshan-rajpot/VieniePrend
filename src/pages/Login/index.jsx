import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import axios from 'axios';
import "./login.css";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFromData] = useState({
        email: "",
        password: "",
      });
    
      const handleInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
    
        setFromData((prev) => {
          return { ...prev, [name]: value };
        });
      };
    
      const handleLogin = async () => {
        try {
          // Make an API call to your server's signup endpoint
          const response = await axios.post('https://vieniprent.azurewebsites.net/api/auth/login', formData);
    
          // Handle the response accordingly (e.g., redirect to login page)
        
          localStorage.setItem('userId', response.data.id);
          console.log('log successful:', response.data);
          localStorage.setItem('token', response.data.token);
          navigate('/');
    
        } catch (error) {
          console.error('login failed:', error.response.data.message);
          // Handle signup failure (show error message, etc.)
          alert(error.response.data.message)
        }
      };
  return (
    <>
      <div
        className="loginbackground vh-100"
        style={{
          // backgroundImage: `url(/public/Rectangle%8.svg)`,
          height: "100vh", // Make sure the container takes the full height of the viewport
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container className=" ">
          <Row className=" rounded-5 ">
            <Col
              md={6}
              className="d-none  d-md-flex align-item-center justify-content-center loginbackground rounded-start-5  shadow"
              style={{height:'80vh'}}
            >
              <img
                className="login-img"
                src="/loop-cars-concept-collage 1.svg"
                alt="My Image"
                style={{ objectFit: 'contain' , height:'auto'}}

              />
            </Col>
            <Col
              md={6}
              className=" d-flex justify-content-center align-items-center flex-column bg-light  rounded-end-5  shadow mobr0 mob100"
              style={{height:'80vh'}}
            >
              {/* logo */}
              <img src="/ion_car-sport-outline.svg" alt="" />
              {/* heading */}
              <h1 className="  text-center fw-bold " width="80%">
              VEINI E PREND
              </h1>
              <h3
                className=" mt-2 mb-4 text-center "
                style={{ color: "var(--primary-color)" }}
              >
                Sign In
              </h3>
              <div className="input-container rounded-5  shadow bg-light ">
                {/* <FaUser className='icon' /> */}
                <img src="/Group 17234.svg" />
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleInput}
                  placeholder="Email "
                  className="bg-light"
                />
              </div>
              <div className="input-container rounded-5  shadow bg-light ">
                {/* <FaUser className='icon' /> */}
                <img src="/Group 17234.svg" />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInput}
                  placeholder="password"
                  className="bg-light"
                />
              </div>
              <div className="text-end mt-2" style={{ width: "80%" }}>
                {/* <p className="text-secondary me-4">Forget Password</p> */}
              </div>
          
                <button className="Signin-btn mt-3 " onClick={handleLogin}>  Sign In  </button>
           

              <p className=" mt-3">
                I don't have an account?{" "}
                <Link to="/SignUp" className=" text-decoration-none ">
                  {" "}
                  <span className="pgreen">
                    {" "}
                    <b> Sign up</b>
                  </span>{" "}
                </Link>{" "}
              </p>
             
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Login;