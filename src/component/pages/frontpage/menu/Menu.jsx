import styled from "styled-components";
import { fakeMenu } from "../../../../fakedata/fakeMenu";
import { MenuItem } from "./MenuItem";

export default function Menu() {
  const menuItems = fakeMenu.menuItems;

  return (
    <MenuStyled>
      <div className="presentation_menu_image">
        <div className="menu_text">Menu</div>
        <img
          src="/public/image_bowl_left_menu.jpg"
          alt="Image de présentation"
        />
      </div>

      <div className="menu_items">
        <div className="navigation">
          <a href="#maki">Maki</a>
          <a href="#uramaki">Uramaki</a>
          <a href="#special-rolls">Special Rolls</a>
        </div>
        <h2 id="maki" className="menu_title">
          Maki
        </h2>
        {menuItems.slice(0, 4).map((menuItem) => (
          <MenuItem key={menuItem.id} {...menuItem} />
        ))}
        <h2 id="uramaki" className="menu_title">
          Uramaki
        </h2>
        {menuItems.slice(4, 10).map((menuItem) => (
          <MenuItem key={menuItem.id} {...menuItem} />
        ))}
        <h2 id="special-rolls" className="menu_title">
          Special Rolls
        </h2>
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
  height: 97vh;
  margin: 10px;

  .presentation_menu_image {
    background: red;
    flex: 1;
    background-image: url("/public/image_bowl_left_menu.jpg");
    background-position: center top 20%;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    border-radius: 20px;

    img {
      display: none;
    }

    .menu_text {
      position: absolute;
      bottom: 40px;
      left: 40px;
      font-size: 6rem;
      color: white;
    }
  }
  .menu_items {
    border: 1px solid red;
    border-radius: 20px;
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    font-size: 13px;
    overflow-y: auto;
    height: 100%;
    margin: 0 10px;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }

    .menu_title {
      text-align: center;
      margin: 60px 0;
      font-size: 30px;
    }

    .menu_item {
      display: flex;
      align-items: center;
      margin-bottom: 1rem;
      padding: 0 130px;

      img {
        height: 100px;
        width: 150px;
      }

      .item_info {
        margin-left: 20px;

        .item_title {
          width: 500px;
          font-size: 17px;
          display: flex;
          justify-content: space-between;

          span {
            white-space: nowrap;
          }

          .dots {
            flex-grow: 1;
            border-bottom: 1px dotted #ccc;
            margin: 3px 10px;
          }

          .item_price {
            font-weight: bold;
            margin-right: 50px;
          }
        }

        .item_description {
          max-width: 400px;
          font-size: 14px;
        }
      }
    }
  }

  .navigation {
    display: flex;
    justify-content: center;

    a {
      margin-top: 40px;
      margin-right: 5px;
      padding: 5px 10px;
      background-color: #333;
      color: #fff;
      border-radius: 5px;
      text-decoration: none;
      font-size: 14px;
    }
  }
`;
