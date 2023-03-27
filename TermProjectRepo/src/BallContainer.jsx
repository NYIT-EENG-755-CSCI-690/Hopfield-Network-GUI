import React from "react";
import preload from "./data.json";

// TODO: breakdown container into ball components, apply styling to each component

const BallContainer = () => (
    <div className="balls">
        {preload.balls.map((ball, i) => (
            <div>
                <div className="ball" key={i} style={{ "--i": i }}>
                    {ball.val_one}
                </div>
                <div className="ball" key={i} style={{ "--i": i }}>
                    {ball.val_two}
                </div>
                <div className="ball" key={i} style={{ "--i": i }}>
                    {ball.val_three}
                </div>
            </div>
        ))}
    </div>
);

export default BallContainer;
