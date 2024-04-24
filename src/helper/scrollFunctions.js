export const scrollToSection = (ref) => {
  ref.current.scrollIntoView({ behavior: "smooth" });
};

export const scrollToTop = (sectionRefs) => {
  sectionRefs[0].ref.current.scrollIntoView({
    behavior: "smooth",
  });
};
