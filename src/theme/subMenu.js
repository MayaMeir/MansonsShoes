import React from 'react';
import './theme.css';


function SubMenu(props) {

    return <div className="subMenu" id="submenu" onMouseEnter={() => props.onShowSubMenu()}>
        <ul>
            <li><a href="#home">Elvira</a></li>
            <li><a href="#news">Janis</a></li>
            <li><a href="#contact">Kurt</a></li>
            <li><a href="#about">Billy</a></li>
            <li><a href="#about">Crystal</a></li>
        </ul>
    </div>

}

export default SubMenu;