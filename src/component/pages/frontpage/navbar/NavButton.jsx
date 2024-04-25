import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { theme } from "../../../../theme";

export default function NavButton({ children, to, primary, icon, ...rest }) {
  return (
    <NavButtonStyled to={to} primary={primary} icon={icon} {...rest}>
      {children}
    </NavButtonStyled>
  );
}

const NavButtonStyled = styled(NavLink)`
  padding: 5px;
  border-radius: ${theme.borderRadius.smallRound};
  text-decoration: none;
  color: ${theme.colors.cream};
  padding: 5px;
  font-size: ${theme.fonts.size.SM};
`;
