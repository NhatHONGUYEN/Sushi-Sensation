export const MenuItem = ({ imageSource, title, description, price }) => (
  <div className="menu_item">
    <img src={imageSource} alt={title} />
    <div className="item_info">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
    <p className="item_price">${price}</p>
  </div>
);
