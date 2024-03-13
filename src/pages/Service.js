import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import services1 from '../assets/services-1.jpg';
import portrait2 from '../assets/portrait-2.jpg';
import portrait3 from '../assets/portrait-3.jpg';
import portrait4 from '../assets/portrait-4.jpg';
import portrait5 from '../assets/portrait-5.jpg';




const Service = () => {
  return (
    <>
    <section className='about bg-dark-overlay'>
      <h1 className='text-light hdabout'>SERVICES</h1>
    </section>
    <section className='description'>
      <Container>
        <Row className='mt-5'>
          <Col lg='6'sm='12'>
            <img src={services1} className='imgser rounded-3 shadow img-fluid' alt='services1'/>
          </Col>
            
          <Col lg='6'sm='12'>
          <h1>Service Description</h1>
            <p className='pclr fs-5'>There are always situations that call for more than just a photograph. 
               Have your portrait painted by a really experienced fine artist who can literally paint anything you can dream up!
               A portrait is a representation of a particular person. Such paintings have always been more than just a record.
               They have been used to show the power, importance, virtue, beauty, wealth, taste, learning or other important
               qualities that characterize the sitter. It is one of the best ways to depict a person and show his/her character.</p>
            <Button variant='light' className='rounded-pill learnbtn' >Learn More</Button>
          </Col>

          <Col lg='6'sm='12' className='mt-5'>
            <img src={portrait2} className='img-fluid rounded-3 shadow' alt='portrait2'/>
          </Col>

          <Col lg='6'sm='12' className='mt-5'>
            <img src={portrait3} className='imgport img-fluid rounded-3 shadow'  alt='portrait3'/>
            <p className='hdclr mt-4 text-end'>Oil on Canvas of a Little Girl</p>
            <p className='pclr text-end'>This portrait was created in 2015 for my brother's daughter, Emily Morgan.</p>
          </Col>

          <Col lg='6'sm='12' className='mt-5'>
            <img src={portrait4} className='imgport4 img-fluid rounded-3 shadow'  alt='portrait4'/>
            <p className='hdclr mt-4 text-end'>Oil on Canvas of a Little Girl</p>
            <p className='pclr text-end'>This portrait was created in 2015 for my brother's daughter, Emily Morgan.</p>
          </Col>

          <Col lg='6'sm='12' className='mt-5'>
            <img src={portrait5} className='img-fluid rounded-3 shadow' alt='portrait5'/>
          </Col>
        </Row>
      </Container>
    </section>

    </>
  )
}

export default Service
