import React from "react";
import { createRoot } from "react-dom";
import Search from "./Search";

const App = () => {
    return (
        <div className="app">
            <div className="landing">
                <Search />
            </div>
        </div>
    );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
