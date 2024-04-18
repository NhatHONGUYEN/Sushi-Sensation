import styled from "styled-components";
import { fakeMenu } from "../../../../fakedata/fakeMenu";
import { MenuItem } from "./MenuItem";

export default function Menu() {
  const menuItems = fakeMenu.menuItems;

  return (
    <MenuStyled>
      <div className="presentation_menu_image">
        <img
          src="../../../../../public/image_bowl_left_menu.jpg"
          alt="Image de présentation"
        />
      </div>
      <div className="menu_items">
        {menuItems.map((menuItem) => (
          <MenuItem key={menuItem.id} {...menuItem} />
        ))}
      </div>
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  display: flex;
  justify-content: space-around;
  height: 100vh;

  .presentation_menu_image {
    background: red;
    flex: 1;
    width: 50vh;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  .menu_items {
    flex: 1;
    width: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    .menu_item {
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: space-between;
      margin-bottom: 1rem;

      img {
        height: 100px;
        width: 100px;
        margin-right: 1rem;
      }

      .item_info {
        text-align: left;
      }

      .item_price {
        text-align: right;
      }
    }
  }
`;
