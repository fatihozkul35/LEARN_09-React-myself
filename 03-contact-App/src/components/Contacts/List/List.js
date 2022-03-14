import React from "react";
import { useState } from "react";
import ListStyles from "./styles.module.css";
import { inputStyle } from "../../input/input";
console.log(ListStyles);
const List = ({ contacts }) => {
  const [filterText, setFilterText] = useState("");
  const filtered = contacts.filter((contact) => {
    return Object.keys(contact).some((key) =>
      contact[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLocaleLowerCase())
    );
  });
  return (
    <div>
      <input
        id="inputFilter"
        style={inputStyle}
        placeholder="Filter contact"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />

      <ul>
        {filtered.map((contact, i) => (
          <li key={i}>
            <h1>{contact.fullname}</h1>
            <span>{contact.phone_number}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
