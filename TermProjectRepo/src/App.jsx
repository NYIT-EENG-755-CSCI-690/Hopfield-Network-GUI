import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom";
import Landing from "./Landing";
import BallContainer from "./BallContainer";

// TODO: replace dummy data. Migrate ball dataset to api server and map data onto landing page.

const App = () => {
    const [currentTime, setCurrentTime] = useState(1);

    useEffect(() => {
        fetch("/time")
            .then((res) => res.json())
            .then((data) => {
                setCurrentTime(data);
            });
    }, []);

    return (
        <div className="app">
            <div className="landing">
                <Landing />
                <BallContainer />
                <div>The current time is {currentTime.time} </div>.
            </div>
        </div>
    );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
