import React from 'react';
import './Tabbar.css';
import { Row, Col } from 'react-bootstrap';
export const Tabbar = ( { activeTab, onTabClick } ) =>
{
  return (
    <div>

      <Row className="m-auto backbg-tab mt-5 mt-md-4">
        <Col xs={ 6 } xl={ 2 }
          style={ {
            paddingTop: "10px",
            paddingBottom: "10px",
          } }
        >
          <button
            className={
              activeTab === "SofaCouch" ? "bgactiveTab-btn shadow" : "bgTab-btn"
            }
            onClick={ () => onTabClick( "SofaCouch" ) }
          >
            Sofa & Couch
          </button>
        </Col>
        <Col xs={ 6 } xl={ 2 }
          style={ {
            paddingTop: "10px",
            paddingBottom: "10px",
          } }
        >
          <button
            className={
              activeTab === "Chair" ? "bgactiveTab-btn shadow" : "bgTab-btn"
            }
            onClick={ () => onTabClick( "Chair" ) }
          >
            Chair
          </button>
        </Col>
        <Col xs={ 4 } xl={ 2 }
          style={ {
            paddingTop: "10px",
            paddingBottom: "10px",
          } }
        >
          <button
            className={
              activeTab === "Clocks"
                ? "bgactiveTab-btn shadow"
                : "bgTab-btn"
            }
            onClick={ () => onTabClick( "Clocks" ) }
          >
            Clocks
          </button>
        </Col>
        <Col xs={ 4 } xl={ 2 }
          style={ {
            paddingTop: "10px",
            paddingBottom: "10px",
          } }
        >
          <button
            className={
              activeTab === "Table"
                ? "bgactiveTab-btn shadow"
                : "bgTab-btn"
            }
            onClick={ () => onTabClick( "Table" ) }
          >
            Table
          </button>
        </Col>
        <Col xs={ 4 } xl={ 2 }
          style={ {
            paddingTop: "10px",
            paddingBottom: "10px",
          } }
        >
          <button
            className={
              activeTab === "Bed"
                ? "bgactiveTab-btn shadow"
                : "bgTab-btn"
            }
            onClick={ () => onTabClick( "Bed" ) }
          >
            Bed
          </button>
        </Col>
        <Col xs={ 6 } xl={ 2 }
          style={ {
            paddingTop: "10px",
            paddingBottom: "10px",
          } }
        >
          <button
            className={
              activeTab === "wardrobe"
                ? "bgactiveTab-btn shadow"
                : "bgTab-btn"
            }
            onClick={ () => onTabClick( "wardrobe" ) }
          >
            wardrobe
          </button>
        </Col>
      </Row>
    </div>
  );
};
export default Tabbar;