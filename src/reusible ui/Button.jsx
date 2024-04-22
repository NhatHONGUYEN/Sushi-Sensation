import styled from "styled-components";

const ButtonStyled = styled.button`
  border: none;
  position: absolute;
  right: 0;
  bottom: 0;
  cursor: pointer;
  background: black;
  color: #efe7d2;
  width: 170px;
  height: 30px;
  border-top-left-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  transform: scale(1);
  transition: transform 0.5s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  .spacer {
    margin-right: 10px;
  }
`;

const Button = ({ children, ...props }) => {
  return <ButtonStyled {...props}>{children}</ButtonStyled>;
};

export default Button;
