import { useRef, useState } from "react";
import styled from "styled-components";
import Input from "../../../../reusible ui/Input.jsx";
import Select from "./Select";
import DateInput from "./DateInput";
import { timeOptions } from "../../../../fakedata/timeOptions";
import { theme } from "../../../../theme/index.js";

export default function Form() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [guests, setGuests] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const guestsRef = useRef(null);
  const dateRef = useRef(null);
  const timeRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <FormContainerStyled onSubmit={handleSubmit}>
      <div className="input-container">
        <Input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="input-container">
        <Input
          type="tel"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <div className="input-container">
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="flex-container">
        <div className="input-container select-container">
          <Select
            id="guests"
            ref={guestsRef}
            options={[1, 2, 3, 4, 5, 6]}
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
          />
        </div>
        <div className="input-container select-container">
          <DateInput
            ref={dateRef}
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="input-container select-container">
          <Select
            id="time"
            ref={timeRef}
            options={timeOptions}
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
      </div>

      <button className="button-reservation" type="submit">
        RESERVE
      </button>
    </FormContainerStyled>
  );
}
const FormContainerStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 70%;

  .input-container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 50%;
    color: ${theme.colors.cream};
  }

  .flex-container {
    display: flex;
    gap: 1rem;
    width: 50%;
  }

  .select-container {
    width: 70%;
    select,
    input[type="date"] {
      padding: 0.5rem;
      border-radius: ${theme.borderRadius.smallRound};
      color: ${theme.colors.black};
      font-size: ${theme.fonts.size.SM};
      background: ${theme.colors.cream};
    }
  }

  input,
  select {
    padding: 0.5rem;
    border: 1px solid ${theme.colors.cream};
    border-radius: ${theme.borderRadius.smallRound};
    font-size: 15px;
  }

  input {
    color: ${theme.colors.cream};
    background: transparent;
  }

  input::placeholder {
    color: ${theme.colors.cream};
  }

  select option {
  }

  .button-reservation {
    width: 50%;
    padding: 0.5rem 1rem;
    background-color: ${theme.colors.cream};
    border: none;
    border-radius: ${theme.borderRadius.smallRound};
    cursor: pointer;
    transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out,
      background-color 0.5s ease-in-out, color 0.5s ease-in-out;

    &:hover {
      background: transparent;
      border: 1px solid ${theme.colors.cream};
      color: ${theme.colors.cream};
    }
  }

  @media (min-width: 768px) and (max-width: 1042px) {
    height: 100%;
    width: 100%;
  }

  @media (max-width: 767px) {
    width: 100%;
  }

  @media (max-width: 430px) {
    width: 100%;
    padding: 5vh 0;

    .select-container {
      width: 47px;
    }
  }
`;
