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
                                   <Card.Header className=" text-center">Software</Card.Header>
                                   <Card.Img variant="top" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80" />
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
                                   <Card.Header className=" text-center">Web Development</Card.Header>
                                   <Card.Img variant="top" src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1052&q=80" />
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
                                   <Card.Header className=" text-center">Mobile App</Card.Header>
                                   <Card.Img variant="top" src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
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
                                   <Card.Header className=" text-center">Desaigner</Card.Header>
                                   <Card.Img variant="top" src="https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
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

