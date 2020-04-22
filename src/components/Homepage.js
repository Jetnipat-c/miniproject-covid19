import React from 'react'
import fire from '../config/fire'
import 'bootstrap/dist/css/bootstrap.min.css'
import './homePage.css'
import { Nav, Navbar, Button, Form, FormControl } from 'react-bootstrap'
function HomePage () {
  const logout = () => {
    fire.auth().signOut()
  }
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
          <Button onClick={logout} variant='outline-info'>Logout</Button>
        </Form>
      </Navbar>
    </div>
  )
}
export default HomePage
