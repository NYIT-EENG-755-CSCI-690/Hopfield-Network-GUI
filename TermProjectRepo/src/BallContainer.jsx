import React from "react";
import preload from "./data.json";
import ShowBall from "./ShowBall";

const BallContainer = () => {
    let ballsArr = preload.balls;
    return (
        <div className="balls-container">
            {ballsArr.map(
                (
                    ball // {balls: [{values: []},...],...}
                ) => (
                    <div>
                        {/* {ball.id} */}
                        <div>
                            {ball.values.map((val) => (
                                <ShowBall {...val} key={ball.id} id={ball.id} />
                            ))}
                        </div>
                    </div>
                )
            )}
        </div>
    );
};

export default BallContainer;
