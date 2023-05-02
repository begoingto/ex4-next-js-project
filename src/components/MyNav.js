import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from "next/link";

export default function MyNav(){
    return (
        <Navbar bg="light" expand="lg" className={"position-sticky top-0 start-0"} style={{zIndex: "1"}}>
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
                    </Nav>
                    <div className="d-flex">
                        <Nav>
                            <Link href="/auth/login" className="nav-link">
                                <i className="bi bi-person-down"></i> Login
                            </Link>
                        </Nav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}