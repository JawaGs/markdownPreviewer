import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Post from './components/Post'

export default class App extends Component {
 

    render(){
      return(
          <div className='container'>
             <Router>
               <Switch>
                 <Route exact path='/' component={ Home } />
                 <Route exact path='/post/:postId' component={ Post } />
               </Switch>
             </Router>
          </div>
      ) 
    }
}