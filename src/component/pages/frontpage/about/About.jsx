import styled from "styled-components";

export default function About() {
  return (
    <AboutStyled>
      <div className="image-for-about"></div>
      <div className="our-story-descritpion">about</div>
    </AboutStyled>
  );
}

const AboutStyled = styled.div`
  height: 97vh;
  margin: 10px;
  display: flex;
  justify-content: space-around;

  .image-for-about {
    width: 50%;
    background-image: url("../../../../../public/image_for_about.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    border-radius: 20px;

    img {
      display: none;
    }
  }
  .our-story-descritpion {
    background: green;
    width: 50%;
  }
`;
