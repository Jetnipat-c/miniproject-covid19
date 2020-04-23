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
const apiUrl = 'https://api.covid19api.com/summary'

const fetcher = url => fetch(url).then(r => r.json());

const HomePage = () => {
  const logout = () => {
    fire.auth().signOut()
  }
 
  const { data, error } = useSWR(apiUrl, fetcher)


  if (!data) {
    return <p>not found</p>
  } else
    return (
      <div>
        <Navbar bg='dark' variant='dark'>
          <Navbar.Brand href='#home'>MiniProjet covid19</Navbar.Brand>
          <Nav className='mr-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#features'>Features</Nav.Link>
            <Nav.Link href='#pricing'>Pricing</Nav.Link>
          </Nav>
          <Form inline>
            <Button onClick={logout} variant='outline-info'>
              Logout
            </Button>
          </Form>
        </Navbar>

        <DataTable
        title="COVID19 Summary"
        columns={colums}
        data={data.Countries}
        pagination={true}
      />
        

        {/* <p>{JSON.stringify(data)}</p> */}
      </div>
    )
}
export default HomePage
