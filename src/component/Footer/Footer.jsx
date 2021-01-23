import React, { Component } from 'react'

export default class Footer extends Component {
     constructor(props) {
          super(props);
          this.state = {
               marque : `Support By IJlal Naufal Hibrizi`
          }
     }
     render() {
          return (
               <>
                    <footer>
                         <div className="card-header text-center  bg-info text-white">
                              <marquee behavior="100" direction="50">
                              {this.state.marque}

                              </marquee>
                         </div>
                    </footer>
               </>
          )
     }
}
