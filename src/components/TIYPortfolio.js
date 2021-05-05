import React, { Component } from 'react'
import '../styles/Portfolio.css'
export default class TIYPorfolio extends Component {
  render () {
    return (
      <div className='portfolio'>
        <div className="card">
          <img className="card-img-top" src={require('../images/4100.jpg').default} alt="Card" style={{width: "100%", hight: "50%", borderRadius: "5px"}} />
          
          <div className="card-block">
            <div>
              <h2>The Iron Yard Projects</h2>
              <h4>Front End Engineering. Three month coding bootcamp. Highly focused, immersive training centered on language fluency,
                  object-oriented programming, and project-based learning. Showcased here are some of the projects I completed for the certification. </h4>
              <h4>Language focus: React JS</h4>
            </div>
          </div>
        </div>
        <div className='language-flex'>
          <div className="card-block">
            <h4 className="card-title">React and Redux Projects</h4>
            <p className="card-text">Created using React, React Router v4, and Redux Apps.</p>
          </div>
        </div>
        
        <div className='project-flex'>
          <div className="card-deck">
            <div className="card">
            <img className="card-img-top" src={require('../images/bankappdemo.gif').default} alt="demo card" style={{width: "100%"}} />
              <div className="card-block">
                <h4 className="card-title">Redux Bank App</h4>
                <p className="card-text">App uses React, React Router v4, and Redux to mimic online banking.</p>
                <a href="https://github.com/carlotapearl/Redux-Bank-App" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Code</a>
                <p className="card-text"><small className="text-muted">Created September 2017</small></p>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src={require('../images/SecretKeeper.gif').default} alt="Secret Keeper app" style={{width: "100%", borderRadius: "5px"}}/>
              <div className="card-block">
                <h4 className="card-title">React Redux Secret Keeper</h4>
                <p className="card-text">React app with user authentication validation. Logging out destroys cookie, "secrets" are only displayed with a token.</p>
                <a href="https://github.com/carlotapearl/Redux-Secret-Keeper" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Code</a>
                <p className="card-text"><small className="text-muted">Created September 2017</small></p>
              </div>
            </div>
          </div>
        </div>
        <div className='language-flex'>
          <div className="card-block">
            <h4 className="card-title">More React Projects</h4>
          </div>
        </div>        
        <div className='project-flex'>
          <div className="card-deck">        
            <div className="card">
              <img className="card-img-top" src={require('../images/esite.jpg').default} alt="" style={{width: "100%"}} />
              <div className="card-block">
                <h4 className="card-title">E-Commerce Mock Site</h4>
                <p className="card-text">This is a mock example of an online store with the ability to view details on products. </p>
                <a href="https://github.com/carlotapearl/React-E-Commerce-Mock-Site" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Code</a>
                <p className="card-text"><small className="text-muted">Created September 2017</small></p>
              </div>
            </div>

            <div className="card">
            <img className="card-img-top" src={require('../images/quakes.png').default} alt="" style={{width: "100%"}} />
              <div className="card-block">
                <h4 className="card-title">Earthquakes!</h4>
                <p className="card-text">This site records a list of all the earthquakes that have occurred in the past hour</p>
                <a href="https://github.com/caep2015/React-Simple-App-Earthquakes" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Code</a>
                <p className="card-text"><small className="text-muted">Created August 2017</small></p>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src={require('../images/4200.png').default} alt="Mars Rovers app" style={{width: "100%", borderRadius: "5px"}}/>
              <div className="card-block">
                <h4 className="card-title">Mars Rover</h4>
                <p className="card-text">This site shows images on Mars using the NASA API</p>
                <a href="https://github.com/caep2015/React-Mars-Rovers" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View the code for Mars Rover</a>
                <p className="card-text"><small className="text-muted">Created August 2017</small></p>
              </div>
            </div>
          </div>
        </div>
        <div className='language-flex'>

          <div className="card-block">
            <h4 className="card-title">API Projects with React</h4>
            <p className="card-text">The following projects make use of an API. React logic implemented: props, state, lifecyle, children components, and passing data via props.</p>
          </div>
        </div>
        <div className='project-flex'>
          <div className="card-deck">

            <div className="card">
            <img className="card-img-top" src={require('../images/newsmockup.gif').default} alt="demo card" style={{width: "100%"}} />
            
              <div className="card-block">
                <h4 className="card-title">Redux Unsplash API Search</h4>
                <p className="card-text">In class activity using the News API to fetch and render a random IGN news feed.</p>
                <a href="https://github.com/carlotapearl/React-News-API" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Code</a>
                <p className="card-text"><small className="text-muted">August 2017</small></p>
              </div>
            </div>            
            
            <div className="card">
              <img className="card-img-top" src={require('../images/431.png').default} alt="starwars app" style={{width: "100%", borderRadius: "5px"}}/>
              <div className="card-block">
                <h4 className="card-title">Star Wars API (SWAPI) </h4>
                <p className="card-text">Use of Star Wars API (SWAPI) to render a set of Star Wars vehicle 'cards'. In class pair programming activity implementing React logic: props, state and lifecycle.</p>
                <a href="https://github.com/caep2015/React-Star-Wars-Vehicles" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Code</a>
                <p className="card-text"><small className="text-muted">Created August 2017</small></p>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src={require('../images/menumockup.jpg').default} alt="starwars app" style={{width: "100%", borderRadius: "5px"}}/>
              <div className="card-block">
                <h4 className="card-title">Majestic Thi API </h4>
                <p className="card-text">In-class code along project to implement props, state, lifecyle methods, components, and inline styling. </p>
                <a href="https://github.com/carlotapearl/React-Majestic-Thi-Restaurant-Menu" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Code</a>
                <p className="card-text"><small className="text-muted">Recreated May 2018</small></p>
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
            <img className="card-img-top" src={require('../images/w1p.png').default} alt="" style={{width: "100%"}} />
              <div className="card-block">
                <h4 className="card-title">Bent Creek Ceramics Website</h4>
                <p className="card-text">This three page website was our first weekly project.</p>
                <a href="https://github.com/carlotapearl/TIY-Week-1-Project-Bent-Creek-Ceramics" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Code</a>
                <p className="card-text"><small className="text-muted">Created July 2017</small></p>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src={require('../images/itunes.jpg').default} alt="Mars Rovers app" style={{width: "100%", borderRadius: "5px"}}/>
              <div className="card-block">
                <h4 className="card-title">iTunes Music Search</h4>
                <p className="card-text">This App uses the iTunes API to pull songs based on a search that your user performs.</p>
                <a href="https://github.com/carlotapearl/TIY-Week-4-Project-iTunes-Music-Search" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Code</a>
                <p className="card-text"><small className="text-muted">Created July 2017</small></p>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src={require('../images/calculator.png').default} alt="starwars app" style={{width: "100%", borderRadius: "5px"}}/>
              <div className="card-block">
                <h4 className="card-title">JavaScript Calculator </h4>
                <p className="card-text">Calculator with HTML, CSS & JavaScript.</p>
                <a href="https://github.com/caep2015/JavaScript-Calculator" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Code</a>
                <p className="card-text"><small className="text-muted">Created July 2017</small></p>
              </div>
            </div>
          </div>
        </div>

        <div className='language-flex'>
          <div className="card-block">
            <h4 className="card-title">Back End Projects</h4>
            <p className="card-text">Some of the projects completed in the Back End protion of the curriculum where we learned Express, NodeJs, MongoDb, Mongoose, and PostgreSql.</p>
          </div>
        </div>
        <div className='project-flex'>
          <div className="card-deck">
            <div className="card">
              <img className="card-img-top" src={require('../images/gabble.png').default} alt="Mars Rovers app" style={{width: "100%", borderRadius: "5px"}}/>
              <div className="card-block">
                <h4 className="card-title">Social Network</h4>
                <p className="card-text">Express and Sequelize social network for students. This network, called "Gabble," has users, public messages, and likes.</p>
                <a href="https://github.com/caep2015/Express-Social-Network-App" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Code</a>
                <p className="card-text"><small className="text-muted">Created August 2017</small></p>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src={require('../images/books.png').default} alt="starwars app" style={{width: "100%", borderRadius: "5px"}}/>
              <div className="card-block">
                <h4 className="card-title">Book Collection Manager</h4>
                <p className="card-text">This Express app uses a Mongoose schema, lets you view your collection, add to your collection, edit items in your collection, and delete items from your collection.</p>
                <a href="https://github.com/caep2015/Mongoose-Collection-Database" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Collection Code</a>
                <p className="card-text"><small className="text-muted">Created August 2017</small></p>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src={require('../images/todolist.png').default} alt="" style={{width: "100%"}}/>
              <div className="card-block">
                <h4 className="card-title">Express Mustache Todo List</h4>
                <p className="card-text">This app uses Express and an in-memory data structure.</p>
                <a href="https://github.com/caep2015/Express-Mustache-Todo-List" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Todolist code</a>
                <p className="card-text"><small className="text-muted">Created July 2017</small></p>
              </div>
            </div>
          </div>
        </div>
        <div className='language-flex'>
          <div className="card-block">
            <h4 className="card-title">Languages</h4>
            <p className="card-text">Programming languages in the curriculum.</p>
            <p className="card-text">React | Redux | ES6 | JavaScript | NodeJs | HTML5 | CSS3  </p>
          </div>
          <div className="container">
            <img className="card-img-top" src={require('../images/tiycode.jpg').default} alt="Card" style={{width: "100%", hight: "25%"}} />
          </div>
        </div>
      </div>
    )
  }
}
