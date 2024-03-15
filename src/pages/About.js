import React, { useState, useEffect, useContext } from 'react';
import { Container, Row,Col, Button,Card, Modal } from 'react-bootstrap';
import firebase from '../components/config/Fire';
import parse from 'html-react-parser';

import still from '../assets/still-life-1.jpg';

const About = () => {
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
    firebase.database().ref(`news`).get()
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
    <section className='about bg-dark-overlay'>
      <h1 className='text-light hdabout text-center'>NEWSLETTER</h1>
    </section>
    <section className='fewwords mt-5'>
      <Container>
        <Row>
        {postData ?
                      Object.entries(postData).sort((a, b) => a[1].postPositionNo - b[1].postPositionNo).map((item) => (
            <Col lg="4" sm="12" className='cardmargin mb-4'>
            <Card className='shadow h-100'>
            <Card.Img variant="top" src={item[1].postImage} alt='project1'/>
            <Card.Body>
              <Card.Title className='cardtitle'>{item[1].postTopicName}</Card.Title>
              <Card.Text className='cardtxt'>
              {parse(`${item[1].postLongDetail.substring(0, 50)}...`)}
              <div className='d-flex justify-content-between'>
              <Button variant='light' size='sm' className='rounded-pill cardbtn' onClick={() => handleShow(item[1])}>View Details</Button>
              {/* <p className='text-end'>₹{item[1].postIsPrice}</p> */}
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

        {selectedPost && (
        <Modal show={showModal} size='xl' onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedPost.postTopicName}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={selectedPost.postImage} alt='modalimage' className=' modalimage mb-4'/>
            {parse(selectedPost.postLongDetail)}
            </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
          
        </Row>
      </Container>
    </section>


    </>
  )
}

export default About
