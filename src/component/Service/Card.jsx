import React, { Component } from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import "../Service/Card.css"

const DataDamyCards =
     [
          {
               id: 0,
               Icon: 'https://simpleicon.com/wp-content/uploads/rocket.png ',
               title: 'Magni Dolores',
               description: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi'
          },
          {
               id: 1,
               Icon: 'https://cdn.iconscout.com/icon/free/png-512/overwatch-2-569226.png ',
               title: 'Magni Dolores',
               description: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi'
          },
          {
               id: 2,
               Icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMZN7tfL0fEK6PBWcRbBN3RRMerf_aJWxcHQ&usqp=CAU',
               title: 'Magni Dolores',
               description: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi'
          },
          {
               id: 3,
               Icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUsvJJJVCK_huiEAFvFmfH55FbYO1RhUBtoA&usqp=CAU',
               title: 'Magni Dolores',
               description: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi'
          },
          {
               id: 4,
               Icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMY0IEmijF2MnOLH8zEB6cRCjJ7X7ibuWFog&usqp=CAU',
               title: 'Magni Dolores',
               description: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi'
          },
          {
               id: 5,
               Icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJiCflOG6G1SJgWci31u3Syp2Xrsya-7uMhA&usqp=CAU',
               title: 'Magni Dolores',
               description: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi'
          },
     ];

export default class Card extends Component {
     constructor(props) {
          super(props);
          this.state = {};
     }

     componentDidMount() {
          const HandleBoxIconsClickAnimate = document.getElementsByClassName('box-icons');
          for (let index = 0; index < HandleBoxIconsClickAnimate.length; index++) {
               HandleBoxIconsClickAnimate[index].addEventListener('click', function () {
                    let  title = "purple";
                    let  show = "show";
                    if (this.classList.contains(show)) {
                         [show, title] = [title, show];
                    }
                    this.classList.toggle(show);
                    setTimeout(() => {
                         this.classList.toggle(title)
                    }, 500);
               });

          }
     }

     render() {
          return (
               <>
               <Container className="mt-5">
                         <Row>

                              {DataDamyCards.map((cardItem) => {
                                   return (
                                        <Col lg="4" md="6" sm="12" key={cardItem.id} className="mb-4">
                                             <div className="card shadow">
                                                  <div className="box-icons">
                                                        <img src={cardItem.Icon} alt="iconst" />
                                                       <div className="title">
                                                            <h4>{cardItem.title}</h4>
                                                            <p>{cardItem.description}</p>
                                                       </div>
                                                  </div>
                                             </div>
                                        </Col>
                                   )
                              })};

                         </Row>
                </Container>

               </>
          )
     }
}

