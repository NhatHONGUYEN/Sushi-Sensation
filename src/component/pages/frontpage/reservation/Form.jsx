import { useState } from "react";
import styled from "styled-components";

export default function Form() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [guests, setGuests] = useState(1);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Traitez les données du formulaire ici
  };

  return (
    <FormContainerStyled onSubmit={handleSubmit}>
      <div className="input-container">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="input-container">
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
      </div>
      <div className="input-container">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="flex-container">
        <div className="input-container">
          <label htmlFor="guests">Guests</label>
          <select
            id="guests"
            defaultValue=""
            onChange={(e) => setGuests(e.target.value)}
            required
          >
            <option value="">Select number of guests</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
        </div>
        <div className="input-container">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            defaultValue=""
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="time">Time</label>
          <input
            type="time"
            id="time"
            defaultValue=""
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
      </div>
      <button type="submit">Reserve</button>
    </FormContainerStyled>
  );
}

const FormContainerStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 80%;

  .input-container {
    display: flex;
    flex-direction: column;
    padding: 10px;
    border: 1px solid #efe7d2;
    border-radius: 5px;
    color: #efe7d2;
    background-color: transparent;
    width: 100%;
  }

  .flex-container {
    display: flex;
    gap: 10px;
  }

  label {
    color: #efe7d2;
    font-size: 16px;
    margin-bottom: 5px;
  }

  input,
  select {
    border: none;
    background-color: transparent;
    color: #efe7d2;
  }

  button {
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #efe7d2;
    color: #222222;
    font-weight: bold;
    cursor: pointer;
  }
`;
