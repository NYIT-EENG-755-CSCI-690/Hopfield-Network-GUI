import React, { Component } from "react";
import Box from "./Box";

class Landing extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pose: "top",
        };

        this.handleMouseEnter = this.handleMouseEnter.bind(this);
    }
    handleMouseEnter() {
        this.setState({
            pose: this.state.pose === "top" ? "bottom" : "top",
        });
    }
    render() {
        return (
            <div className="app">
                <div className="landing">
                    <h1>Welcome to our Term Project!</h1>
                    <Box
                        size={100}
                        pose={this.state.pose}
                        onMouseEnter={this.handleMouseEnter}
                    />
                    ;
                </div>
            </div>
        );
    }
}

export default Landing;
