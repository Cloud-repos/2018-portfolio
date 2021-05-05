import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../styles/Home.css'


export default class BaseLayout extends Component {
  render () {
    return (
      <div>
          <div className="jumbotron">
          <h3 className="display-4">Welcome to my home page!</h3>
            <hr className="my-4" />
            <div className="card-deck">
            <div className="card">
            <img className="card-img-top" src={require('../images/fendcertificate.jpg').default} alt="Card" style={{ width: '100%', borderRadius: "5px"}} />
            <div className="card-block">
                <h4 className="card-title">Front-End Nanodegree</h4>
                <p className="card-text">Co-Created by Udacity, AT&T, Google, and Github</p>
                <Link to='/udacityportfolio' className="btn btn-primary">Udacity Portfolio</Link>
                <p className="card-text"><small className="text-muted">September 26, 2018</small></p>
              </div>
            </div>
            <div className="card">
            <img className="card-img-top" src={require('../images/tiycertificate.jpg').default} alt="Card" style={{ height: '58%', width: '100%', borderRadius: "5px"}} />
            <div className="card-block">
                <h4 className="card-title">Front End Engineering</h4>
                <p className="card-text">The Iron Yard three-month intensive immersion program.</p>
                <Link to='/tiyportfolio' className="btn btn-primary">The Iron Yard Portfolio</Link>
                <p className="card-text"><small className="text-muted">September 25, 2017</small></p>
              </div>
            </div>
          </div>
            <hr className="my-4" />
            <h4>Click below to learn a more about me or contact me!</h4>
            <span className="lead">
              <Link to='/about' className="btn btn-primary btn-lg" role="button">About Me</Link>
              <Link to='/contact' className="btn btn-primary btn-lg" role="button">Contact</Link>
            </span>
          </div>
      </div>
    )
  }
}
