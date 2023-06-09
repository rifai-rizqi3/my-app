import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="home">RNRIFAI</Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="navbar-link">
              <NavLink
                style={{ color: "black", textDecoration: "none" }}
                to="/"
              >
                Home<i className="ri-home-3-line"></i>
              </NavLink>
            </Nav.Link>

            <Nav.Link className="navbar-link" to="/experience">
              <NavLink
                style={{ color: "black", textDecoration: "none" }}
                to="/experience"
              >
                Experience<i className="ri-user-line"></i>
              </NavLink>
            </Nav.Link>

            <Nav.Link className="navbar-link" to="/achievement">
              <NavLink
                style={{ color: "black", textDecoration: "none" }}
                to="/achievement"
              >
                Achievement<i class="ri-award-fill"></i>
              </NavLink>
            </Nav.Link>

            <Nav.Link className="navbar-link" href="project">
              Project<i className="ri-list-check-2"></i>
            </Nav.Link>
          </Nav>

          <span className="navbar-text">
            <NavLink to="/contact">
              <button>
                <span>
                  Contact Me<i className="ri-contacts-book-line"></i>
                </span>
              </button>
            </NavLink>
          </span>
        </Navbar.Collapse>
        {/* <div className='theme-toggle'>
          <i class="ri-moon-line"></i>
        </div> */}
      </Container>
    </Navbar>
  );
};

export default Navigation;
