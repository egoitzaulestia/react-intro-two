import "./App.css";
import Counter from "./components/Counter/Counter";

function App() {
  return (
    <>
      {/* By default: starts at 0, step = 0 */}
      <Counter />

      {/* Starts at 10, steps of 2 */}
      <Counter start={10} step={2} />
    </>
  );
}

export default App;
