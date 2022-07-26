import React from "react";
import './Header.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Header = () => {
    return (
        <div className="header">
            {/* HEADER LOGO */}
            <img src={require('./images/giphyLogo.png')} alt="logo"/>
            {/* HEADER MENU */}
            <div className="menu">
            {/* MENU ITEMS */}
                {/* INDIVIDIUAL ITEM  */}
                <div className="button-wrapper reactions">
                    <div className="menu-button hover-reactions">
                        <h2>Reactions</h2>
                    </div>
                </div>
                {/* ITEM END  */}

                {/* INDIVIDIUAL ITEM  */}
                <div className="button-wrapper entertainment">
                    <div className="menu-button hover-entertainment">
                        <h2>Entertainment</h2>
                    </div>
                </div>
                {/* ITEM END  */}

                {/* INDIVIDIUAL ITEM  */}
                <div className="button-wrapper sports">
                    <div className="menu-button hover-sports">
                        <h2>Sports</h2>
                    </div>
                </div>
                {/* ITEM END  */}

                {/* INDIVIDIUAL ITEM  */}
                <div className="button-wrapper stickers">
                    <div className="menu-button hover-stickers">
                        <h2>Stickers</h2>
                    </div>
                </div>
                {/* ITEM END  */}

                {/* INDIVIDIUAL ITEM  */}
                <div className="button-wrapper artists">
                    <div className="menu-button hover-artists">
                        <h2>Artists</h2>
                    </div>
                </div>
                {/* ITEM END  */}
                
                {/* 3 DOTS */}
                <div className="button-wrapper moreVertIcon">
                    <div className="menu-button hover-moreVertIcon">
                        < MoreVertIcon />
                    </div>
                    
                </div>

            </div> 
            {/* .menu */}

            {/* HEADER BUTTONS */}
            <div className="button">
                <h2>Create</h2>
            </div>
            {/* ------------- */}
            <div className="button">
                <h2>Create</h2>
            </div>
            {/* BUTTONS END */}

            {/* USER PROFILE */}
            <div className="profile">
                {/* AVATAR */}
                <img src={require('./images/avatar.png')} alt="avatar" />
                {/* PROFILE NAME */}
                <h2>Franc</h2>
                < KeyboardArrowDownIcon />
            </div>

        </div>
        // .header
    );
}

export default Header;