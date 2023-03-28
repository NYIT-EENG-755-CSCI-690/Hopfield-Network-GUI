import React from "react";

const ShowBall = ({ val_one, val_two, val_three, id }) => (
    <div className="ball-set">
        <div className="ball-one" key={id} style={{ "--i": id }}>
            {val_one}
        </div>
        <div className="ball-two" key={id} style={{ "--i": id }}>
            {val_two}
        </div>
        <div className="ball-three" key={id} style={{ "--i": id }}>
            {val_three}
        </div>
    </div>
);

export default ShowBall;
