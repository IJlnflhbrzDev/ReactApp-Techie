import React from 'react'
import "../About/About.css"
import { Button, Col, Container, Row } from 'react-bootstrap'

export default function About() {
     const data = {
          title: 'Voluptatem dignissimos provident quasi corporis',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',

          listDescription: {
               List1 : ' Ullamco laboris nisi ut aliquip ex ea commodo consequat.'    ,
               List2 : '      Duis aute irure dolor in reprehenderit in voluptate velit.'    ,
               List3: '  Ullamco laboris nisi ut aliquip ex ea commodo consequat.',
               paragraf: 'irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.',
               button : 'Load More'
          },
          img : 'https://bootstrapmade.com/demo/templates/Techie/assets/img/about.jpg'
     }
     return (
          <>
               <section id="about">
                    <Container>
                         <Row>
                              <Col lg="5" md="12" sm="12">
                                   <div className="about_title" data-aos="zoom-out">
                                        <h2>{data.title}</h2>
                                             <p className="font-italic">{data.description}</p>
                                   <ul className="p-0 m-0 mb-1">
                                        <li>
                                             {data.listDescription.List1}
                                        </li>

                                        <li>
                                             {data.listDescription.List2}
                                        </li>

                                        <li>
                                             {data.listDescription.List3}
                                        </li>
                                             <p>{ data.listDescription.paragraf}</p>
                                             <Button className="d-flex justify-content-around align-items-center">
                                             <span>{ data.listDescription.button}</span>
                                             </Button>
                                   </ul>
                                   </div>
                              </Col>

                              <Col lg="7" md="12" sm="12" data-aos="zoom-out">
                                   <img src={data.img} alt="img-about"/>
                              </Col>
                         </Row>
                    </Container>
               </section>
          </>
     )
}
