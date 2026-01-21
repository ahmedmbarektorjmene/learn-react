import { useRef } from "react";

function App() {
  const [count, setCount] = useState(0);
  console.log(count)
  return (
    <div>
      <input type="text" onChange={(event)=> setCount(event.target.value)}/>
      {count}
    </div>
  );
}

export default App;