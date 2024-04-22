import { useRef } from "react";
import { FiArrowUpCircle } from "react-icons/fi";
import styled from "styled-components";

export const MenuNavigation = ({ sections, scrollToSection }) => {
  const navRef = useRef(null);

  const scrollToTop = () => {
    navRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <MenuNavigationStyled ref={navRef}>
      {sections.map((section) => (
        <a
          key={section.name}
          href={`#${section.name.toLowerCase()}`}
          onClick={(event) => {
            event.preventDefault();
            scrollToSection(section.ref);
          }}
        >
          {section.name}
        </a>
      ))}
      <ScrollToTopButton onClick={scrollToTop}>
        <FiArrowUpCircle />
      </ScrollToTopButton>
    </MenuNavigationStyled>
  );
};

const MenuNavigationStyled = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 20px;

  a {
    margin-right: 5px;
    padding: 5px 10px;
    border: 1px solid white;
    color: #efe7d2;
    border-radius: 5px;
    text-decoration: none;
    font-size: 14px;
  }
`;

const ScrollToTopButton = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  cursor: pointer;
  font-size: 2rem;
  color: #efe7d2;
  background: none;
  border: none;
`;
