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
            <Hamburger
              className="hamburger-react"
              toggled={isOpen}
              toggle={setOpen}
            />
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
  background-color: rgba(0, 0, 0, 0.8);
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: absolute;
  top: 5vh;
  left: 5vh;
  width: 495px;
  height: 60px;
  z-index: 1000;

  ul {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    list-style: none;
    height: 100%;
    width: 100%;
    padding: 0 1rem;

    .qitchen-from-navbar a {
      font-size: 24px;
    }

    .button {
      border: 1px solid transparent;
      padding: 5px;
      border-radius: 5px;
      transform: scale(1);
      transition: transform 0.2s ease-in-out, border 0.4s ease-in-out;

      &:hover {
        border: 1px solid #efe7d2;
        opacity: 1;
        transition: 0.4s ease-in-out;
      }
    }

    .book-a-table {
      border: 1px solid #efe7d2;
    }

    .button-icon {
      padding: 7px 5px 0 5px;
      border: 1px solid #efe7d2;
      border-radius: 4px;
    }

    li {
      margin-right: 1rem;
      width: fit-content;

      a {
        text-decoration: none;
        color: #efe7d2;
        padding: 5px;
        font-size: 15px;
        line-height: 1.5;
      }
    }
  }

  .hamburger-react {
    transition: transform 1s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }

    div {
      background-color: #efe7d2;
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
