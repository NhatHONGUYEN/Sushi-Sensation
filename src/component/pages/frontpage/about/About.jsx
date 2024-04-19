import styled from "styled-components";

export default function About() {
  return (
    <AboutStyled>
      <div className="left-image-place">image place introduction</div>
      <div className="our-story-descritpion">about</div>
    </AboutStyled>
  );
}

const AboutStyled = styled.div`
  height: 97vh;
  margin: 10px;
  display: flex;
  justify-content: space-around;

  .left-image-place {
    background: blue;
    flex: 1;
  }
  .our-story-descritpion {
    background: green;
    flex: 1;
  }
`;
