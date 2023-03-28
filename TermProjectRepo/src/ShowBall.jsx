import React from "react";

const ShowBall = (props) => (
    <div className="ball-set">
        <div className="ball-one" key={props.i} style={{ "--i": props.i }}>
            {props.ball.val_one}
        </div>
        <div className="ball-two" key={props.i} style={{ "--i": props.i }}>
            {props.ball.val_two}
        </div>
        <div className="ball-three" key={props.i} style={{ "--i": props.i }}>
            {props.ball.val_three}
        </div>
    </div>
);

export default ShowBall;
