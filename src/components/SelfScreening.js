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
              <option value='1'>One</option>
              <option value='2'>Two</option>
              <option value='3'>Three</option>
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
              <option value='1'>One</option>
              <option value='2'>Two</option>
              <option value='3'>Three</option>
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
              <option value='1'>One</option>
              <option value='2'>Two</option>
              <option value='3'>Three</option>
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
              <option value='3'>Three</option>
            </select>
          </div>
        </div>
        <div class='form-group row'>
          <label for='staticEmail' class='col-sm-10 col-form-label'>
          4. ท่านมีประวัติสัมผัสใกล้ชิดกับผู้ป่วยที่ต้องสงสัยการติดเชื้อโรคไวรัสโคโรนาสายพันธุ์ใหม่ 2019 หรือมีอาชีพที่มีโอกาสสัมผัสนักท่องเที่ยวต่างชาติ หรือไม่? Do you have contacted with suspected or have career opportunities with foreign tourists?
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
