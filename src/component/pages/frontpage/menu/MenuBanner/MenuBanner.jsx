import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function MenuBanner({ text }) {
  return (
    <MenuBannerStyled>
      <img src="/image-left-bowl.jpg" alt="image_bowl_left_menu" />
      <div className="menu_text">{text}</div>
    </MenuBannerStyled>
  );
}

const MenuBannerStyled = styled.div`
  border-radius: ${theme.borderRadius.extraRound};
  position: relative;
  width: 50%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${theme.borderRadius.extraRound};
  }

  .menu_text {
    position: absolute;
    bottom: 5%;
    left: 3%;
    font-size: 6rem;
    color: ${theme.colors.cream};
    font-family: forum;
    letter-spacing: ${theme.spacing.xxs};
  }

  @media (max-width: 1034px) {
    display: none;
  }
`;
