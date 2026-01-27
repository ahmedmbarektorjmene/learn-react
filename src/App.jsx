import { useEffect, useState } from "react";

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    const T = setInterval(() => {
      console.log("hii");
    }, 2000);

    return () => {
      clearInterval(T);
    };
  });

  return (
    <div>
      <button onClick={() => setCount1((prev) => prev + 1)}>{count1}</button>
      <button onClick={() => setCount2((prev) => prev + 1)}>{count2}</button>
    </div>
  );
}
export default App;
