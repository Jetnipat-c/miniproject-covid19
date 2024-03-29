import React, { Component } from 'react';
import './App.css';
import LoginPage from './components/LoginPage'
import { Route } from 'react-router-dom';
import HomePage from './components/Homepage'
import SelfScreening from './components/SelfScreening.js'
import fire from './config/fire'
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    this.authListener()
  }


  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user })
        //console.log('user',user.email)
      }
      else {
        this.setState({ user: null })
      }
    })
  }


  render() {
    if (this.state.user == null) {
      return (
        <div>
          <LoginPage />
        </div>

      );
    }
    return (
      <div>
        <div>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/SelfScreening" component={SelfScreening} />
        </div>
      </div>
    )
  }
}
export default App

