import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import ImgSrc from './pictures/174855.svg';
import logo from './pictures/manson.png';
import './theme.css';





function Footer() {
    return <footer>
        <Navbar variant="dark" style={{ backgroundColor: "black" }} className="footer">
            <Navbar.Brand href="/">
                <img
                    alt={"logo"}
                    src={logo}
                    width={"330"}
                    height={"90"}
                    className={"d-inline-block align-top"}
                />
            </Navbar.Brand>
            <div style={{textAlign: "center", width: "50%"}}>
            <p style={{ color: "gray", fontSize: "18px"}}>Copyright © 2021 MayaMeir. All Rights Reserved.</p>
            </div>
            <div style={{ display: "flex", marginLeft: "auto"}}>
                <Nav.Link href="https://www.facebook.com/Maya.Meir483/" style={{ fontSize: "30px" }} target="_blank">
                    <FontAwesomeIcon style={{ color: "blue" }} icon={faFacebook} />
                </Nav.Link>
                <Nav.Link href="https://www.instagram.com/mayameirr/" id="instaLogo" target="_blank">
                    
                    <img 
                        alt={"logo"}
                        src={ImgSrc}
                        width={"30"}
                        height={"30"}
                        className={"d-inline-block align-top"}
                    />
                </Nav.Link>
            </div>
        </Navbar>
    </footer>
}


export default Footer;