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
`;
