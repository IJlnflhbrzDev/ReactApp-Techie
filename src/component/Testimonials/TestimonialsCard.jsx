import React, { Component } from 'react'
import { Card, Container, Row ,Col } from "react-bootstrap";

export default class TestimonialsCard extends Component {
     render() {
          return (
               <div className="TestimonialCards mt-3">
                    <Container>
                         <Row>
                              <Col lg="4">
                                   <Card data-aos="zoom-in">
                                        <Card.Body>

                                                  &ldquo; Some quick example text to build on the card title and make up the bulk of
                                                  the card's content &rdquo;
                                                  <div className="profile-testimonial" data-aos="zoom-in" data-aos-delay="1000">
                                                        <img className=" rounded-circle"  src="https://bootstrapmade.com/demo/templates/Techie/assets/img/testimonials/testimonials-2.jpg" alt=""/>
                                                  </div>
                                        </Card.Body>
                                   </Card>
                              </Col>
                              <Col lg="4">
                                   <Card data-aos="zoom-in">
                                        <Card.Body>

                                                  &ldquo; Some quick example text to build on the card title and make up the bulk of
                                                  the card's content &rdquo;
                                                  <div className="profile-testimonial" data-aos="zoom-in" data-aos-delay="1000">
                                                         <img className=" rounded-circle"   src="https://bootstrapmade.com/demo/templates/Techie/assets/img/testimonials/testimonials-5.jpg" alt=""/>
                                                  </div>

                                        </Card.Body>
                                   </Card>
                              </Col>
                              <Col lg="4">
                                   <Card data-aos="zoom-down">
                                        <Card.Body>

                                                  &ldquo; Some quick example text to build on the card title and make up the bulk of
                                                  the card's content &rdquo;

                                                  <div className="profile-testimonial" data-aos="zoom-in" data-aos-delay="1000">
                                                       <img className=" rounded-circle"  src="https://bootstrapmade.com/demo/templates/Techie/assets/img/testimonials/testimonials-3.jpg" alt=""/>
                                                  </div>
                                        </Card.Body>
                                   </Card>
                              </Col>
                         </Row>
                    </Container>
               </div>
          )
     }
}
