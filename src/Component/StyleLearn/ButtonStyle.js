import styled from "styled-components";
const Button = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: #ccc;
  border: 2px solid #777;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: #ccc;
    color: white;
  }
`;
export default Button;
