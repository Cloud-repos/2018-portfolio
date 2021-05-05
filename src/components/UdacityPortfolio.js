import React, { Component } from 'react'
import '../styles/Portfolio.css'
export default class UdacityPorfolio extends Component {
  render () {
    return (
      <div className='portfolio'>
        <div className="card">
          <img className="card-img-top" src={require('../images/fend.jpg').default} alt="Card" style={{width: "100%", hight: "50%", borderRadius: "5px"}} />
          <div className="card-block">
          <div>
            <h2>Projects</h2>
          </div>
            <h4 className="card-title">React Projects</h4>
            <p className="card-text">Check out these recently completed React projects!</p>
          </div>
        </div>
        <div className='project-flex'>
          <div className="card-deck">
            <div className="card">
            <img className="card-img-top" src={require('../images/correct-use-of-state.gif').default} alt="demo card" style={{width: "100%"}} />
              <div className="card-block">
                <h4 className="card-title">MyReads App</h4>
                <p className="card-text">React application for managing books to read/already read. Similar to Goodreads. </p>
                <a href="https://carlotapearl.github.io/Udacity-FEND-Myreads-app/#/" target="_blank" rel="noopener noreferrer" className="btn btn-success">View Live</a>
                <a href="https://github.com/carlotapearl/Udacity-FEND-Myreads-app" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View code</a>
                <p className="card-text"><small className="text-muted">Created September 2018</small></p>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src={require('../images/maps-app.jpg').default} alt="Mars Rovers app" style={{width: "100%", borderRadius: "5px"}}/>
              <div className="card-block">
                <h4 className="card-title">React Neighborhood App</h4>
                <p className="card-text">Single page React app that uses the Google Maps and FourSquare API</p>
                <a href="https://carlotapearl.github.io/react-neighborhood-map/" target="_blank" rel="noopener noreferrer" className="btn btn-success">View Live</a>
                <a href="https://github.com/carlotapearl/react-neighborhood-map" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Code</a>
                <p className="card-text"><small className="text-muted">Created September 2018</small></p>
              </div>
            </div>

          </div>
        </div>
        <div className='language-flex'>
          <div className="card-block">
            <h4 className="card-title">Front End Projects</h4>
            <p className="card-text">During Front End Fundamentals we used HTML, CSS, and JavaScript.</p>
          </div>
        </div>
        <div className='project-flex'>
          <div className="card-deck">
            <div className="card">
              <img className="card-img-top" src={require('../images/project4.jpg').default} alt="" style={{width: "100%"}} />
              <div className="card-block">
                <h4 className="card-title">Restaurant Reviews App</h4>
                <p className="card-text">This project taught me a lot about styling multi page apps, ARIA semantic tagging, and building out HTML via a javascript file.</p>
                <a href="https://github.com/carlotapearl/Udacity-FEND-restaurant-reviews-master" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Code</a>
                <p className="card-text"><small className="text-muted">Created August 2018</small></p>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src={require('../images/project3.jpg').default} alt="starwars app" style={{width: "100%", borderRadius: "5px"}}/>
              <div className="card-block">
                <h4 className="card-title">Arcade Game Clone</h4>
                <p className="card-text">The purpose is to demostrate mastery of JavaScript Object Oriented Programming.</p>
                <a href="https://github.com/carlotapearl/Udacity-FEND-arcade-game-master" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Code</a>
                <p className="card-text"><small className="text-muted">Created July 2018</small></p>
              </div>
            </div>

          </div>
        </div>

        <div className='language-flex'>
          <div className="card-block">
            <h4 className="card-title">More Projects</h4>
            <p className="card-text">Project description...</p>
          </div>
        </div>
        <div className='project-flex'>
          <div className="card-deck">
            <div className="card">
              <img className="card-img-top" src={require('../images/project2.jpg').default} alt="Mars Rovers app" style={{width: "100%", borderRadius: "5px"}}/>
              <div className="card-block">
                <h4 className="card-title">Matching Memory Game</h4>
                <p className="card-text">The purpose is to demostrate mastery of HTML, CSS, and JavaScript. I also implemented jQuery in this project.</p>
                <a href="https://github.com/carlotapearl/Udacity-FEND-memory-game-master" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Code</a>
                <p className="card-text"><small className="text-muted">Created June 2018</small></p>
              </div>
            </div>
          <div className="card">
            <img className="card-img-top" src={require('../images/project1.jpg').default} alt="" style={{width: "100%"}} />
              <div className="card-block">
                <h4 className="card-title">Portfolio Site</h4>
                <p className="card-text">Responsive Portfolio Site.</p>
                <a href="https://github.com/carlotapearl/Udacity-Portfolio-Project" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Code</a>
                <p className="card-text"><small className="text-muted">Created May 2018</small></p>
              </div>
            </div>      
          </div>
        </div>

        <div className='language-flex'>
          <div className="card-block">
            <h4 className="card-title">Languages</h4>
            <p className="card-text">Programming languages in the curriculum.</p>
            <p className="card-text">React | ES6 | JavaScript | HTML5 | CSS3 | Sass </p>
          </div>
          <div className="container">
            <img className="card-img-top" src={require('../images/udacitycode.jpg').default} alt="Card" style={{width: "100%", hight: "25%"}} />
          </div>
        </div>
      </div>
    )
  }
}
