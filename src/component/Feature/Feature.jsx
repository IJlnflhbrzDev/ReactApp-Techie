import React, { Component } from 'react';
import { Col, Row , Container } from 'react-bootstrap';
import '../Feature/Feature.css';

export default class Feature extends Component {
     render() {
          return (
               <>
                    <section id="Feature">
                         <div className="title-heading" data-aos="zoom-in">
                              <h2>FEATURES</h2>
                              <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                         </div>
                         <Container>
                              <Row>
                                   <Col lg="6">
                                        <div className="box-iconst mt-5" data-aos="zoom-in">
                                             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7EEqjYv4_J9RfzDlGZ8imf7q6rV9X13Gprw&usqp=CAU" alt="" />
                                             <h3>consectetur elit. Nulla, eius.</h3>
                                             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, facilis.</p>
                                        </div>
                                        <div className="box-iconst mt-5" data-aos="zoom-in">
                                             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMY0IEmijF2MnOLH8zEB6cRCjJ7X7ibuWFog&usqp=CAU" alt="" />
                                             <h3>consectetur elit. Nulla, eius.</h3>
                                             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, facilis.</p>
                                        </div>
                                        <div className="box-iconst mt-5" data-aos="zoom-in">
                                             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMZN7tfL0fEK6PBWcRbBN3RRMerf_aJWxcHQ&usqp=CAU" alt="" />
                                             <h3>consectetur elit. Nulla, eius.</h3>
                                             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, facilis.</p>
                                        </div>
                                        <div className="box-iconst mt-5" data-aos="zoom-in">
                                             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUsvJJJVCK_huiEAFvFmfH55FbYO1RhUBtoA&usqp=CAU" alt="" />
                                             <h3>consectetur elit. Nulla, eius.</h3>
                                             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, facilis.</p>
                                        </div>
                                   </Col>

                                   <Col lg="6">
                                        <img src="https://bootstrapmade.com/demo/templates/Techie/assets/img/features.svg" alt=""/>
                                   </Col>
                              </Row>
                         </Container>

                    </section>
               </>
          )
     }
}
