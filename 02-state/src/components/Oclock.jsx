import { useState, useEffect } from "react";

const Oclock = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []);
  return (
    <div className="container text-center mt-5">
      <h1>OCLOCK PROJECT</h1>
      <p className="mt-5">
        <span>{count}</span>
      </p>
      <button className="btn btn-info" onClick={() => setCount(count + 1)}>
        click to start the Oclock
      </button>
    </div>
  );
};

export default Oclock;
