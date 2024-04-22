import styled from "styled-components";
import fakeGalerie from "../../../../fakedata/fakeGalerie";

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
  border-radius: 15px;
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
    border-radius: 15px;
  }
`;
export default Galerie;
