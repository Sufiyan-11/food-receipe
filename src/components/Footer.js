import { Col, Container, Row } from 'react-bootstrap';

import React from 'react'

const Footer = () => {
  return (
    <div>
     <Container fluid className='mt-5 pt-5 bg-dark text-light'>
      <Row>
        <Col xs lg="6">
          <p>&copy;Copyright All Rights Reserved</p>
        </Col>
        <Col xs lg="6">
          <p className='text-end'>This site by Sufiyan Shaikh</p>
        </Col>
      </Row>
     </Container>
      
    </div>
  )
}

export default Footer
