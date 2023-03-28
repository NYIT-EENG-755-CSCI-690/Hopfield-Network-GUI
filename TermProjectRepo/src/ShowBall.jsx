import { useState } from "react";
import { motion } from "framer-motion";

const ShowBall = ({ val_one, val_two, val_three, id }) => {
    const [move, setMove] = useState(false);

    return (
        <div className="ball-set">
            <motion.div
                animate={{
                    x: move ? 200 : 0,
                }}
                onClick={() => setMove(!move)}
            >
                <div className="ball-one" key={id} style={{ "--i": id }}>
                    {val_one}
                </div>
            </motion.div>
            <div className="ball-two" key={id} style={{ "--i": id }}>
                {val_two}
            </div>
            <div className="ball-three" key={id} style={{ "--i": id }}>
                {val_three}
            </div>
        </div>
    );
};

export default ShowBall;
