import React, { useState, useEffect, useContext } from 'react';
import firebase from '../components/config/Fire';
import { storage } from "../components/config/Fire";
import Axios from "axios";
// import { AuthContext } from '../../context/Auth';
import parse from 'html-react-parser';

import { Container, Row,Col, Button,Card, Modal, Form } from 'react-bootstrap';
import brand from '../assets/brand-inverse.png';
import home from '../assets/home.jpg';
import project1 from '../assets/project-1.jpg';
import project2 from '../assets/project-2.jpg';
import project3 from '../assets/project-3.jpg';
import project4 from '../assets/project-4.jpg';
import project5 from '../assets/project-5.jpg';
import project6 from '../assets/project-6.jpg';
import user from '../assets/user.png';
import leaf from '../assets/leaf.png';
import house from '../assets/house.png';
import apple from '../assets/apple-logo.png';


const Home = () => {
  
  const handleClose = () => {
    setShowModal(false);
  };
  
  const [postData, setPostData] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    getPostData();
  }, []);

  const getPostData = () => {
    // Axios
    // .get(`https://software-bazaar-default-rtdb.firebaseio.com/event.json`)
    firebase.database().ref(`receipe`).get()
      .then((response) => {
        setPostData(response.val())
        // setTimeout(setPostData(response.val()), 5000);
        // setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  const handleShow = (postData) => {
    setSelectedPost(postData);
    setShowModal(true);
  };
  
  return (
    <>
      <section className='banner bg-dark-overlay'>
        <Container>
          <Row>
            <Col lg={12}>
              <div className='text-center text-light'>
            <h1 className='head-size'>Explore Delicious Recipes</h1>
            <h5>Discover mouth-watering recipes from our collection. Perfect for home cooking and food enthusiasts.</h5>
            </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='aboutme'>
        <Container>
          <Row>
            <Col lg={12}>
            <Form className="d-flex mt-5">
            <Form.Control
              type="search"
              placeholder="Search Receipes..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
            </Col>
            {/* <Col lg={6}>
              <img src={home} className='mt-5 rounded-3 shadow img-fluid' alt='home'/>
            </Col> */}
          </Row>
        </Container>
      </section>
      <section className='painting  mt-4 py-4'>
        <Container>
          <Row>
           
            {postData ?
                      Object.entries(postData).sort((a, b) => a[1].postPositionNo - b[1].postPositionNo).map((item) => (
            <Col lg={4} className='cardmargin mb-4'>
            <Card className='shadow h-100'>
            <Card.Img variant="top" src={item[1].postImage} alt='project1'/>
            <Card.Body>
              <Card.Title className='cardtitle'>{item[1].postTopicName}</Card.Title>
              <Card.Text className='cardtxt'>
              {parse(`${item[1].postLongDetail.substring(0, 150)}...`)}
              <div className='text-center'>
              {/* <Button variant='light' size='sm' className='rounded-pill cardbtn' onClick={() => handleShow(item[1])}>View Details</Button> */}
              <a className='anchor' target='blank' href={item[1].postIsLink}>Watch Now</a>
              </div>
              </Card.Text>
            </Card.Body>
          </Card>
            </Col>
            )) :
            <div className="row justify-content-center pt-4">
              <div className="col-lg-12">
                <div className="noprogramAdded text-center bg-white border shadow p-5">
                  <h2 className="noTaskAdded">Coming Soon</h2>
                  <span>We'll notify you as soon as something becomes available.</span>
                </div>
              </div>
            </div>
            }

        {/* {selectedPost && (
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedPost.postTopicName}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={selectedPost.postImage} alt='modalimage' className='mb-4'/>
            {parse(selectedPost.postLongDetail)}
            </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )} */}
          </Row>
        </Container>
      </section>

      {/* <section className='service mt-5 pt-5'>
        <Container>
          <Row>
            <Col lg='12'sm="12" className='text-center mb-5'>
            <h1>Services</h1>
              <p className='fs-5 pclr'>If you are looking for custom paintings, which will decorate your home or office,
                 consider booking one or several of<br/> my services listed below. 
                They will add more colors and emotions to your daily life.</p>
            </Col>

            <Col lg='3'sm="12" className='boxmargin'>
              <div className='box rounded shadow'>
                <div className='text-center my-5 py-5'>
                <img src={user} alt='user'/>
                <h3>portrait</h3>
                </div>
              </div>
            </Col>

            <Col lg='3'sm="12" className='boxmargin'>
            <div className='box rounded shadow'>
                <div className='text-center my-5 py-5'>
                <img src={leaf} alt='user'/>
                <h3>Landscape</h3>
                </div>
              </div>
            </Col>

            <Col lg='3'sm="12" className='boxmargin'>
            <div className='box rounded shadow'>
                <div className='text-center my-5 py-5'>
                <img src={apple} alt='user'/>
                <h3>Still Life</h3>
                </div>
              </div>
            </Col>

            <Col lg='3'sm="12" className='boxmargin'>
            <div className='box rounded shadow'>
                <div className='text-center my-5 py-5'>
                <img src={house} alt='user'/>
                <h3>Urban</h3>
                </div>
              </div>
            </Col>
            <Col lg='12' className='text-center mt-5'>
            <Button variant='light' className='rounded-pill learnbtn'>View All Services</Button>
            </Col>
          </Row>
        </Container>
      </section> */}
    </>
  )
}

export default Home
