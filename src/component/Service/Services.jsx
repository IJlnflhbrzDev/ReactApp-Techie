import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import Card from './Card'
import "../Service/Services.css"

export default class Services extends Component {
     render() {
          return (
               <>
                    <section id="services">
                    <Container>
                         <div className="title-service text-center">
                              <h2>SERVICES</h2>
                              <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                         </div>
                    </Container>
                         <Card />    {/* ini adalah component2 hasil looping   */}
                 </section>
               </>
          )
     }
}
