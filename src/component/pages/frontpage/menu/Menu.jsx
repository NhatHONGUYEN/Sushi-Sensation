import styled from "styled-components";
import { fakeMenu } from "../../../../fakedata/fakeMenu";
import { MenuItem } from "./MenuItem";

export default function Menu() {
  const menuItems = fakeMenu.menuItems;

  return (
    <MenuStyled>
      <div className="presentation_menu_image">
        <img
          src="/public/image_bowl_left_menu.jpg"
          alt="Image de présentation"
        />
      </div>
      <div className="menu_items">
        <h2 className="menu_title">Maki</h2>
        {menuItems.slice(0, 4).map((menuItem) => (
          <MenuItem key={menuItem.id} {...menuItem} />
        ))}
        <h2 className="menu_title">Uramaki</h2>
        {menuItems.slice(4, 10).map((menuItem) => (
          <MenuItem key={menuItem.id} {...menuItem} />
        ))}
        <h2 className="menu_title">Special Rolls</h2>
        {menuItems.slice(10).map((menuItem) => (
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

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  .menu_items {
    border: 1px solid red;
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    font-size: 13px;

    .menu_item {
      display: flex;
      align-items: center;

      margin-bottom: 1rem;
      padding: 0 150px;

      img {
        height: 100px;
        width: 100px;
      }

      .item_info {
        margin-left: 20px;

        .item_title {
          width: 500px;
          font-size: 17px;
          display: flex;
          justify-content: space-between;

          .dots {
            flex-grow: 1;
            margin: 3px 10px;
            border-bottom: 1px dotted #ccc;
          }

          .item_price {
            font-weight: bold;
          }
        }

        .item_description {
          max-width: 400px;
          font-size: 14px;
        }
      }
    }
  }

  .menu_items h2.menu_title {
    text-align: center;
    margin: 50px 0;
    font-size: 30px;
  }
`;
