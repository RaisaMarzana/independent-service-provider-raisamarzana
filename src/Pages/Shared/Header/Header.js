import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMortarPestle } from '@fortawesome/free-solid-svg-icons'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <>
            <Navbar bg="light" collapseOnSelect expand="lg" sticky='top' variant="light">
                <Container >
                    <Navbar.Brand as={CustomLink} to="/">Beautician<FontAwesomeIcon className="ms-2" icon={faMortarPestle} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link as={CustomLink} to="/home#services">Services</Nav.Link>
                            <Nav.Link as={CustomLink} to="blogs">Blogs</Nav.Link>
                            <Nav.Link as={CustomLink} to="about">About</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user ?
                                    < button className='btn btn-link text-dark text-decoration-none' onClick={handleSignOut}>Sign out</button>
                                    : <Nav.Link eventKey={2} as={CustomLink} to="login">
                                        Sign in
                                    </Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;