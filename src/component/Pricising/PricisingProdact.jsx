import React, { Component } from 'react'
import { Card } from 'react-bootstrap'

export default class PricisingProdact extends Component {
     constructor(props) {
          super(props);
          this.state = {
               order : 'Pesan Sekarang!',
               background :'blue'
          }
     }

     HandleOrderSuccess = () => {
          if (this.state.order === "Pesan Sekarang!") {
               this.setState({
                    order: "Batal Pesanan!",
                    background : "green"
               });
          }  if(this.state.order === "Batal Pesanan!") {
               this.setState({
                    order : "Pesan Sekarang!",
                    background : "blue"
               })
          }
     }

     render() {
          return (
               <div>

                    <Card>
                         <Card.Header className=" text-center">{ this.props.title}</Card.Header>
                                   <Card.Img variant="top" src={this.props.img} />
                                   <Card.Body>
                                        <Card.Title>Special title treatment</Card.Title>
                                        <Card.Text>
                                             With supporting text below as a natural lead-in to additional content.
                                        </Card.Text>
                              <button onClick={this.HandleOrderSuccess} style={{ fontSize: "16px", width: "100%", color: "white",background :this.state.background }}>{this.state.order }</button>
                                   </Card.Body>
                              </Card>

               </div>
          )
     }
}
