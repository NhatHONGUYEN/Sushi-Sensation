import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Hamburger from "hamburger-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <NavbarStyled>
      <ul>
        <li className="toggle_navbar_button">
          <NavLink to="/menuNav">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </NavLink>
        </li>
        <li className="qitchen-from-navbar">
          <NavLink to="/frontpage">QITCHEN</NavLink>
        </li>
        <li className="button">
          <NavLink to="/menu">Menu</NavLink>
        </li>
        <li className="button">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="button book-a-table">
          <NavLink to="/reservation">Book a Table</NavLink>
        </li>
      </ul>
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  background: black;
  border-radius: 10px;
  position: absolute;
  top: 5vh;
  left: 5vh;
  width: 470px;
  height: 60px;
  z-index: 1;

  ul {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    list-style: none;
    height: 100%;
    width: 100%;

    .button {
      border: 1px solid transparent;
      padding: 5px;
      border-radius: 5px;
      transform: scale(
        1
      ); // Ajoute la propriété transform avec une valeur initiale
      transition: transform 0.2s ease-in-out, border 0.4s ease-in-out; // Ajoute la pro

      &:hover {
        border: 1px solid white;
        opacity: 1;
        transition: 0.4s ease-in-out;
        transform: scale(1.1);
      }
    }

    .book-a-table {
      border: 1px solid white;
    }

    .button-icon {
      padding: 7px 5px 0 5px;

      border: 1px solid white;
      border-radius: 4px;
    }

    li {
      margin-right: 1rem;
      width: fit-content;

      a {
        text-decoration: none;
        color: white;
        padding: 5px;
        font-size: 15px;
        line-height: 1.5;
      }
    }
  }
`;
