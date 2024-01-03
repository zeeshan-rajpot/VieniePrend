import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useMediaQuery } from 'react-responsive';

export const Aboutus = () =>
{
  const isMobile = useMediaQuery({ maxWidth: 768 }); // Adjust the width to your desired mobile breakpoint

  const TopHeight = isMobile ? 80 : 33.33;
  return (
    <>
      <div
        className="AboutBgImage"
      >
        <Container>
          <Row className="mt-5 pt-5">
            <Col>
              <Card
                style={ {
                  border: "transparent",
                  TopHeight
                } }
              >
                <h6 style={ { color: "#FD9F00", fontSize: "14px" } }>
                  About Us
                </h6>
                <h4 style={ { color: "#444444", fontSize: "32px" } }>
                  Unlock the
                  <span
                    style={ {
                      color: "#FD9F00",
                    } }
                  >
                    Potential
                  </span>
                  of Your
                  <br />
                  Unused Treasures
                </h4>
                <p
                  className="mt-3 mb-4 text-muted"
                  style={ { fontSize: "14px", color: "#444444", } }
                >
                  Have closets full of items waiting to find a new home? Welcome to a platform that redefines sharing and reusing <span style={ { color: '#747E93' } }> VIENI E PREND </span>. We're your gateway to connecting your unused home items, whether it's wardrobes, beds, kitchen appliances, or more, with enthusiastic new owners who'll cherish them.

                </p>
                <div className="position-relative d-flex">
                  <div
                    className="shadow d-flex position-relative flex-column align-items-center justify-content-center"
                    style={ {
                      width: "calc(202px - 10px)",
                      height: "100px",
                      marginRight: "70px",
                      backgroundColor: "#fff",
                      zIndex: "10",
                    } }
                  >
                    <card>
                      <h5 style={ { color: "#444444" } }>Our Mission</h5>
                    </card>
                    <img
                      className="position-absolute"
                      src='./LogoMission.svg'
                      alt="MissionLogo"
                      style={ {
                        zIndex: "10",
                        width: "40%",
                        marginTop: "110px",
                        marginLeft: "0px",
                      } }
                    />
                  </div>
                  <div
                    className="shadow d-flex position-relative flex-column align-items-center justify-content-center"
                    style={ {
                      width: "calc(202px - 10px)",
                      height: "100px",
                      marginLeft: "-30px",
                      zIndex: "10",
                    } }
                  >
                    <card>
                      <h5 style={ { color: "#444444" } }>Team Support</h5>
                    </card>
                    <img
                      src='./TeamLogo.svg'
                      alt="TeamLogo"
                      className="position-absolute"
                      style={ {
                        marginTop: "110px",
                        width: "40%",
                        marginLeft: "0px",
                      } }
                    />
                  </div>
                </div>

                <button
                  className="LMAboutUs border-0"
                  type="#submit"
                  style={ {
                    marginTop: "80px",
                    zIndex: "10",
                    width: "35%",
                    height: "40px",
                    // border: 'transparent',
                    borderRadius: "22px",
                    color: "#fff",
                    backgroundColor: "#72B63C",
                  } }
                >
                  Learn More
                </button>
              </Card>
            </Col>
            <Col
              style={ {
                justifyContent: "center",
                marginBottom: "80px",
              } }
            >
              <img
                className="AboutsideImage"
                src='./Cardimage.jpg'
                alt="Two Persons in Image"
                style={ {
                  width: "100%",
                  paddingLeft: "20px",
                } }
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Aboutus;