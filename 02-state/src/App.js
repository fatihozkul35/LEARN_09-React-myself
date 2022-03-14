// import { useState } from "react";
// import Counter from "./components/Counter";

import Oclock from "./components/Oclock";
// import States from "./components/States";

// import InputExample from "./components/InputExample";
function App() {
  // const [name, setName] = useState("mehmet");
  // const [age, setAge] = useState(29);
  // const [friends, setFriends] = useState(["ahmet", "mahmut"]);
  // const [address, setAddress] = useState({ title: "izmir", zip: 35320 });
  return (
    <div>
      {/* <h1>merhaba {name}</h1>
      <h2>I'm {age} years old</h2>
      <button onClick={() => setName("veli")}>Click me for name</button>
      <button onClick={() => setAge(32)}>Click me for age</button>
      <hr />
      <br />
      <br />

      <h2>friends</h2>
      {friends.map((friend, index) => (
        <div key={index}>{friend}</div>
      ))}
      <br />
      <button onClick={() => setFriends([...friends, "Ayse"])}>
        Click me for friends
      </button>
      <hr />
      <br />
      <br />
      <h2>Address</h2>
      <div>
        {address.title} {address.zip}
      </div>
      <button
        onClick={() =>
          setAddress({ ...address, title: "eskisehir", zip: 12345 })
        }
      >
        Click me for address
      </button>
      <Counter /> */}
      {/* <InputExample /> */}
      {/* <States /> */}
      <Oclock />
    </div>
  );
}

export default App;
