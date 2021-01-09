import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "../Counts/Count.css"
export default class Counts extends Component {
     constructor(props) {
          super(props);
          this.state = {
                    client: 0,
                    project:0,
                    hourSuport: 0,
                    hardWorker : 0
          }
     }
     handleCountClients = () => {

     if (this.state.client < 10) {

          this.setState( {
     client: this.state.client +1
     });
     }
     else {
          alert('Uppss!!')
     }
}

     handleCountProject = () => {

     if (this.state.project < 1000) {

          this.setState( {
     project: this.state.project +1
     });
     }
     else {
          alert('Uppss!!')
     }
}

     handleCountHourSuport = () => {

     if (this.state.hourSuport < 1000) {

          this.setState( {
     hourSuport: this.state.hourSuport +1
     });
     }
     else {
          alert('Uppss!!')
     }
}

     handleCountHardWorker = () => {

     if (this.state.hardWorker < 1000) {

          this.setState( {
     hardWorker: this.state.hardWorker +1
     });
     }
     else {
          alert('Uppss!!')
     }
}


     render() {
          return (
               <>
                    <section id="count">
                         <Container>
                              <Row>
                                   <Col lg="3" md="6" sm="6 "  >
                                        <div className="Counts-boxs  border-left" data-aos="zoom-in" onClick={this.handleCountClients}>
                                             <h3>{this.state.client}</h3>
                                             <p>{this.props.client }</p>
                                        </div>
                                   </Col>
                                   <Col lg="3" md="6" sm="64" >
                                        <div className="Counts-boxs  border-top" data-aos="zoom-in" onClick={this.handleCountProject}>
                                             <h3>{this.state.project}</h3>
                                             <p>{this.props.project }</p>
                                        </div>
                                   </Col>
                                   <Col lg="3" md="6" sm="64" >
                                        <div className="Counts-boxs  border-bottom" data-aos="zoom-in" onClick={this.handleCountHourSuport}>
                                             <h3>{this.state.hourSuport}</h3>
                                             <p>{this.props.hourSuport }</p>
                                        </div>
                                   </Col>
                                   <Col lg="3" md="6" sm="64" >
                                        <div className="Counts-boxs  border-right" data-aos="zoom-in" onClick={this.handleCountHardWorker}>
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
