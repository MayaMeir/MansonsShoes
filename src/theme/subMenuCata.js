import React from 'react';
import './theme.css';


function SubMenuCata(props) {

    return <div className="subMenu" id="submenu" onMouseLeave={() => props.onShowSubMenuOff()} >
        <ul>
        <li><a href="/store/all">All Shoes</a></li>
            <li><a href="/store/Heels">Heels</a></li>
            <li><a href="/store/Boots">Boots</a></li>
            <li><a href="/store/Sneakers">Sneakers</a></li>
            <li><a href="/store/Flats">Flats</a></li>
            <li><a href="/store/Platforms">Platforms</a></li>
        </ul>
    </div>

}

export default SubMenuCata;