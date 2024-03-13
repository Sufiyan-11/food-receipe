import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import still from '../assets/still-life-1.jpg';

const About = () => {
  return (
    <>
    <section className='about bg-dark-overlay'>
      <h1 className='text-light hdabout'>ABOUT</h1>
    </section>
    <section className='fewwords'>
      <Container>
        <Row>
          <Col lg='6'sm="12">
            <h2 className='mt-5'>A Few Words About Us</h2>
            <p className='pclr fs-5 mt-3'>There are always situations that call for more than just a photograph.
               Have your portrait painted by a really experienced fine artist who can literally paint anything you can dream up!
               A portrait is a representation of a particular person. Such paintings have always been more than just a record.
               They have been used to show the power, importance, virtue, beauty, wealth, taste, learning or other important qualities
               that characterize the sitter. It is one of the best ways to depict a person and show his/her character. 
               I am always ready to meet all your wishes and preferences in your portrait,
               whether it's created as a personal painting or a piece of art for an official person. 
               Contact me today to discuss your future portrait.</p>
               <Button variant='light' className='rounded-pill learnbtn' >Learn More</Button>
          </Col>
          <Col lg='6'sm="12">
            <img src={still} className='mt-5 rounded-3 shadow img-fluid' alt='still life'/>
          </Col>
        </Row>
      </Container>
    </section>


    </>
  )
}

export default About
