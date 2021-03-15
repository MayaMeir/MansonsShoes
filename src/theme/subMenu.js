import React from 'react';
import './theme.css';


function SubMenu(props) {

    return <div className="subMenu" id="submenu" onMouseLeave={() => props.onShowSubMenuOff()} >
        <ul>
            <li><a href="/store/Elvira">Elvira</a></li>
            <li><a href="/store/Janis">Janis</a></li>
            <li><a href="/store/Kurt">Kurt</a></li>
            <li><a href="/store/Billy">Billy</a></li>
            <li><a href="/store/Crystal">Crystal</a></li>
        </ul>
    </div>

}

export default SubMenu;