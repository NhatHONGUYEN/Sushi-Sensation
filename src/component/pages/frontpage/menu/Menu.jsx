import styled from "styled-components";

export default function Menu() {
  return (
    <MenuStyled>
      <div className="presentation_menu_image">
        presentation image
        {/* <img
          src="../../../../../public/image_bowl_left_menu.jpg"
          alt="Image de présentation"
        /> */}
      </div>
      <div className="menu_items">menu_items</div>
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  display: flex;
  .presentation_menu_image {
    background: red;
  }
  .menu_items {
    background: green;
  }
`;
