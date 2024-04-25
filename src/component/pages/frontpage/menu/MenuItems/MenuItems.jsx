import { MenuSection } from "./MenuSection";
import { MenuNavigation } from "./MenuNavigation";
import { scrollToTop } from "../../../../../helper/scrollFunctions";
import { fakeMenu } from "../../../../../fakedata/fakeMenu";
import { FiArrowUpCircle } from "react-icons/fi";
import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function MenuItems({ sections, scrollToSection }) {
  const menuItems = fakeMenu.menuItems;

  const makiItems = menuItems.slice(0, 4);
  const uramakiItems = menuItems.slice(4, 10);
  const specialRollsItems = menuItems.slice(10);

  return (
    <MenuItemsStyled className="menu_items">
      <MenuNavigation sections={sections} scrollToSection={scrollToSection} />

      <MenuSection title="MAKI" items={makiItems} titleRef={sections[0].ref} />
      <MenuSection
        title="URAMAKI"
        items={uramakiItems}
        titleRef={sections[1].ref}
      />
      <MenuSection
        title="SPECIAL ROLLS"
        items={specialRollsItems}
        titleRef={sections[2].ref}
      />

      <FiArrowUpCircle
        onClick={() => scrollToTop(sections)}
        className="scroll-to-top-button"
      />
    </MenuItemsStyled>
  );
}

const MenuItemsStyled = styled.div`
  border: 1px solid ${theme.colors.borderLine};
  border-radius: ${theme.borderRadius.extraRound};
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: auto;
  height: 100%;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  .menu_title {
    text-align: center;
    margin: 60px 0;
    font-size: ${theme.fonts.size.P4};
    color: ${theme.colors.cream};
    justify-content: center;
    display: flex;
  }
`;
