import styled from "styled-components";

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
`;
