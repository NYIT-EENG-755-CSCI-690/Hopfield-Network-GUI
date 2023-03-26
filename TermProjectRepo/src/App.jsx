import React from "react";
import { createRoot } from "react-dom";

const App = () => (
    <div className="app">
        <div className="landing">
            <Landing />
        </div>
    </div>
);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
