import styled from "styled-components";
import NavButton from "./NavButton";
import HamburgerIcon from "../../../../reusible ui/HamburgerIcon";

export default function Navbar() {
  return (
    <NavbarStyled>
      <ul>
        <li className="hamburger-button">
          <HamburgerIcon to="/menuNav" />
        </li>
        <li className="qitchen-from-navbar">
          <NavButton className="qitchen-button" to="/frontpage">
            QITCHEN
          </NavButton>
        </li>
        <li className="button menu-button">
          <NavButton to="/menu">MENU</NavButton>
        </li>
        <li className="button about-button">
          <NavButton to="/about">ABOUT</NavButton>
        </li>
        <li className="button book-a-table">
          <NavButton primary className="book-button" to="/reservation">
            BOOK A TABLE
          </NavButton>
        </li>
      </ul>
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  background-color: rgba(0, 0, 0, 0.9);
  border-radius: 10px;
  position: absolute;
  top: 5vh;
  left: 5vh;
  width: 500px;
  height: 50px;
  z-index: 1000;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    height: 100%;

    .menu-button a,
    .about-button a {
      padding: 10px 10px;
      border: 1px solid transparent;
      font-size: 12px;
      transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out,
        border-color 0.5s ease-in-out, color 0.5s ease-in-out;
    }

    .about-button a {
      transition-duration: 0.5s;
    }

    .menu-button:hover a,
    .about-button:hover a {
      border: 1px solid rgba(239, 221, 114, 0.2);
    }

    li {
      margin: 10px;
    }

    .qitchen-from-navbar a {
      font-size: 24px;
      border: none;
    }

    .book-button {
      border: 1px solid rgba(239, 221, 114, 0.2);
      font-size: 12px;
      transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out,
        background-color 0.5s ease-in-out, color 0.5s ease-in-out;
      padding: 10px 10px;

      &:hover {
        background-color: rgba(239, 231, 210, 0.1);
      }
    }
  }
`;
