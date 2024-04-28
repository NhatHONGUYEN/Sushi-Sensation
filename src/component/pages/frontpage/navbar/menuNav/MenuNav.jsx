import { NavLink } from "react-router-dom";
import styled from "styled-components";
import HamburgerIcon from "../../../../../reusible ui/HamburgerIcon";
import { theme } from "../../../../../theme";

export default function MenuNav() {
  return (
    <MenuNavStyled>
      <HamburgerIcon className="hamburger-react" />
      <div className="menuNavList">
        <ul>
          <li className="top-border">
            <NavLink to="/menu">MENU</NavLink>
          </li>
          <li>
            <NavLink to="/reservation">BOOK A TABLE</NavLink>
          </li>
          <li>
            <NavLink to="/about">ABOUT</NavLink>
          </li>
          <li className="bottom-border">
            <NavLink to="/contact">CONTACT</NavLink>
          </li>
        </ul>
      </div>
    </MenuNavStyled>
  );
}

const MenuNavStyled = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .hamburger-react {
    position: absolute;
    bottom: 41.5vh;
    right: 79vh;
  }

  .menuNavList {
    ul {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      list-style: none;
      margin: 0;
      padding: 0;

      li {
        width: auto;
        margin-bottom: 20px;

        a {
          text-decoration: none;
          color: ${theme.colors.cream};
          font-size: ${theme.fonts.size.P5};
          transition: color 0.5s ease-in-out;

          &:hover {
            color: ${theme.colors.cream};
          }
        }
      }
      .top-border {
        border-top: 2px solid ${theme.colors.cream};
        width: 20%;
        padding-top: 20px;
        justify-content: center;
        display: flex;
      }

      .bottom-border {
        border-bottom: 2px solid ${theme.colors.cream};
        width: 20%;
        padding-bottom: 20px;
        justify-content: center;
        display: flex;
      }
    }
  }
`;
