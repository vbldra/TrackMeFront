import React from "react";

import "./navbar.scss";

import PopupProfile from "../popupProfile/PopupProfile";

function Navbar({ visible, setVisible }) {

    // need to add a code to close popup clicking outside of the popup menu
    // https://www.cluemediator.com/detect-click-outside-a-react-component-using-react-hooks

    function handleClick() {
        setVisible(!visible);
    }



    return (
        <div className="navbar">
            <p>Navigation menu here</p>
            <button className="profile-btn" onClick={handleClick}>
                Profile
            </button>
            {visible && <PopupProfile />}
        </div>
    );
}

export default Navbar;
