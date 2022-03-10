import { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);

  const decrease = () => {
    setCount(count - 1);
  };
  //   const increase = () => {
  //     setCount(count + 1);
  //   };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={decrease}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};

export default Counter;
