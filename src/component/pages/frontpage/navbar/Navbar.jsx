import styled from "styled-components";
import Hamburger from "hamburger-react";
import NavButton from "../../../../reusible ui/NavButton";

export default function Navbar() {
  return (
    <NavbarStyled>
      <ul>
        <li className="toggle_navbar_button">
          <NavButton icon to="/menuNav">
            <Hamburger className="hamburger-react" />
          </NavButton>
        </li>
        <li className="qitchen-from-navbar">
          <NavButton className="qitchen-button" to="/frontpage">
            QITCHEN
          </NavButton>
        </li>
        <li className="button menu-button">
          <NavButton to="/menu">Menu</NavButton>
        </li>
        <li className="button about-button">
          <NavButton to="/about">About</NavButton>
        </li>
        <li className="button book-a-table">
          <NavButton primary className="book-button" to="/reservation">
            Book a Table
          </NavButton>
        </li>
      </ul>
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  position: absolute;
  top: 5vh;
  left: 5vh;
  width: 60vh;
  height: 7vh;
  z-index: 1000;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    height: 100%;
    width: 100%;

    .menu-button a,
    .about-button a {
      border: 1px solid transparent;
    }

    .menu-button:hover a,
    .about-button:hover a {
      border: 1px solid #efe7d2;
    }

    li {
      margin-right: 1rem;
    }

    .qitchen-from-navbar a {
      font-size: 24px;
      border: none;
    }

    .book-button {
      border: 1px solid #efe7d2;
    }

    .toggle_navbar_button {
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
    }
  }
`;
