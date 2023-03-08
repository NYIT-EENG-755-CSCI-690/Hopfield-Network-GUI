import posed from "react-pose";
import styled from "styled-components";

const Box = styled(
    posed.div({
        top: { y: 50, scale: 1, backgroundColor: "#f9415d", opacity: 1 },
        bottom: {
            y: 300,
            scale: 1.5,
            backgroundColor: "#fcab10",
            opacity: 0.5,
        },
    })
)`
    background-color: #f9415d;
    position: absolute;

    ${(props) => `
      height: ${props.size}px;
      width: ${props.size}px;
      left: calc(50% - ${props.size / 2}px);
    `}
`;

export default Box;
