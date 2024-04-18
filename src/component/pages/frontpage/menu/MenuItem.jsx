export const MenuItem = ({ imageSource, title, description, price }) => (
  <div className="menu_item">
    <img src={imageSource} alt={title} />
    <div className="item_info">
      <h3 className="item_title">
        {title}
        <span className="dots"></span>
        <span className="item_price">${price}</span>
      </h3>
      <p className="item_description">{description}</p>
    </div>
  </div>
);
