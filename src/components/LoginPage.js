import React, { useState } from 'react'
function LoginPage () {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  console.log(username)
  console.log(password)
  return (
    <div>
      LoginPage
      <div>
        <input type='text' onChange={e => setUsername(e.target.value)}></input>
      </div>
      <div>
        <input
          type='password'
          onChange={e => setPassword(e.target.value)}
        ></input>
      </div>
      <div>
        <button type='submit'>SingIn</button>
      </div>
    </div>
  )
}
export default LoginPage
