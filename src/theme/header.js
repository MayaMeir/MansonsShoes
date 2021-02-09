import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import ImgSrc from './pictures/logo1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './theme.css';


function Header() {
    return <header>

        <Navbar variant="dark" style={{ backgroundColor: "black"}}>

            <Navbar.Brand href="#home"> <img
                alt={"logo"}
                src={ImgSrc}
                width={"450"}
                height={"85"}
                className={"d-inline-block align-top"}
            /></Navbar.Brand>
            <Nav>
                <Nav.Link href="" className="links">About Us</Nav.Link>
                <Nav.Link href="" className="links" id="collections">Collections</Nav.Link>
                <Nav.Link href="" className="links">Catagories</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" id="searchBtn" placeholder="Bring Me The Search" className="mr-sm-2" />
                <Nav.Link href="" >
                    <FontAwesomeIcon style={{ color: "white" }} icon={faSearch} />
                </Nav.Link>
            </Form>
            <div style={{ display: "flex", marginLeft: "auto" }}>
                <Nav.Link href="cart" >
                    <FontAwesomeIcon style={{ color: "white" }} icon={faShoppingCart} />
                </Nav.Link>
            </div>
            {/* to do - change font color */}
            <div id="contactLogin">
                <Nav.Link href="" className="links">Contact Us</Nav.Link>
                <Nav.Link href="" className="links">Login</Nav.Link>

                <div>
                </div>

            </div>
        </Navbar>
    </header>
}


export default Header;