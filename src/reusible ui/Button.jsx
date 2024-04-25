import styled from "styled-components";

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
  color: #efe7d2;
  background-color: rgba(0, 0, 0, 0.9);
  border-top-left-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  padding-left: 2%;

  .icon {
    margin: 10px;
    font-size: 1.5rem;
  }
`;
