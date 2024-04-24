import React from "react";

const DateInput = React.forwardRef(({ value, onChange }, ref) => {
  const today = new Date().toISOString().split("T")[0];

  return (
    <input
      type="date"
      ref={ref}
      value={value}
      onChange={onChange}
      min={today}
      required
    />
  );
});

export default DateInput;
