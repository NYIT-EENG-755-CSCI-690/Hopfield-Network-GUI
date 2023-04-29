import { useState } from "react";
import { motion } from "framer-motion";

const ShowBallApi = ({ val, id }) => {
    const [move, setMove] = useState(false);
    if (val === "0") {
        return (
            <motion.div
                animate={{
                    x: move ? 200 : 0,
                }}
                onClick={() => setMove(!move)}
            >
                <div className="ball-one-api" key={id} style={{ "--i": id }}>
                    {val}
                </div>
            </motion.div>
        );
    } else {
        return (
            <div className="ball-two-api" key={id} style={{ "--i": id }}>
                {val}
            </div>
        );
    }
};

export default ShowBallApi;
