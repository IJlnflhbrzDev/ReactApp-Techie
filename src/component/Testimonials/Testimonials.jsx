import React, { Component } from 'react';
import {  Carousel} from 'react-bootstrap'
import "../Testimonials/Testimonial.css"
import TestimonialsCard from './TestimonialsCard';

export default class Testimonials extends Component {
     render() {
          return (
               <>
                    <section id="Testimonial">
                         <div className="title-heading text-center">
                              <h2>TESTIMONIALS</h2>
                              <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                         </div>

                         {/* TESTIMONEIALS CAROUSEL  */}

                         <Carousel>
                              <Carousel.Item>
                                   <TestimonialsCard />
                              </Carousel.Item>
                              <Carousel.Item >
                                   <TestimonialsCard />
                              </Carousel.Item>
                              <Carousel.Item >
                                   <TestimonialsCard />
                              </Carousel.Item>
                         </Carousel>

                         {/* TESTIMONEIALS CAROUSEL  */}

                    </section>
               </>
          )
     }
}
