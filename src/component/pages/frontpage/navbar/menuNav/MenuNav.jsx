import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function MenuNav() {
  return (
    <MenuNavStyled>
      <ul>
        <li>
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
        <li>
          <NavLink to="/styleguide">StyleGuide</NavLink>
        </li>
      </ul>
    </MenuNavStyled>
  );
}

const MenuNavStyled = styled.div`
  border: 1px solid red;
  height: 100vh;
`;
