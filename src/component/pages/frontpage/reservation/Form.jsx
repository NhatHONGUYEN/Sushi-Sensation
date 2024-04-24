import { useRef, useState } from "react";
import styled from "styled-components";
import Input from "../../../../reusible ui/Input.jsx";
import Select from "./Select";
import DateInput from "./DateInput";
import { timeOptions } from "../../../../fakedata/timeOptions";

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
        Reserve
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
    width: 100%;
    color: #efe7d2;
  }

  .flex-container {
    display: flex;
    gap: 1rem;
    width: 100%;
  }

  .select-container {
    select,
    input[type="date"] {
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 0.25rem;
      color: #000;
      font-size: 15px;
      background: #efe7d2;
    }
  }

  input,
  select {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    font-size: 15px;
  }

  input {
    color: #efe7d2;
    background: transparent;
  }

  input::placeholder {
    color: #efe7d2;
  }

  select option {
  }

  .button-reservation {
    margin-top: 25%;
    width: 50%;
    padding: 0.5rem 1rem;
    background-color: #efe7d2;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
  }
`;
