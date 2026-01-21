import { useRef } from "react";

function App() {
  const ref = useRef();
  return (
    <div>
      <input ref={ref} type="text" />
      <button onClick={() => console.log(ref.current.value)}>print</button>
      {/* doesnt work ! remove it ! */}
      {ref.current.value}
      {/* we use useRef for non rerendering things
            When it changes → no re-render.
          and we use useState for rerendering things
            When the state changes → React re-renders → UI may change.
          Does this value participate in rendering? -----> useState
          otherwise ------> useRef
      */}
    </div>
  );
}

export default App;
