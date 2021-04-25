import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import './theme.css';


function SubMenu(props) {

    return <div className="subMenu" id="submenu" onMouseLeave={() => props.onShowSubMenuOff()} >
        <ul>
           <LinkContainer to="/store/Elvira"><li><a style={{color:"white"}}> Elvira</a></li></LinkContainer> 
           <LinkContainer to="/store/Janis"><li><a style={{color:"white"}}>Janis</a></li></LinkContainer> 
          <LinkContainer to="/store/Kurt"><li><a style={{color:"white"}}>Kurt</a></li></LinkContainer>  
           <LinkContainer to="/store/Billy"><li><a style={{color:"white"}}>Billy</a></li></LinkContainer> 
          <LinkContainer to="/store/Crystal"><li><a style={{color:"white"}}>Crystal</a></li></LinkContainer>  
        </ul>
    </div>

}

export default SubMenu;