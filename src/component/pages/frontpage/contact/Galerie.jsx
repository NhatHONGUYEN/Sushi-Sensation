import styled from "styled-components";
import fakeGalerie from "../../../../fakedata/fakeGalerie";
import { theme } from "../../../../theme";

const Galerie = () => {
  return (
    <GalerieStyled>
      <div className="grid">
        {fakeGalerie.map((image) => (
          <div key={image.title} className="item">
            <img src={image.imageSource} alt={image.title} />
          </div>
        ))}
      </div>
    </GalerieStyled>
  );
};

const GalerieStyled = styled.div`
  border-radius: ${theme.borderRadius.round};
  width: 50vh;

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 10px;
  }

  img {
    height: 23vh;
    object-fit: cover;
    width: 100%;
    border-radius: ${theme.borderRadius.round};
  }
`;
export default Galerie;
