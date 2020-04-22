import React, { useState } from 'react'
import firebase from 'firebase/app';
import fire from '../config/fire'
function LoginPage () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const signin = (e) =>{
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(email, password).then((u) => {
        console.log('usingin',u)
    }).catch((err) => {
        console.log(err)
    })
  }
  const signup = e => {

    e.preventDefault()
    fire.auth().createUserWithEmailAndPassword(email, password).then((u) => {
        console.log('usingup',u)
    }).catch((err) => {
        console.log(err)
    })
}

  return (
    <div>
      LoginPage
      <div>
        <input type="text" name="email" onChange={e => setEmail(e.target.value)}></input>
      </div>
      <div>
        <input type="password" name="password" onChange={e => setPassword(e.target.value)}
        ></input>
      </div>
      <div>
        <button type='submit' onClick={signin}>SingIn</button>
        <button type='submit' onClick={signup}>Signup</button>
      </div>
    </div>
  )
}
export default LoginPage
