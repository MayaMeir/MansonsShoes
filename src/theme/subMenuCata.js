import React from 'react';
import './theme.css';


function SubMenuCata(props) {

    return <div className="subMenu" id="submenu" onMouseLeave={() => props.onShowSubMenuOff()} >
        <ul>
            <li><a href="#home">Heels</a></li>
            <li><a href="#news">Boots</a></li>
            <li><a href="#contact">Sneakers</a></li>
            <li><a href="#about">Flats</a></li>
            <li><a href="#about">Platforms</a></li>
        </ul>
    </div>

}

export default SubMenuCata;