import React from "react";
import { useState } from "react";
const InputExample = () => {
  const [form, setForm] = useState({ name: "", surname: "" });
  const changeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      Name <br />
      <input name="name" value={form.name} onChange={changeInput} /> <br />
      Surname <br />
      <input name="surname" value={form.surname} onChange={changeInput} />{" "}
      <br />
      {form.name} {form.surname}
    </div>
  );
};

export default InputExample;
