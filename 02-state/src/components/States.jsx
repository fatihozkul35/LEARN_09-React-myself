import { useState, useEffect } from "react";
const States = () => {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("veli");
  const changeNumber = () => {
    setNumber(number + 1);
  };
  //   useEffect(() => console.log("state changed"));
  useEffect(() => {
    console.log("name state updated");
  }, [name]);
  return (
    <div className="text-center">
      <h1>STATES</h1>
      <button className="btn btn-info" onClick={changeNumber}>
        Click me to change the number
      </button>
      <p>{number}</p>
      <hr />
      <button className="btn btn-info" onClick={() => setName("mahmut")}>
        Click me to change the name
      </button>
      <p>{name}</p>
    </div>
  );
};

export default States;
