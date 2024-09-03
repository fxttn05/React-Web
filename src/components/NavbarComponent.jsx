import {Navbar, Container, Nav} from 'react-bootstrap';
import {navLinks} from '../data/index';
import { NavLink } from 'react-router-dom';

const NavbarComponent = () => {
return (
<Navbar expand="lg">
  <Container>
    <Navbar.Brand href="/" className='fs-3 fw-bold'>Ngoding.</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mx-auto text-center">
        {navLinks.map((link) => {
        return (
        <div className='nav-link' key={link.id}>
          <NavLink to={link.path} className={({ isActive, isPending })=> isPending ? "pending" : isActive ? "active" : ""} end>
              {link.text}
          </NavLink>
        </div>
        );
        })}
      </Nav>

      <div className='text-center'>
        <button className='btn btn-outline-danger rounded01'> Join With Us</button>
      </div>
    </Navbar.Collapse>
  </Container>
</Navbar>
)
}

export default NavbarComponent