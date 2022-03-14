import React from "react";
import { useState, useEffect } from "react";
import { inputStyle } from "../../input/input";
import { buttonStyle } from "../../button/button";
import "./Form.css";

const firstValueOfForm = { fullname: "", phone_number: "" };

const Form = ({ addTodo, contacts }) => {
  const [form, setForm] = useState(firstValueOfForm);

  useEffect(() => {
    setForm(firstValueOfForm);
  }, [contacts]);

  const onChangeInput = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (form.fullname === "" || form.phone_number === "") {
      return false;
    }

    addTodo([...contacts, form]);
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          name="fullname"
          placeholder="Enter your full name"
          value={form.fullname}
          onChange={onChangeInput}
          style={inputStyle}
        />
      </div>
      <div>
        <input
          name="phone_number"
          placeholder="Enter your phone number"
          value={form.phone_number}
          onChange={onChangeInput}
          style={inputStyle}
        />
      </div>
      <div>
        <button style={buttonStyle}>Add</button>
      </div>
    </form>
  );
};

export default Form;
