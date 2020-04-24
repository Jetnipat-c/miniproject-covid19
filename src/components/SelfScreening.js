import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Nav, Navbar, Button, Form } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import firebase from 'firebase/app'
import fire from '../config/fire'
import 'firebase/firestore'
if ( firebase.apps.length === 0)
    firebase.initializeApp(fire)
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
       firestore.collection("tasks").orderBy('id', 'asc').onSnapshot(snapshot => {
           let myTask = snapshot.docs.map(d => {
               const { id, name } = d.data()
               return {id,name }
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
               <li key={index}>{task.id}:{task.name} </li>
           ))
       }
       else {
           return <div>No Task</div>
       }
   }
   const addTask = () => {
    let id = ( tasks.length ===0)?1:tasks[tasks.length-1].id+1
    firestore.collection("tasks").doc(id+'').set({id,name})
  }

  return (
      <div>
          <Navbar bg='dark' variant='dark'>
          <Navbar.Brand>MiniProjet covid19</Navbar.Brand>
          <Nav className='mr-auto'>
            <Nav.Link href='/' >Summary</Nav.Link>
            <Nav.Link href='/selfScreening'>Self-Screening</Nav.Link>
          </Nav>
          <Form inline>
          <Nav className='mr-auto'>
            <Nav.Link >{user}</Nav.Link>
          </Nav>
            <Button onClick={logout} variant='outline-info'>
              Logout
            </Button>
          </Form>
        </Navbar>
        <h1>Todo</h1>
        <input type="text" name="name" onChange={ (e)=> setName(e.target.value)}></input>
        <button onClick={addTask}>Submit</button>
        <ul > {renderTask()}</ul>
          <div className='container'>
      <style jsx>
        {`
          .container {
            @import url('https://fonts.googleapis.com/css2?family=Baloo+Bhaina+2:wght@500&display=swap');
            font-family: 'Baloo Bhaina 2', cursive;
            width: 820px;
            margin: 0 auto;
            padding-top: 15px;
          }
          input {
            -webkit-box-shadow: 0 5px 6px -8px black;
            -moz-box-shadow: 0 5px 6px -8px black;
            box-shadow: 0 5px 6px -8px black;
          }
          button{
              margin: 15px;
          }
        `}
      </style>
      <h1>SelfScreening</h1>
      <from>
        <div class='form-group row'>
          <label for='staticEmail' class='col-sm-10 col-form-label'>
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
          <label for='staticEmail' class='col-sm-10 col-form-label'>
          เพศ (Sex)
          </label>
          <div class='col-sm-10'>
            <select class='custom-select'>
            <option selected>Open this select menu</option>
              <option value='1'>ชาย (Male)</option>
              <option value='2'>หญิง (Female)</option>
            </select>
          </div>
        </div>

        
        <div class='form-group row'>
          <label for='staticEmail' class='col-sm-10 col-form-label'>
          1. ท่านมีไข้หรือไม่ Do you have Fever?
          </label>
          <div class='col-sm-10'>
            <select class='custom-select'>
            <option selected>Open this select menu</option>
              <option value='1'>ไม่มี NO</option>
              <option value='2'>มี YES</option>
            </select>
          </div>
        </div>
        <div class='form-group row'>
          <label for='staticEmail' class='col-sm-10 col-form-label'>
          2. ท่านมีอาการดังต่อไปนี้ หรือไม่ Do you have any of these Symptoms?
          </label>
          <div class='col-sm-10'>
            <select class='custom-select'>
            <option selected>Open this select menu</option>
              <option value='1'>ไอ Cough</option>
              <option value='2'>เจ็บคอ Sore throats</option>
              <option value='3'>น้ํามูกไหล Runny nose</option>
              <option value='4'>เหนื่อยหอบ Shortness of breath</option>
              <option value='5'>ไม่มีอาการเหล่านี้ None of these symtoms</option>
            
            </select>
          </div>
        </div>
        <div class='form-group row'>
          <label for='staticEmail' class='col-sm-10 col-form-label'>
          3. ท่านมีประวัติเดินทางมาจากประเทศจีน, ญี่ปุ่น, สิงคโปร์, เกาหลีใต้, ฮ่องกง, ไต้หวัน, มาเก๊า ,เยอรมัน, ฝรั่งเศส หรือในพื้นที่ที่มีการระบาดของโรคไวรัสโคโรนา สายพันธุ์ใหม่ 2019 ในช่วงเวลา 14 วัน ก่อนเริ่มป่วย ใช่หรือไม่ ? Do you have traveled from China, Japan, Singapore, Republic of Korea, HongKong, Taiwan, Macao, Germany, France or the Novel Coronavirus 2019 outbreak areas within the past 14 days before get sick ?
          </label>
          <div class='col-sm-10'>
            <select class='custom-select'>
              <option selected>Open this select menu</option>
              <option value='1'>One</option>
              <option value='2'>Two</option>
            </select>
          </div>
          <div class='col-sm-10'>
            <input
              type='text'
              readonly
              class='form-control-plaintext'
              id='staticEmail'
              placeholder='จากประเทศ (From)'
            ></input>
          </div>
        </div>
        <div class='form-group row'>
          <label for='staticEmail' class='col-sm-10 col-form-label'>
          4. ท่านมีประวัติสัมผัสใกล้ชิดกับผู้ป่วยที่ต้องสงสัยการติดเชื้อโรคไวรัสโคโรนาสายพันธุ์ใหม่ 2019 หรือมีอาชีพที่มีโอกาสสัมผัสนักท่องเที่ยวต่างชาติ หรือไม่? Do you have contacted with suspected or have career opportunities with foreign tourists?
          </label>
          <div class='col-sm-10'>
            <select class='custom-select'>
              <option selected>Open this select menu</option>
              <option value='1'> ใช่ Yes ( สัมผัสผู้ป่วย (contacted with suspected) )</option>
              <option value='2'> ใช่ Yes ( ประกอบอาชีพ (career opportunities with foreign tourists) )</option>
              <option value='3'>ไม่ No</option>
            </select>
          </div>
        </div>
        <button type="button" class="btn btn-success">
        <div>บันทึกและประเมินผลการเรียนของท่าน  </div>
        Save and self screening result </button>
        <button type="button" class="btn btn-danger">
            <div>ยกเลิก</div>
            cancel
        </button>
        
      </from>
    </div>
      </div>
    
  )
}

export default SelfScreening
