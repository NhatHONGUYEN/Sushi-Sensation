import styled from "styled-components";

export default function Menu() {
  return (
    <MenuStyled>
      <div className="presentation_menu_image">
        <img
          src="../../../../../public/image_bowl_left_menu.jpg"
          alt="Image de présentation"
        />
      </div>
      <div className="menu_items">menu_items</div>
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  border: 1px solid red;
  height: 97vh;
  margin: 15px;
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;

  .presentation_menu_image {
    background: red;
    overflow: hidden;
    max-width: 100%;
    max-height: 100%;

    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }
  }
  .menu_items {
    background: blue;
    height: 100%;
  }
`;
