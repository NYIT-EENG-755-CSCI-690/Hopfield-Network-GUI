import React from "react";
import ShowBall from "./ShowBall";
import preload from "./data.json";

// TODO: breakdown container into ball components, apply styling to each component

const BallContainer = () => (
    <div className="balls-container">
        {preload.balls.map((ball, i) => (
            <ShowBall ball={ball} i={i} />
        ))}
    </div>
);

export default BallContainer;
