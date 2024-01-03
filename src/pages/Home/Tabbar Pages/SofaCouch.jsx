import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import SofaCard from '../../../components/SofaCouch.jsx';
export const SofaCouch = () =>
{
  return (
    <div >
      <Container>

        <Row style={ { paddingTop: '130px!important' } }>
          <Col>
            <SofaCard />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default SofaCouch;