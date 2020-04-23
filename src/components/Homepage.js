import React from 'react'
import fire from '../config/fire'
import 'bootstrap/dist/css/bootstrap.min.css'
import './homePage.css'
import { Nav, Navbar, Button, Form } from 'react-bootstrap'
import axios from 'axios'
import fetch from 'unfetch'
import useSWR from 'swr'
import DataTable from 'react-data-table-component'
import colums from '../components/Datatablecolums'
import DataChart from '../components/DataChart'
import TimeSeriesChart from '../components/TimeseriesChart'
import Loading from '../components/Loading'
import { useState, useEffect } from 'react'
const apiUrl = 'https://api.covid19api.com/summary'
const timeseriesChart = 'https://pomber.github.io/covid19/timeseries.json'
const fetcher = url => fetch(url).then(r => r.json())

const HomePage = () => {
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

  const { data, error } = useSWR(apiUrl, fetcher)
  const { data: timeseries } = useSWR(timeseriesChart, fetcher)

  if (!data) {
    return <Loading />
  } else
    return (
      <div>
        <Navbar bg='dark' variant='dark'>
          <Navbar.Brand href='#home'>MiniProjet covid19</Navbar.Brand>
          <Nav className='mr-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#features'>Features</Nav.Link>
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
        <div className='container'>
          <style jsx>
            {`
            .container{
              @import url('https://fonts.googleapis.com/css2?family=Baloo+Bhaina+2:wght@500&display=swap');
              font-family: 'Baloo Bhaina 2', cursive;
              width: 820px;
              margin: 0 auto;
          `}
          </style>
          <div>
            <DataTable
              title='COVID19 Summary'
              columns={colums}
              data={data.Countries}
              pagination={true}
            />

            <DataChart data={data.Countries} title='Surmmary' />
            <TimeSeriesChart
              data={timeseries.Thailand}
              title='Summary Thailand'
            />
            {/* <p>{JSON.stringify(data)}</p> */}
          </div>
        </div>
      </div>
    )
}
export default HomePage
