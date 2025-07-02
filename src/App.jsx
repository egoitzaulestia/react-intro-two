import "./App.css";
import Counter from "./components/Counter/Counter";

function App() {
  return (
    <>
      {/* By default: starts at 0, step = 0 */}
      <Counter />

      {/* Starts at 5, steps of 5 */}
      <Counter start={5} step={5} />
    </>
  );
}

export default App;
