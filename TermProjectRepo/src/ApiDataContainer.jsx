import React from "react";
import ShowBallApi from "./ShowBallApi";

const ApiDataContainer = (props) => {
    return (
        <div className="balls-container">
            {props.ApiBallArr.map(
                (
                    ball // {balls: [{values: []},...],...}
                ) => (
                    <div>
                        {/* {ball.id} */}
                        <div>
                            {ball.values.map((val) => (
                                <ShowBallApi
                                    {...val}
                                    key={ball.id}
                                    id={ball.id}
                                />
                            ))}
                        </div>
                    </div>
                )
            )}
        </div>
    );
};

export default ApiDataContainer;
