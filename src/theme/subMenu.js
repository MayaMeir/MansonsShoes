import React from 'react';
import './theme.css';


function SubMenu(props) {

    return <div className="subMenu" id="submenu" onMouseLeave={() => props.onShowSubMenuOff()} >
        <ul>
            <li><a href="/store/elvira">Elvira</a></li>
            <li><a href="/store/janis">Janis</a></li>
            <li><a href="/store/kurt">Kurt</a></li>
            <li><a href="/store/billy">Billy</a></li>
            <li><a href="/store/crystal">Crystal</a></li>
        </ul>
    </div>

}

export default SubMenu;