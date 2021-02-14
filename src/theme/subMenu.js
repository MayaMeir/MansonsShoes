import React from 'react';
import './theme.css';


function SubMenu(props) {

    return <div className="subMenu" id="submenu" onMouseLeave={() => props.onShowSubMenuOff()} >
        <ul>
            <li><a href="/store">Elvira</a></li>
            <li><a href="/store">Janis</a></li>
            <li><a href="/store">Kurt</a></li>
            <li><a href="/store">Billy</a></li>
            <li><a href="/store">Crystal</a></li>
        </ul>
    </div>

}

export default SubMenu;