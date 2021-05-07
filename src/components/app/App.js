import React, { useContext, useReducer, useState } from "react";
import { Route } from "react-router-dom";

import "./App.scss";

import Navbar from "../navbar/Navbar";
import HomeContainer from "../homeContainer/HomeContainer";

export const AppContext = React.createContext(null);

function App() {
    const initialEventsState = [
        { id: 1, name: "consumable" },
        { id: 2, name: "mental" },
        { id: 3, name: "social" },
        { id: 4, name: "physical" },
    ];
    const [events, setEvents] = useReducer(initialEventsState);
    const [popupProfileVisible, setPopupProfileVisible] = useState(false);

    return (
        <div className="App">
            <AppContext.Provider value={{events, popupProfileVisible, setPopupProfileVisible}}>
                <Navbar />
                <HomeContainer />
            </AppContext.Provider>
        </div>
    );
}

export default App;
