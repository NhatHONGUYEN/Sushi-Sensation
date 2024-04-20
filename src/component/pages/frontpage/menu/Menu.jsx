import styled from "styled-components";
import { fakeMenu } from "../../../../fakedata/fakeMenu";
import { MenuItem } from "./MenuItem";
import Navbar from "../navbar/Navbar";

export default function Menu() {
  const menuItems = fakeMenu.menuItems;

  return (
    <MenuStyled>
      <Navbar />
      <div className="presentation_menu_image">
        <div className="menu_text">MENU</div>
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
  position: relative;

  .presentation_menu_image {
    flex: 1;
    background-image: url("/public/image_bowl_left_menu.jpg");
    background-position: center top 20%;
    background-size: cover;
    background-repeat: no-repeat;

    border-radius: 20px;

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
  }
  .menu_items {
    border: 1px solid #efe7d2;
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
      color: #efe7d2;
    }

    .menu_item {
      display: flex;
      align-items: center;
      margin-bottom: 1rem;
      justify-content: center;
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
          color: #efe7d2;

          span {
            white-space: nowrap;
          }

          .dots {
            flex-grow: 1;
            border-bottom: 1px dotted #efe7d2;
            margin: 3px 10px;
          }

          .item_price {
            font-weight: bold;
            margin-right: 50px;
            color: #efe7d2;
          }
        }

        .item_description {
          max-width: 400px;
          font-size: 14px;
          color: #efe7d2;
          margin-top: 5px;
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
      border: 1px solid white;
      color: #efe7d2;
      border-radius: 5px;
      text-decoration: none;
      font-size: 14px;
    }
  }
`;
