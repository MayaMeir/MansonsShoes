import React from 'react';
import './theme.css';


function SubMenuCata(props) {

    return <div className="subMenu" id="submenu" onMouseLeave={() => props.onShowSubMenuOff()} >
        <ul>
        <li><a href="/store/all">All Shoes</a></li>
            <li><a href="/store/heels">Heels</a></li>
            <li><a href="/store/boots">Boots</a></li>
            <li><a href="/store/sneakers">Sneakers</a></li>
            <li><a href="/store/flats">Flats</a></li>
            <li><a href="/store/platforms">Platforms</a></li>
        </ul>
    </div>

}

export default SubMenuCata;