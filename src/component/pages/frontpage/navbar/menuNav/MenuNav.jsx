import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function MenuNav() {
  return (
    <MenuNavStyled>
      <ul>
        <li className="top-border">
          <NavLink to="/menu">Menu</NavLink>
        </li>
        <li>
          <NavLink to="/reservation">Book a Table</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/blog">Blog</NavLink>
        </li>
        <li className="bottom-border">
          <NavLink to="/styleguide">StyleGuide</NavLink>
        </li>
      </ul>
    </MenuNavStyled>
  );
}

const MenuNavStyled = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;

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
        color: white;
        font-size: 50px;
      }
    }
    .top-border {
      border-top: 2px solid white;
      width: 20%;
      padding-top: 20px;
      justify-content: center;
      display: flex;
    }

    .bottom-border {
      border-bottom: 2px solid white;
      width: 20%;
      padding-bottom: 20px;
      justify-content: center;
      display: flex;
    }
  }
`;
