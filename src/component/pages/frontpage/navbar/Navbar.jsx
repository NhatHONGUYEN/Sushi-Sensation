import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
  return (
    <NavbarStyled>
      <ul>
        <li>
          <NavLink to="/menuNav">
            <RxHamburgerMenu />
          </NavLink>
        </li>
        <li>
          <NavLink to="/frontpage">QITCHEN</NavLink>
        </li>
        <li>
          <NavLink to="/menu">Menu</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/reservation">Book a Table</NavLink>
        </li>
      </ul>
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  border: 1px solid pink;
  position: absolute;
  top: 5vh;
  left: 5vh;
  width: 450px;
  height: 60px;
  z-index: 1;

  ul {
    display: flex;
    justify-content: flex-start;
    list-style: none;

    li {
      margin-right: 1rem;

      a {
        text-decoration: none;
        color: white;

        &.active {
          color: pink;
        }
      }
    }
  }
`;
