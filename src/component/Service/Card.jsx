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
          const HandleBoxIconsClickAnimate = document.getElementsByClassName('box-icons'); //mengambil element mengunakan dom
          for (let index = 0; index < HandleBoxIconsClickAnimate.length; index++) { // Me Looping element2 yg di dapat oleh dom
               HandleBoxIconsClickAnimate[index].addEventListener('click', function () { //membuat sebuah eventListener ketika card di click
                    let  title = "purple"; //ini adalah sebuah class yg di masukan di dalam string agar bisa mudah mengunakan pertukaran data yg di balik
                    let  show = "show"; // ini juga sama
                    if (this.classList.contains(show)) { // membuat sebuah pekondisian jadi jika element yg sudah di dapat memilikin class yg bernama show
                         [show, title] = [title, show]; //maka class nya kita tuker yg awal susunan nya show , title  menjadi  title,show
                    }
                    this.classList.toggle(show); //ini kita menambahkan class toggle yg bernama variabel show
                    setTimeout(() => { // disini mengunakan sett time out jadi ketika sudah 5 detik maka tambahkan class yg sudah di tangkap oleh dom menambahkan class title
                         this.classList.toggle(title)
                    }, 500);
               });


          }
          const a =  document.redirec
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

