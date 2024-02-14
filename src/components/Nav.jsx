import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import svg from '../assets/react.svg'

const Nav = () => {
  return (
    <>
      <Navbar className="bg-body-tertiary" style={{backgroundColor: 'blue' , color: 'white'}}>
        <Container style={{display: 'flex', justifyContent: 'Space-between', margin: '10px 30px', fontSize: '2rem', padding:'10px' }}>
          <Navbar.Brand >React</Navbar.Brand>

          <Navbar.Collapse className="justify-content-end">
            <img src={svg} alt="logo" />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Nav