import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'

import {HashRouter, Route, Switch} from 'react-router-dom'
import App from './components/App'
import BaseLayout from './components/BaseLayout'
import Home from './components/Home'
import About from './components/About'
import UdacityPortfolio from './components/UdacityPortfolio'
import TIYPortfolio from './components/TIYPortfolio'
import Contact from './components/Contact'

ReactDOM.render(
  <HashRouter>
    <BaseLayout>
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/home' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/udacityportfolio' component={UdacityPortfolio} />
        <Route path='/tiyportfolio' component={TIYPortfolio} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </BaseLayout>
  </HashRouter>, 
  document.getElementById('root')
)

