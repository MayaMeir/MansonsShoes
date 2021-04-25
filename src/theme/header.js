import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import ImgSrc from './pictures/logo1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './theme.css';
import SubMenu from './subMenu';
import SubMenuCata from './subMenuCata';
import { LinkContainer } from 'react-router-bootstrap';



function Header(props) {

    let [searchWord, setSearchWord] = useState('');

    let [isVisibleCollection, setIsVisibleCollection] = useState(false);
    let [isVisibleCatagories, setIsVisibleCatagories] = useState(false);


    const toggleVisibleCollections = () => {
        if (isVisibleCatagories) {
            toggleVisibleFalseCatagories();
        }
        setIsVisibleCollection(true)
    }

    const toggleVisibleCatagories = () => {
        if (isVisibleCollection) {
            toggleVisibleFalseCollection();
        }
        setIsVisibleCatagories(true)
    }

    const toggleVisibleFalseCollection = () => {
        setIsVisibleCollection(false)
    }

    const toggleVisibleFalseCatagories = () => {
        setIsVisibleCatagories(false)
    }

    return <header>

        <Navbar variant="dark" style={{ backgroundColor: "black" }}>
            <LinkContainer to="/">
                <Navbar.Brand href="/">
                    <img
                        alt={"logo"}
                        src={ImgSrc}
                        width={"450"}
                        height={"85"}
                        className={"d-inline-block align-top"}
                    />
                </Navbar.Brand>
            </LinkContainer>


            <Nav>
                <LinkContainer to="/about">
                    <Nav.Link className="links">About Us</Nav.Link>
                </LinkContainer>
                <Nav.Link href="/feed" className="links">Pics!</Nav.Link>
                <LinkContainer to="/store/all">
                    <Nav.Link className="links" id="collections" onMouseEnter={() => toggleVisibleCollections()} >Collections</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/store/all">
                    <Nav.Link className="links" onMouseEnter={() => toggleVisibleCatagories()}>Catagories</Nav.Link>
                </LinkContainer>
            </Nav>
            <Form inline onSubmit={(e) =>{
                e.preventDefault();
            }} >
                <FormControl type="text" id="searchBtn" placeholder="Search" className="mr-sm-2" onChange={(e)=>{
                    setSearchWord(e.target.value);
                }}/>
                <LinkContainer to="/store/all">
                    <Nav.Link>
                    <FontAwesomeIcon style={{ color: "white" }} icon={faSearch} onClick={props.searchFunc(searchWord)} />
                </Nav.Link>
                </LinkContainer>
            </Form>
            <div style={{ display: "flex", marginLeft: "auto" }}>
                <LinkContainer to="/cart">
                    <Nav.Link  >
                        <FontAwesomeIcon style={{ color: "white" }} icon={faShoppingCart} />
                    </Nav.Link>
                </LinkContainer>
            </div>

            <div id="contactLogin">
                <LinkContainer to="/contactUs">
                    <Nav.Link className="links" style={{ color: "white" }}>Contact Us</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/login">
                    <Nav.Link className="links" style={{ color: "white" }}>Login / Sign Up</Nav.Link>
                </LinkContainer>
            </div>
        </Navbar>
        {isVisibleCollection && <SubMenu onShowSubMenuOff={() => toggleVisibleFalseCollection()} />}
        {isVisibleCatagories && <SubMenuCata onShowSubMenuOff={() => toggleVisibleFalseCatagories()} />}
    </header>
}


export default Header;