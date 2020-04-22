import React from 'react';
import fire from '../config/fire';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Nav, Navbar, Button, Form, FormControl } from 'react-bootstrap'
function HomePage () {
    const logout = () => {
        fire.auth().signOut();
    }
    return(
        <div>
           <Navbar>
        <Navbar.Brand href='/'>Navbar with text</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
          <Navbar.Text>
            Signed in as: <a href='#login'>Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
            <button onClick={logout}>Logout</button>
        </div>
    )
}
export default HomePage;