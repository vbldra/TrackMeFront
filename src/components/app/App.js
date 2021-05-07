import React, { useContext, useReducer, useState } from "react";
import { Route } from "react-router-dom";

import "./App.scss";

import Navbar from "../navbar/Navbar";
import HomeContainer from "../homeContainer/HomeContainer";

export const AppContext = React.createContext(null);

function App() {
    // starting point
    const initialEventsState = [
        { id: 1, title: "consumable" },
        { id: 2, title: "mental" },
        { id: 3, title: "social" },
        { id: 4, title: "physical" },
    ];
    const [topics, dispatch] = useReducer(topicsReducer, initialEventsState);
    const [popupProfileVisible, setPopupProfileVisible] = useState(false);

    // function to handle events
    function topicsReducer (state, action) {
        switch (action.type) {
            case "addNew":
                return state;
            default:
                throw new Error();
        }
    };

    return (
        <div className="App">
            <AppContext.Provider
                value={{
                    topics,
                    dispatch,
                    popupProfileVisible,
                    setPopupProfileVisible,
                }}
            >
                <Navbar />
                <HomeContainer />
            </AppContext.Provider>
        </div>
    );
}

export default App;
