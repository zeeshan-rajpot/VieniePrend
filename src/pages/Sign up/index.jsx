import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import axios from 'axios';
import { Link } from "react-router-dom";

const SignUp = () => {
    const [formData, setFromData] = useState({
        email: "",
        password: "",
        adress: "",

        City: "",
        state: "",
        name: ""
    });

    const handleInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setFromData((prev) => {
            return { ...prev, [name]: value };
        });
        console.log(`Value of ${name}: ${value}`);
    };

    const inputFields = [
        {
            type: 'text',
            id: 'name',
            iconSrc: '/person.svg',
            value: formData.name,
            onChange: handleInput,
            placeholder: 'name',
        },
        {
            type: 'text',
            id: 'email',
            iconSrc: '/person.svg',
            value: formData.email,
            onChange: handleInput,
            placeholder: 'Email',
        },
        {

            id: 'password',
            iconSrc: '/person.svg',
            value: formData.password,
            onChange: handleInput,
            placeholder: 'password',
            type: 'password'
        },
        {
            type: 'text',
            id: 'adress',
            iconSrc: '/email.svg',
            value: formData.adress,
            onChange: handleInput,
            placeholder: 'Street Address',
        },

        {
            type: 'text',
            id: 'City',
            iconSrc: '/Group 17234.svg',
            value: formData.City,
            onChange: handleInput,
            placeholder: 'city',
        },
        {
            type: 'text',
            id: 'state',
            iconSrc: '/Group 17234.svg',
            value: formData.state,
            onChange: handleInput,
            placeholder: 'state',
        },
    ];

    const newdata = {

        name: formData.name,
        email: formData.email,
        password: formData.password,
        location: {
            streetAddress: formData.adress,
            city: formData.City,
            state: formData.state
        }

    }


    const handleSignUp = async () => {
        try {
            // Make an API call to your server's signup endpoint
            const response = await axios.post('https://vieniprent.azurewebsites.net/api/auth/register', newdata);
  
            // Handle the response accordingly (e.g., redirect to login page)
            console.log('Signup successful:', response.data.message);
            alert(response.data.message);
           // Redirect to login page after successful signup
        } catch (error) {
            console.error('Signup failed:', error.response.data.message);
           
            alert(error.response.data.message);
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
                            style={{ height: '75vh' }}
                        >
                            <img
                                className="login-img"
                                src="/loop-cars-concept-collage 1.svg"
                                alt="My Image"
                                style={{ objectFit: 'contain', height: 'auto' }}

                            />
                        </Col>
                        <Col
                            md={6}
                            className=" d-flex justify-content-center align-items-center flex-column bg-light  rounded-end-5  shadow mobr0 mob100"
                            style={{ height: '75vh' }}
                        >

                            <h2 className="  text-center fw-bold " width="80%">
                                Sign Up
                            </h2>




                            {inputFields.map((field) => (
                                <div key={field.id} className="mt-3 input-container rounded-5 shadow bg-light">
                                    <img src={field.iconSrc} alt="icon" />
                                    <input
                                        type={field.type}
                                        name={field.id}
                                        value={field.value}
                                        onChange={field.onChange}
                                        placeholder={field.placeholder}
                                        className="bg-light"
                                    />
                                </div>
                            ))}








                            {/* for mobile screen lasr 2 input values  */}







                            <div className="text-end mt-2" style={{ width: "80%" }}>
                                {/* <p className="text-secondary me-4">Forget Password</p> */}
                            </div>

                            <button className="Signin-btn mt-3 " onClick={handleSignUp}>  Sign Up  </button>


                            <p className=" mt-3">
                                Already have an account?{" "}
                                <Link to="/Login" className=" text-decoration-none ">
                                    {" "}
                                    <span className="pgreen">
                                        {" "}
                                        <b> Sign In</b>
                                    </span>{" "}
                                </Link>{" "}
                            </p>

                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default SignUp