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
  background: #f9f9f9;
  border-radius: 10px;
  width: 50vh;
  height: 97%;

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 10px;
  }

  .item {
    height: calc(50vh / 2);
  }

  img {
    border-radius: 10px;
    width: 100%;
    height: 97%;
    object-fit: cover;
  }
`;
export default Galerie;
