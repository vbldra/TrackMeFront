import React, {useState} from "react";
import { Route } from "react-router-dom";

import "./App.scss";

import Navbar from "../navbar/Navbar";
import HomeContainer from "../homeContainer/HomeContainer";

function App() {
    const [ popupProfileVisible, setPopupProfileVisible ] = useState(false); 

    return (
        <div className="App">
            <Navbar visible={popupProfileVisible} setVisible={setPopupProfileVisible} />
            <HomeContainer />
        </div>
    );
}

export default App;
