import styled from "styled-components";

export default function MenuBanner({ image, text }) {
  return (
    <MenuBannerStyled image={image}>
      <img src={image} alt="Menu" />
      <div className="menu_text">{text}</div>
    </MenuBannerStyled>
  );
}

const MenuBannerStyled = styled.div`
  flex: 1;
  background-image: url(${(props) => props.image});
  background-position: center top 20%;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 20px;
  position: relative;

  img {
    display: none;
  }

  .menu_text {
    position: absolute;
    bottom: 5%;
    left: 3%;
    font-size: 6rem;
    color: #efe7d2;
    font-family: forum;
    letter-spacing: 5px;
  }
`;
