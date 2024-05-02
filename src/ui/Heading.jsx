import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.type === "h1" &&
    css`
      font-size: 40px;
      font-weight: 600;
    `}
  ${(props) =>
    props.type === "h2" &&
    css`
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 15px;
    `}
    ${(props) =>
    props.type === "h3" &&
    css`
      font-size: 15px;
      font-weight: 600;
      margin-top: 10px;
    `}
  line-height: 1.4
`;
export default Heading;
