import colors from "./style/color";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
from{
    transform: rotate(0deg);
}

to{
    transform: rotate(360deg);
}
`;

const Loader = styled.div`
  border: 6px solid ${colors.primary};
  border-radius: 100%;
  border-bottom-color: transparent;
  padding: 10px;
  animation: ${rotate} 1s infinite ease-in-out;
`;

export default Loader;
