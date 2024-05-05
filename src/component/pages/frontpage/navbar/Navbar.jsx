import styled from "styled-components";
import NavButton from "./NavButton";
import HamburgerIcon from "../../../../reusible ui/HamburgerIcon";
import { theme } from "../../../../theme";

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
  background-color: ${theme.shadows.strong};
  opacity: 0.9;
  border-radius: ${theme.borderRadius.smallRound * 2};
  position: absolute;
  top: 5vh;
  left: 5vh;
  width: 480px;
  height: 50px;
  z-index: 1000;
  border-radius: ${theme.borderRadius.smallRound};

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
      font-size: ${theme.fonts.size.XS};
      transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out,
        border-color 0.5s ease-in-out, color 0.5s ease-in-out;
    }

    .about-button a {
      transition-duration: 0.5s;
    }

    .menu-button:hover a,
    .about-button:hover a {
      border: 1px solid ${theme.colors.borderLine};
    }

    li {
      margin: 10px;
    }

    .qitchen-from-navbar a {
      font-size: ${theme.fonts.size.P3};
      border: none;
    }

    .book-button {
      border: 1px solid ${theme.colors.borderLine};
      font-size: ${theme.fonts.size.XS};
      transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out,
        background-color 0.5s ease-in-out, color 0.5s ease-in-out;
      padding: 10px 10px;

      &:hover {
        background-color: rgba(239, 231, 210, 0.1);
      }
    }
  }
  /* Pour les téléphones */
  @media (max-width: 767px) {
    width: 330px;
    left: 50%;
    transform: translateX(-50%);
    ul {
      .menu-button,
      .about-button {
        display: none;
      }
    }
  }
`;
