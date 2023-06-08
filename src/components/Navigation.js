import {Container, Nav, Navbar} from 'react-bootstrap';
import {NavLink} from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">Rizqi Nur Rifa'i</Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='navbar-link' href="#home">Home<i className="ri-home-3-line"></i></Nav.Link>
            <Nav.Link className='navbar-link' href="#about">About Me<i className="ri-user-line"></i></Nav.Link>
            <Nav.Link className='navbar-link' href="#project">Project<i className="ri-list-check-2"></i></Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <NavLink to="/contact">
              <button><span>Contact Me<i className="ri-contacts-book-line"></i></span></button>
            </NavLink>
          </span>
        </Navbar.Collapse>
        <div className='theme-toggle'>
          <i class="ri-moon-line"></i>
        </div>
      </Container>
    </Navbar>
  );
}

export default Navigation;