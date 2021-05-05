import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../styles/about.css'

export default class About extends Component {
  render () {
    return (
      <div className='About' style={{ fontFamily: 'Montserrat'}}>
        <div className='card'>        
          <img className="card-img-top" src={require('../images/4303.jpg').default} alt="Card" style={{width: "100%", height: "25%"}} />
          <div className="card-block">
            <h3 className="card-title">About Me</h3>
            <h4>I served in the US Navy for 6 years in the medical field. This was followed by a home based business for which I learned HTML and CSS to build an e-commerce storefront. This experience revealed a passion for web design and development.</h4> 
            <h4>I am now seeking full-time employment as a Front End Web Developer. During the past 5 years I have obtained two Front End Web Development Certifications and a lot of online training of relevant skills such as React JS, Web Accessibility, and Agile development.</h4>
            <h4>2018 - On September 25, 2018 I graduated from Udacity's Front-End Nanodegree Program. This began with the Grow With Google Scholarship Challenge Phase 1 from January to March 2018. I was selected to 
            continue to Phase 2 and complete the Front-End Web Developer Nanodegree program from April to October 2018. View <Link to='/udacityportfolio' >Udacity Portfolio.</Link> In August 2018 I finished Lynda.com's Front-End-Web Developer <a target="_blank" rel="noopener noreferrer" href="https://www.lynda.com/learning-paths/Web/become-a-front-end-web-developer"> learning path.</a></h4>
            <h4>2017 - Completed a Front End Engineering Certification by attending a web development bootcamp at The Iron Yard in Orlando. This was a three-month intensive immersion <a target="_blank" rel="noopener noreferrer" href="https://github.com/carlotapearl/TIY-lecture-notes">program.</a> React JS was my language focus. View <Link to='/udacityportfolio'>TIY Portfolio</Link>.</h4>
            <h4>2016 - Completed most of FreeCodeCamp's Front End Development Projects. You can view progress on my <a target="_blank" rel="noopener noreferrer" href="https://www.freecodecamp.org/carlotapearl">FreeCodeCamp profile</a> and projects on <a target="_blank" rel="noopener noreferrer" href="https://codepen.io/carlotapearl/">Codepen</a>.</h4>
            <h4>2015 - JavaScript. Focused on in-depth study of JavaScript as advised by Matt Mullenweg during a keynote urging the WordPress community to <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=KrZx4IY1IgU">"learn JavaScript deeply...it is the Future of the web"</a>.</h4>
            <h4>2014 - Learned everything I could about WordPress development with the Genesis Framework on Treehouse and Lynda.com. Followed the WP Community and attended WordCamps in Jacksonville, Orlando, and Tampa.</h4>
            <h4>2013 - Started learning HTML, CSS, JavaScript, and Responsive Web Design. <a target="_blank" rel="noopener noreferrer" href="https://mashable.com/2012/12/11/responsive-web-design/#dr3PkSq3msqN">Mashable</a> called 2013 the Year of Responsive Web Design.</h4>
            <h4>2012 - Started learning Python with Udacity and MIT's Open Courseware. I completed Udacity's Computer Science 101 "With Highest Distinction" on April 2012. Also spent about 12 weeks with MIT's <a target="_blank" rel="noopener noreferrer" href=" https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-00-introduction-to-computer-science-and-programming-fall-2008/"> Intro to Computer Science and Programming Course</a>. </h4>
            <img className="image" src={require('../images/4302.jpg').default} alt="Card" style={{width: "45%", height: "25%", borderRadius: "5px"}} />

            <hr className="my-4" />
            <h4>Visit my Contact page to access my social media links and online learning profiles.</h4>
            <span className="lead">
              <Link to='/udacityportfolio' className="btn btn-primary btn-lg" role="button">Udacity Portfolio</Link>
              <Link to='/tiyportfolio' className="btn btn-primary btn-lg" role="button">TIY Portfolio</Link>
              <Link to='/contact' className="btn btn-primary btn-lg" role="button">Contact</Link>
            </span>
          </div>
        </div>
      </div>
    )
  }
}
