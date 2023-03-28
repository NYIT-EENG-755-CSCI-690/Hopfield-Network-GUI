import React from "react";
import preload from "./data.json";

// TODO: breakdown container into ball components, apply styling to each component

const BallContainer = () => (
    <div className="balls-container">
        {preload.balls.map((ball, i) => (
            <div className="ball-set">
                <div className="ball-one" key={i} style={{ "--i": i }}>
                    {ball.val_one}
                </div>
                <div className="ball-two" key={i} style={{ "--i": i }}>
                    {ball.val_two}
                </div>
                <div className="ball-three" key={i} style={{ "--i": i }}>
                    {ball.val_three}
                </div>
            </div>
        ))}
    </div>
);

export default BallContainer;
