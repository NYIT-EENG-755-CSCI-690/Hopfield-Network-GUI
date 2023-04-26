import React from "react";
import ShowBall from "./ShowBall";

const BallContainer = (props) => {
    return (
        <div className="balls-container">
            {props.ballArr.map(
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
