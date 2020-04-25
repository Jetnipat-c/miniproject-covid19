import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Nav, Navbar, Button, Form } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import firebase from 'firebase/app'
import fire from '../config/fire'
import 'firebase/firestore'
import { useForm } from 'react-hook-form'
import '../components/selfScreening.css'
if (firebase.apps.length === 0) firebase.initializeApp(fire)
export const firestore = firebase.firestore()
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

  const logout = () => {
    fire.auth().signOut()
  }

  const [tasks, setTasks] = useState([])
  const [name, setName] = useState('')

  const retriveData = () => {
    firestore
      .collection('tasks')
      .orderBy('id', 'asc')
      .onSnapshot(snapshot => {
        let myTask = snapshot.docs.map(d => {
          const { id, name } = d.data()
          return { id, name }
        })
        setTasks(myTask)
      })
  }

  useEffect(() => {
    retriveData()
  }, [])

  const renderTask = () => {
    if (tasks && tasks.length) {
      return tasks.map((task, index) => (
        <li key={index}>
          {task.id}:{task.name}{' '}
        </li>
      ))
    } else {
      return <div>No Task</div>
    }
  }
  const addTask = () => {
    let id = tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1
    firestore
      .collection('tasks')
      .doc(id + '')
      .set({ id, name })
  }

  const { register, handleSubmit } = useForm() // initialise the hook
  const onSubmit = register => {
    console.log('data', register)
  }

  return (
    <div>
      <Navbar bg='dark' variant='dark'>
        <Navbar.Brand>MiniProjet covid19</Navbar.Brand>
        <Nav className='mr-auto'>
          <Nav.Link href='/'>Summary</Nav.Link>
          <Nav.Link href='/selfScreening'>Self-Screening</Nav.Link>
        </Nav>
        <Form inline>
          <Nav className='mr-auto'>
            <Nav.Link>{user}</Nav.Link>
          </Nav>
          <Button onClick={logout} variant='outline-info'>
            Logout
          </Button>
        </Form>
      </Navbar>
      <h1>Todo</h1>
      <input
        type='text'
        name='name'
        onChange={e => setName(e.target.value)}
      ></input>
      <button onClick={addTask}>Submit</button>
      <ul> {renderTask()}</ul>

      <div className='container'>
        <h1>SelfScreening</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
{/* ############################################################################### */}
          <div className='form-group row'>
            <label className='col-sm-10 col-form-label'>Email</label>
            <div className='col-sm-10'>
              <input
                type='text'
                name='email'
                ref={register}
                placeholder={user}
                value={user}
                disabled
                className='form-control-plaintext'
              ></input>
            </div>
          </div>
{/* ############################################################################### */}
          <div className='form-group row'>
            <label className='col-sm-10 col-form-label'>เพศ (Sex)</label>
            <div className='col-sm-10'>
              <select name='sex' ref={register} className='custom-select'>
                <option value='1'>ชาย (Male)</option>
                <option value='2'>หญิง (Female)</option>
              </select>
            </div>
          </div>
{/* ############################################################################### */}
          
          <div>
            <input type='submit' />
          </div>

        </form>
      </div>
    </div>
  )
}

export default SelfScreening
