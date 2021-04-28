import React from "react";
import { Route } from "react-router-dom";

import "./App.scss";

import Navbar from "../navbar/Navbar";
import HomeContainer from "../homeContainer/HomeContainer";

function App() {
    return (
        <div className="App">
            <Navbar />
            <HomeContainer />
        </div>
    );
}

export default App;
