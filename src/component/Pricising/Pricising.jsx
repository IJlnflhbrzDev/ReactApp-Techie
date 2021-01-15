import React from 'react'
import { Col, Container,  Row ,Card  } from 'react-bootstrap';
import "./Pricising.css";


export default function Pricising() {


     return (
          <section id="Pricising">
          <div className="Pricising-title">
               <h2>PRICING</h2>
               <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum vitae tempora sit accusamus aspernatur similique, expedita autem odit, quam quo impedit facilis veritatis quisquam molestias?</p>
               </div>

               <Container className="mt-5">
                    <Row>
                         <Col xl="3" lg="4" md="6" sm="12" className="mb-3">
                              <Card>
                                   <Card.Header className=" text-center">Featured</Card.Header>
                                   <Card.Img variant="top" src="https://bootstrapmade.com/demo/templates/Techie/assets/img/portfolio/portfolio-details-3.jpg" />
                                   <Card.Body>
                                        <Card.Title>Special title treatment</Card.Title>
                                        <Card.Text>
                                             With supporting text below as a natural lead-in to additional content.
                                        </Card.Text>
                                        <button style={{fontSize : "16px",width :"100%" ,color: "white"}}>Buy Now!</button>
                                   </Card.Body>
                              </Card>
                         </Col>
                         <Col xl="3" lg="4" md="6" sm="12" className="mb-3">
                              <Card>
                                   <Card.Header className=" text-center">Featured</Card.Header>
                                   <Card.Img variant="top" src="https://bootstrapmade.com/demo/templates/Techie/assets/img/portfolio/portfolio-details-1.jpg" />
                                   <Card.Body>
                                        <Card.Title>Special title treatment</Card.Title>
                                        <Card.Text>
                                             With supporting text below as a natural lead-in to additional content.
                                        </Card.Text>
                                        <button style={{fontSize : "16px",width :"100%" ,color: "white"}}>Buy Now!</button>
                                   </Card.Body>
                              </Card>
                         </Col>
                         <Col xl="3" lg="4" md="6" sm="12" className="mb-3">
                              <Card>
                                   <Card.Header className=" text-center">Featured</Card.Header>
                                   <Card.Img variant="top" src="https://bootstrapmade.com/demo/templates/Techie/assets/img/portfolio/portfolio-details-2.jpg" />
                                   <Card.Body>
                                        <Card.Title>Special title treatment</Card.Title>
                                        <Card.Text>
                                             With supporting text below as a natural lead-in to additional content.
                                        </Card.Text>
                                        <button style={{fontSize : "16px",width :"100%" ,color: "white"}}>Buy Now!</button>
                                   </Card.Body>
                              </Card>
                         </Col>
                         <Col xl="3" lg="4" md="6" sm="12" className="mb-3">
                              <Card>
                                   <Card.Header className=" text-center">Featured</Card.Header>
                                   <Card.Img variant="top" src="https://bootstrapmade.com/demo/templates/Techie/assets/img/portfolio/portfolio-details-2.jpg" />
                                   <Card.Body>
                                        <Card.Title>Special title treatment</Card.Title>
                                        <Card.Text>
                                             With supporting text below as a natural lead-in to additional content.
                                        </Card.Text>
                                        <button style={{fontSize : "16px",width :"100%" ,color: "white"}}>Buy Now!</button>
                                   </Card.Body>
                              </Card>
                         </Col>
                    </Row>
               </Container>

     </section>

     );
   }

