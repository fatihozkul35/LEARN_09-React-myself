import React from "react";
import List from "./List/List";
import Form from "./Form/Form";
import { useState, useEffect } from "react";
import "./Contact.css";
const Contacts = () => {
  const [contacts, setContacts] = useState([
    { fullname: "John", phone_number: "123" },
    { fullname: "Ilgın", phone_number: "456" },
    { fullname: "Oguz", phone_number: "789" },
    { fullname: "İbo", phone_number: "12" },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div id="container">
      <h1 className="title">To Do React Project</h1>
      <List contacts={contacts} />
      <Form addTodo={setContacts} contacts={contacts} />
    </div>
  );
};

export default Contacts;
