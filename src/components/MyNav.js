import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from "next/link";

export default function MyNav(){
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand className="fw-bolder border-bottom border-3 border-danger"  >
                    <Link href="/" className="text-decoration-none">
                        BEGOINGTO
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link href="/about" className="nav-link">
                            About Us
                        </Link>
                        <Link href="/policy" className="nav-link">
                            Policy
                        </Link>
                        <Link href="/news" className="nav-link">
                            News
                        </Link>
                        <Link href="/movies" className="nav-link">
                            Movies
                        </Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}