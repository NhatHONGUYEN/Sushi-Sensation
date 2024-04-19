import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function MenuNav() {
  return (
    <MenuNavStyled>
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
    </MenuNavStyled>
  );
}

const MenuNavStyled = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

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
        color: #efe7d2;
        font-size: 50px;
        transition: color 0.5s ease-in-out;

        &:hover {
          color: #f5c78f;
        }
      }
    }
    .top-border {
      border-top: 2px solid #efe7d2;
      width: 20%;
      padding-top: 20px;
      justify-content: center;
      display: flex;
    }

    .bottom-border {
      border-bottom: 2px solid #efe7d2;
      width: 20%;
      padding-bottom: 20px;
      justify-content: center;
      display: flex;
    }
  }
`;
