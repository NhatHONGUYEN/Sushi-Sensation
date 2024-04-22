import styled from "styled-components";
import Navbar from "../navbar/Navbar";
import MenuBanner from "./MenuBanner/MenuBanner";
import MenuItems from "./MenuItems/MenuItems";
import { scrollToSection } from "./scrollFunctions";
import { useRef } from "react";

export default function Menu() {
  const sectionRefs = [
    { name: "Maki", ref: useRef(null) },
    { name: "Uramaki", ref: useRef(null) },
    { name: "Special Rolls", ref: useRef(null) },
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
  display: flex;
  justify-content: space-around;
  height: 97vh;
  margin: 10px;
  position: relative;

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
  }
`;
