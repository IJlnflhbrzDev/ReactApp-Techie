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
                                   <Card.Img variant="top" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80" />
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
