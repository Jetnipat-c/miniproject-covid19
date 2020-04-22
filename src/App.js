import React from 'react';
import './App.css';
import LoginPage from './components/LoginPage'
import { Route } from 'react-router-dom';
import HomePage from './components/Homepage'

function App() {
  return (
    <div >
      <div>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
      </div>
    </div>
  );
}

export default App;
