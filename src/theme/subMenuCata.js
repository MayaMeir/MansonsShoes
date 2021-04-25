import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import './theme.css';


function SubMenuCata(props) {

    return <div className="subMenu" id="submenu" onMouseLeave={() => props.onShowSubMenuOff()} >
        <ul>
            <LinkContainer to="/store/all"><li><a style={{color:"white"}}>All Shoes</a></li></LinkContainer>
           <LinkContainer to="/store/Heels"><li><a style={{color:"white"}}>Heels</a></li></LinkContainer> 
           <LinkContainer to="/store/Boots"><li><a style={{color:"white"}}>Boots</a></li></LinkContainer> 
            <LinkContainer to="/store/Sneakers"><li><a style={{color:"white"}}>Sneakers</a></li></LinkContainer>
          <LinkContainer to="/store/Flats"><li><a style={{color:"white"}}>Flats</a></li></LinkContainer>  
           <LinkContainer to="/store/Platforms"><li><a style={{color:"white"}}>Platforms</a></li></LinkContainer>
        </ul>
    </div>

}

export default SubMenuCata;