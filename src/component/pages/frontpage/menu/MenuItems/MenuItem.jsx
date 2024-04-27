import styled from "styled-components";
import { theme } from "../../../../../theme";

export const MenuItem = ({ imageSource, title, description, price }) => (
  <MenuItemStyled className="menu_item">
    <img src={imageSource} alt={title} />
    <div className="item_info">
      <h3 className="item_title">
        {title}
        <span className="dots"></span>
        <span className="item_price">${price}</span>
      </h3>
      <p className="item_description">{description}</p>
    </div>
  </MenuItemStyled>
);

const MenuItemStyled = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  justify-content: center;
  width: 100%;

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
      color: ${theme.colors.cream};

      span {
        white-space: nowrap;
      }

      .dots {
        flex-grow: 1;
        border-bottom: 1px dotted ${theme.colors.cream};
        margin: 3px 10px;
      }

      .item_price {
        font-weight: ${theme.fonts.weights.bold};
        margin-right: 50px;
        color: ${theme.colors.cream};
      }
    }

    .item_description {
      width: 400px;
      font-size: ${theme.fonts.size.XS};
      color: ${theme.colors.cream};
      margin-top: 10px;
    }
  }

  @media (min-width: 1036px) and (max-width: 1500px) {
    display: flex;
    flex-direction: column;

    img {
      height: 100px;
      width: 150px;
      margin: 100px 0;
    }
  }

  @media (max-width: 1034px) {
  }
`;
