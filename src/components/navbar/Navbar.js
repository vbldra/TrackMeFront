import React, { useContext } from "react";

import "./navbar.scss";

import { AppContext } from "../app/App";
import PopupProfile from "../popupProfile/PopupProfile";


function Navbar() {
    // need to add a code to close popup clicking outside of the popup menu
    // https://www.cluemediator.com/detect-click-outside-a-react-component-using-react-hooks
    
    const { popupProfileVisible, setPopupProfileVisible} = useContext(AppContext)

    function handleClick() {
        setPopupProfileVisible(!popupProfileVisible);
    }

    return (
        <div className="navbar">
            <p>Navigation menu here</p>
            <button className="profile-btn" onClick={handleClick}>
                Profile
            </button>
            {popupProfileVisible && <PopupProfile />}
        </div>
    );
}

export default Navbar;
