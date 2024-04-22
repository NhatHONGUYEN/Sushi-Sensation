import styled from "styled-components";
import { NavLink } from "react-router-dom";

export default function NavButton({ children, to, primary, icon, ...rest }) {
  return (
    <NavButtonStyled to={to} primary={primary} icon={icon} {...rest}>
      {children}
    </NavButtonStyled>
  );
}

const NavButtonStyled = styled(NavLink)`
  padding: 5px;
  border-radius: 5px;
  text-decoration: none;
  color: #efe7d2;
  padding: 5px;
  font-size: 15px;
`;
