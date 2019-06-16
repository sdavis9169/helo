import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './App.css'

import routes from './routes';
import Nav from './Components/Nav/Nav'


 class App extends Component {

  render() {
    return (
      <div className="App">
        {this.props.location.pathname !== '/' && <Nav />}
        {routes}
      </div>
    )
  }
}

export default withRouter(App)
