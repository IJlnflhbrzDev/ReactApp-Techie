import React, { Component } from 'react'
import { Col, Row , Button } from 'react-bootstrap'
import '../Header/CHeader.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
export default class CHeader extends Component {
     constructor(props) {
          super(props);
          this.state = {
               img : 'https://bootstrapmade.com/demo/templates/Techie/assets/img/hero-img.png'
          }
     }

     componentDidMount() {
          AOS.init();
     }
     render() {
          return (
               <>
                    <header>
                         <div className="container-fluid">
                              <Row className=" justify-content-center">
                                   <Col xl="5" lg="5" md="6" sm="12" className=" d-flex justify-content-center align-items-center">
                                        <div className="header-title "  data-aos="fade-up">
                                             <h1 className="text-white  font-weight-bold">Better Digital <br /> Experience With <br /> Techie</h1>
                                             <h2>We are team of talanted designers making websites with  <strong>IJlnflhbrz</strong></h2>
                                             <Button>GET STARTED</Button>
                                        </div>
                                   </Col>
                                   <Col xl="4" lg="6" md="6" sm="12" className="d-flex justify-content-center align-items-center position-relative">
                                        <div className="header-image">
                                             <img data-aos="zoom-in" src={this.state.img} alt="hero"/>
                                        </div>
                                   </Col>
                              </Row>
                         </div>
                    </header>

               </>
          )
     }
}
