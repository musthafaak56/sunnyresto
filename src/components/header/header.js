import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function header() {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="https://www.pngjoy.com/pngl/818/20430638_sunny-sunnys-restaurant-sunnys-restaurant-sunnys-restaurant-transparent.png"
              width="60"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Sunny's Restaurant
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default header