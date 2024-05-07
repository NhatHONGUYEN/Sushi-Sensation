import { useRef } from "react";
import { FiArrowUpCircle } from "react-icons/fi";
import styled from "styled-components";
import { theme } from "../../../../../theme";

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
          href={`#${section.name}`}
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
    border: 1px solid ${theme.colors.borderLine};
    color: ${theme.colors.cream};
    border-radius: 5px;
    text-decoration: none;
    font-size: 14px;
    transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out,
      border-color 0.5s ease-in-out, color 0.5s ease-in-out;

    &:hover {
      border: 1px solid rgba(239, 221, 114, 0.4);
    }
  }
`;

const ScrollToTopButton = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  cursor: pointer;
  font-size: 2rem;
  color: ${theme.colors.cream};
  background: none;
  border: none;
  opacity: 0.5;
  transition: transform 1s ease-in-out, opacity 0.5s;

  &:hover {
    transform: translateY(-20px);
    opacity: 1;
  }
`;
