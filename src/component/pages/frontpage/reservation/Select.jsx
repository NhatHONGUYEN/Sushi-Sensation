import React from "react";

const Select = React.forwardRef(({ id, options, value, onChange }, ref) => {
  return (
    <select id={id} ref={ref} value={value} onChange={onChange} required>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
});

export default Select;
