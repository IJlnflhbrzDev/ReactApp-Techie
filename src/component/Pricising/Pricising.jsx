import React from 'react'
import {  Col, Container,  Row   } from 'react-bootstrap';
import "./Pricising.css";
import PricisingProdact from './PricisingProdact';


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
                              <PricisingProdact title="Web Development" img="https://placeimg.com/640/480/tech" />
                         </Col>
                         <Col xl="3" lg="4" md="6" sm="12" className="mb-3" >
                              <PricisingProdact title="Mobile App" img="https://placeimg.com/640/480/tech" />
                         </Col>
                         <Col xl="3" lg="4" md="6" sm="12" className="mb-3">
                              <PricisingProdact title="Product Desaign" img="https://placeimg.com/640/480/tech"  />
                         </Col>
                         <Col xl="3" lg="4" md="6" sm="12" className="mb-3">
                              <PricisingProdact title="UI/UX" img="https://placeimg.com/640/480/tech"  />
                         </Col>
                    </Row>
               </Container>

     </section>

     );
   }

