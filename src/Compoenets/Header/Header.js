import React from 'react';
import { FaBars } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdNotifications, MdApps } from 'react-icons/md'
const Header = () => {
    return (
        <div className="border border-dark header"> 
            <FaBars className="header__menu" size={26}/>
            <img src={youtube} alt="" className="header_logo" />
        </div>
    );
};

export default Header;