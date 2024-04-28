import styled from "styled-components";
import Navbar from "./navbar/Navbar";
import VideoContainer from "./VideoContainer";
import LinkContainer from "./LinkContainer";

export default function FrontPage() {
  return (
    <FrontPageStyled>
      <Navbar />
      <>
        <VideoContainer />
        <LinkContainer />
      </>
    </FrontPageStyled>
  );
}

const FrontPageStyled = styled.div`
  height: 100vh;
  display: flex;
  position: relative;
  padding: 10px;
  gap: 10px;

  /* Pour les écrans d'ordinateur */
  @media (min-width: 1024px) {
    padding: 20px;
    gap: 20px;
  }

  /* Pour les tablettes */
  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 15px;
    gap: 15px;
  }

  /* Pour les téléphones */
  @media (max-width: 767px) {
    flex-direction: column;

    overflow: auto;
  }
`;
