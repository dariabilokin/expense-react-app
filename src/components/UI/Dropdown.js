import React from "react";
const Dropdown = ({ name, dropdownItems }) => {
  return (
    <div className="dropdown">
      <label tabIndex={0} className="">
        {name}
      </label>
      <ul className="">
        {dropdownItems.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};
export default Dropdown;
