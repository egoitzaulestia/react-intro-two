import "./App.css";
import Counter from "./components/Counter";

function App() {
  return (
    <>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>+</button>
        <p>{count}</p>
        <button onClick={() => setCount((count) => count - 1)}>-</button>
      </div> */}
      <Counter />
    </>
  );
}

export default App;
