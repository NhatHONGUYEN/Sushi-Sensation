import { MenuSection } from "./MenuSection";
import { MenuNavigation } from "./MenuNavigation";
import { scrollToSection, scrollToTop } from "./scrollFunctions";
import { fakeMenu } from "../../../../fakedata/fakeMenu";
import { FiArrowUpCircle } from "react-icons/fi";

export default function MenuItems({ sections, scrollToSection }) {
  const menuItems = fakeMenu.menuItems;

  const makiItems = menuItems.slice(0, 4);
  const uramakiItems = menuItems.slice(4, 10);
  const specialRollsItems = menuItems.slice(10);

  return (
    <div className="menu_items">
      <MenuNavigation sections={sections} scrollToSection={scrollToSection} />

      <MenuSection title="Maki" items={makiItems} titleRef={sections[0].ref} />
      <MenuSection
        title="Uramaki"
        items={uramakiItems}
        titleRef={sections[1].ref}
      />
      <MenuSection
        title="Special Rolls"
        items={specialRollsItems}
        titleRef={sections[2].ref}
      />

      <FiArrowUpCircle
        onClick={() => scrollToTop(sections)}
        className="scroll-to-top-button"
      />
    </div>
  );
}
