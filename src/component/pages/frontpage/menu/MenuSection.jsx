import { MenuItem } from "./MenuItems/MenuItem";

export const MenuSection = ({ title, items, titleRef }) => (
  <div className="menu_section">
    <h2 ref={titleRef} className="menu_title">
      {title}
    </h2>
    {items.map((item) => (
      <MenuItem key={item.id} {...item} />
    ))}
  </div>
);
