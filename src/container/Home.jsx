import React, { Component } from 'react'
import CNavbars from '../component/Navbar/CNavbar'
import CHeader from '../component/Header/CHeader'
import About from '../component/About/About';
import Counts from '../component/Counts/Counts';
import Services from '../component/Service/Services';

export default class Home extends Component {
     constructor(props) {
          super(props);
          this.state = {
               loader : 'https://codetea.com/content/images/2017/10/CSS-Loader.gif'
          }
     }

     componentDidMount() {
     window.addEventListener('load',function () {
          const Loader = document.querySelector('.loader');
          Loader.style.display = "none";
     })
}

     render() {
          return (
               <>
                    <LoaderElement />
                    <CNavbars />
                    <CHeader />
                    <About />
                    <Counts client="clients" project="projects" hourSuport="Hours Of Support" hardWorker="Hard Workers" />
                    <Services />
               </>
          )
     }
}

// Loaader
const LoaderElement = () => {
     return <div className="loader"></div>
}