import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import ImgSrc from './pictures/logo1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './theme.css';


function Header(props) {
    return <header>

        <Navbar variant="dark" style={{ backgroundColor: "black"}}>

            <Navbar.Brand href="/"> <img
                alt={"logo"}
                src={ImgSrc}
                width={"450"}
                height={"85"}
                className={"d-inline-block align-top"}
            /></Navbar.Brand>
            <Nav>
                <Nav.Link href="/about" className="links">About Us</Nav.Link>
                <Nav.Link href="/feed" className="links">Pics!</Nav.Link>
                <Nav.Link href="/store" className="links" id="collections" onMouseEnter={() => props.onShowSubMenuCollection()} >Collections</Nav.Link>
                <Nav.Link href="/store" className="links" onMouseEnter={() => props.onShowSubMenuCatagories()}>Catagories</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" id="searchBtn" placeholder="Search" className="mr-sm-2" />
                <Nav.Link href="" >
                    <FontAwesomeIcon style={{ color: "white" }} icon={faSearch} />
                </Nav.Link>
            </Form>
            <div style={{ display: "flex", marginLeft: "auto" }}>
                <Nav.Link href="/cart" >
                    <FontAwesomeIcon style={{ color: "white" }} icon={faShoppingCart} />
                </Nav.Link>
            </div>
            <div id="contactLogin">
                <Nav.Link href="/contactUs" className="links" style={{ color: "white" }}>Contact Us</Nav.Link>
                <Nav.Link href="/login" className="links" style={{ color: "white" }}>Login Sign Up</Nav.Link>
            </div>
        </Navbar>
    </header>
}


export default Header;