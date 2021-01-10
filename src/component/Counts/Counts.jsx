import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "../Counts/Count.css"
export default class Counts extends Component {
     constructor(props) {
          super(props);
          this.state = {
                    client: 153,
                    project:129,
                    hourSuport: 105,
                    hardWorker : 88
          }
     }


     render() {
          return (
               <>
                    <section id="count">
                         <Container>
                              <Row>
                                   <Col lg="3" md="6" sm="6 "  >
                                        <div className="Counts-boxs" data-aos="zoom-in" onClick={this.handleCountClients}>
                                             <h3>{this.state.client}</h3>
                                             <p>{this.props.client }</p>
                                        </div>
                                   </Col>
                                   <Col lg="3" md="6" sm="64" >
                                        <div className="Counts-boxs" data-aos="zoom-in" onClick={this.handleCountProject}>
                                             <h3>{this.state.project}</h3>
                                             <p>{this.props.project }</p>
                                        </div>
                                   </Col>
                                   <Col lg="3" md="6" sm="64" >
                                        <div className="Counts-boxs" data-aos="zoom-in" onClick={this.handleCountHourSuport}>
                                             <h3>{this.state.hourSuport}</h3>
                                             <p>{this.props.hourSuport }</p>
                                        </div>
                                   </Col>
                                   <Col lg="3" md="6" sm="64" >
                                        <div className="Counts-boxs" data-aos="zoom-in" onClick={this.handleCountHardWorker}>
                                             <h3>{this.state.hardWorker}</h3>
                                             <p>{this.props.hardWorker}</p>
                                        </div>
                                   </Col>
                              </Row>
                         </Container>
                    </section>
               </>
          )
     }
}
