import React from 'react';
import './theme.css';


function SubMenuCata(props) {

    return <div className="subMenu" id="submenu" onMouseLeave={() => props.onShowSubMenuOff()} >
        <ul>
        <li><a href="/store">All Shoes</a></li>
            <li><a href="/store">Heels</a></li>
            <li><a href="/store">Boots</a></li>
            <li><a href="/store">Sneakers</a></li>
            <li><a href="/store">Flats</a></li>
            <li><a href="/store">Platforms</a></li>
        </ul>
    </div>

}

export default SubMenuCata;