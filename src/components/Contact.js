import React, { Component } from 'react'

export default class Contact extends Component {
  render () {
    return (
      <div className='contact-info'>
        <div className="card">
        <img className="card-img-top" src={require('../images/4000.jpg').default} alt="Contact Header" style={{width: "100%", borderRadius: "5px"}} />
          <div className="card-block">
            <h4 className="card-title-contact">Contact</h4>
          </div>
        </div>
        <div className='list-information' style={{marginTop: '1%'}}>
            <ul className="list-group">
              <li className="list-group-item">Name: Carlota Pearl</li>
              <li className="list-group-item">Phone: (see resume)</li>
              <li className="list-group-item">Email: email@carlotapearl.com</li>         
            </ul>
        </div>
      </div>
    )
  }
}
