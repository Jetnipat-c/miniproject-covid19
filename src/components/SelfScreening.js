import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from 'react'
import fire from '../config/fire'
const SelfScreening = () => {
    const [user, setUser] = useState('')

  const authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        setUser(user.email)
        //console.log('user', user.email)
      } else {
        setUser({ user: null })
      }
    })
  }
  useEffect(() => {
    authListener()
  }, [])
  return (
    <div className='container'>
      <style jsx>
        {`
          .container {
            @import url('https://fonts.googleapis.com/css2?family=Baloo+Bhaina+2:wght@500&display=swap');
            font-family: 'Baloo Bhaina 2', cursive;
            width: 820px;
            margin: 0 auto;
          }
          input {
            -webkit-box-shadow: 0 5px 6px -8px black;
            -moz-box-shadow: 0 5px 6px -8px black;
            box-shadow: 0 5px 6px -8px black;
          }
        `}
      </style>
      <h1>SelfScreening</h1>
      <from>
        <div class='form-group row'>
          <label for='staticEmail' class='col-sm-2 col-form-label'>
            Email
          </label>
          <div class='col-sm-10'>
            <input
              type='text'
              readonly
              class='form-control-plaintext'
              id='staticEmail'
              value={user}
            ></input>
          </div>
        </div>
        <div class='form-group row'>
          <label for='staticEmail' class='col-sm-2 col-form-label'>
            Email
          </label>
          <div class='col-sm-10'>
            <select class='custom-select'>
              <option selected>Open this select menu</option>
              <option value='1'>One</option>
              <option value='2'>Two</option>
              <option value='3'>Three</option>
            </select>
          </div>
        </div>
      </from>
    </div>
  )
}

export default SelfScreening
