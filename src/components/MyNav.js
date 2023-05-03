import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from "next/link";

export default function MyNav(){
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className={"position-sticky top-0 start-0"} style={{zIndex: "1"}}>
            <Container>
                <Navbar.Brand className="fw-bolder border-bottom border-3 border-danger"  >
                    <Link href="/" className="text-decoration-none text-danger">
                        BEGOINGTO
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link href="/about" className="nav-link">
                            <i className="bi bi-file-earmark-person"></i> About Us
                        </Link>
                        <Link href="/policy" className="nav-link">
                            <i className="bi bi-gear"></i> Policy
                        </Link>
                        <Link href="/news" className="nav-link">
                            <i className="bi bi-newspaper"></i> News
                        </Link>
                        <Link href="/movies" className="nav-link">
                            <i className="bi bi-camera-reels"></i> Movies
                        </Link>
                        <Link href="/products" className="nav-link">
                            <i className="bi bi-bag"></i> Product
                        </Link>
                    </Nav>
                    <div className="d-flex">
                        <Nav>
                            <Link href="/auth/login" className="nav-link">
                                <i className="bi bi-person-down"></i> Login
                            </Link>
                            <Link href="#" className="nav-link">
                                <i className="bi bi-person-plus"></i> Register
                            </Link>
                        </Nav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}