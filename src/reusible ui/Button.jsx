import styled from "styled-components";
import { theme } from "../theme";

export const Button = ({ children, ...props }) => {
  return <ButtonStyled {...props}>{children}</ButtonStyled>;
};

const ButtonStyled = styled.button`
  border: none;
  position: absolute;
  right: 0;
  bottom: 0;
  cursor: pointer;
  height: 15%;
  color: ${theme.colors.cream};
  background-color: rgba(0, 0, 0, 0.9);
  border-top-left-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${theme.fonts.size.SM};
  padding-left: 2%;

  .icon {
    margin: 10px;
    font-size: 1.5rem;
  }
`;
