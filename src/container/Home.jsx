import React, { Component } from 'react'
import CNavbars from '../component/Navbar/CNavbar'
import CHeader from '../component/Header/CHeader'

export default class Home extends Component {
     render() {
          return (
               <>
                    <CNavbars />
                    <CHeader />
               </>
          )
     }
}
