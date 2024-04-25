import styled from "styled-components";
import Navbar from "../navbar/Navbar";
import MenuBanner from "./MenuBanner/MenuBanner";
import MenuItems from "./MenuItems/MenuItems";
import { scrollToSection } from "../../../../helper/scrollFunctions";
import { useRef } from "react";

export default function Menu() {
  const sectionRefs = [
    { name: "MAKI", ref: useRef(null) },
    { name: "URAMAKI", ref: useRef(null) },
    { name: "SPECIAL ROLLS", ref: useRef(null) },
  ];

  return (
    <MenuStyled>
      <Navbar />
      <MenuBanner image="/image_bowl_left_menu.jpg" text="MENU" />
      <MenuItems sections={sectionRefs} scrollToSection={scrollToSection} />
    </MenuStyled>
  );
}
const MenuStyled = styled.div`
  justify-content: space-around;
  height: 100vh;
  display: flex;
  position: relative;
  padding: 10px;
  gap: 10px;
`;
