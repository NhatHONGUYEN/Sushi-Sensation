import styled from "styled-components";
import Hamburger from "hamburger-react";
import NavButton from "../component/pages/frontpage/navbar/NavButton.jsx";

export default function HamburgerIcon({ to }) {
  return (
    <HamburgerIconStyled>
      <NavButton icon to={to}>
        <Hamburger className="hamburger-react" />
      </NavButton>
    </HamburgerIconStyled>
  );
}

const HamburgerIconStyled = styled.li`
  &:hover .hamburger-react {
    transform: scale(1.1);
  }

  .hamburger-react {
    div {
      height: 3px;
      transition: transform 1s ease-in-out, opacity 1s ease-in-out;

      &:nth-child(1),
      &:nth-child(3) {
        transform-origin: left;
      }

      &:nth-child(2) {
        transform-origin: center;
      }
    }

    &:hover div:nth-child(1),
    &:hover div:nth-child(3) {
      opacity: 0;
      transform: translateX(-20px);
    }

    &:hover div:nth-child(2) {
      transform: rotate(45deg);
    }
  }
`;
