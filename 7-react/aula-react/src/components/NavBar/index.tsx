import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <li className="nav-item">
              <NavLink to={"/"} className={"nav-link"}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/usuarios"} className={"nav-link"}>
                Usuários
              </NavLink>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
