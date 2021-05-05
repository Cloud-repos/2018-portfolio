import React, { Component } from 'react'

import { SocialIcon } from 'react-social-icons'
import {NavLink} from 'react-router-dom'
import '../styles/App.css'

export default class BaseLayout extends Component {
  render () {
    return (
      <div className='layout'>
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded" >
            

          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <NavLink className="navbar-brand" exact to='/' activeStyle={{
          color: "#0275d8"}}>Carlota Pearl</NavLink>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to='/home' activeStyle={{
          color: "#0275d8"}}>Home <span className="sr-only">(current)</span></NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/about' activeStyle={{
          color: "#0275d8"}}>About Me</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/udacityportfolio' activeStyle={{
          color: "#0275d8"}}>Udacity Portfolio</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/tiyportfolio' activeStyle={{
          color: "#0275d8"}}>TIY Portfolio</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to='/contact' activeStyle={{
          color: "#0275d8"}}>Contact</NavLink>
              </li>

            </ul>
          </div>
        </nav>

        {this.props.children}

      <footer>
        <div className="container"> 
          <ul className="list-unstyled list-inline text-center">
            <li className="list-inline-item"><SocialIcon url="https://github.com/carlotapearl" style={{ height: 30, width: 30}}/></li>        
            <li className="list-inline-item"><SocialIcon url="http://linkedin.com/in/carlotapearl"  style={{ height: 30, width: 30 }}/></li>
            <li className="list-inline-item"><SocialIcon url="https://twitter.com/carlotapearl" style={{ height: 30, width: 30 }}  /></li>
          </ul>
        </div>
        <div className='copyright'>            
          <span>Copyright © 2018 by Carlota Pearl</span>
        </div>
      </footer>
    </div>
    )
  }
}
