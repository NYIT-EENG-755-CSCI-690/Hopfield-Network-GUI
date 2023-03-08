import React from "react";
import { render } from "react-dom";
import Landing from "./Landing";

const App = () => (
    <div className="app">
        <div className="landing">
            <Landing />
        </div>
    </div>
);

render(<App />, document.getElementById("root"));
