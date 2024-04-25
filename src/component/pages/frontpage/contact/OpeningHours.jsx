import styled from "styled-components";
import { theme } from "../../../../theme";

const OpeningHours = () => {
  return (
    <OpeningHoursStyled>
      <h1>OPENING HOURS</h1>
      <div className="hours">
        <p>
          <span>Monday</span> <span className="time">16:00 - 22:30</span>
        </p>
        <p>
          <span>Tuesday</span> <span className="time">16:00 - 22:30</span>
        </p>
        <p>
          <span>Wednesday</span> <span className="time">16:00 - 22:30</span>
        </p>
        <p>
          <span>Thursday</span> <span className="time">16:00 - 22:30</span>
        </p>
        <p>
          <span>Friday</span> <span className="time">16:00 - 22:30</span>
        </p>
        <p>
          <span>Sat & Sun</span> <span className="time">16:00 - 22:30</span>
        </p>
      </div>
    </OpeningHoursStyled>
  );
};

const OpeningHoursStyled = styled.div`
  padding: 10% 5%;
  border-radius: ${theme.borderRadius.round};
  width: 52vh;
  margin-bottom: 7px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${theme.colors.borderLine};

  h1 {
    font-size: ${theme.fonts.size.P4};
    color: ${theme.colors.cream};
  }
  p {
    line-height: 1.5;
    display: flex;
    justify-content: space-between;
    width: 100%;
    color: ${theme.colors.cream};
  }

  .hours {
    width: 80%;
  }

  .time {
    text-align: right;
  }
`;

export default OpeningHours;
