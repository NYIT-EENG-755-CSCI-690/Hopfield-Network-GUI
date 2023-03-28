import React from "react";
import { createRoot } from "react-dom";
import Landing from "./Landing";
import BallContainer from "./BallContainer";

const App = () => (
    <div className="app">
        <div className="landing">
            <Landing />
            <BallContainer />
        </div>
    </div>
);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
