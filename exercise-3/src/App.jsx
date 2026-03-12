import { useState } from "react";

function App() {
  /* You will need to use many state to keep the inut values and other needs */
 const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState("");
  const [isError, setIsError] = useState(false);
  /* You will need some function to handle the key pressed and button events */
  function onA(event) {
    setA(event.target.value);
  }
  function onB(event) {
    setB(event.target.value);
  }
  
  function onCompute() {
    if (isNaN(a) || isNaN(b) || a === "" || b === "") {
      setIsError(true);
      setResult("Please enter valid numbers!");
    } else {
      setIsError(false);
      setResult(Number(a) + Number(b));
    }
  }

  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input onKeyUp={onA} />

      <label>B =</label>
      <input onKeyUp={onB} />

      <label>A + B =</label>

      {/* When Compute buton is clicked, this input display the sum of the 2 numbers, or the error message in RED */}
      <input disabled value={result} className={isError ? "error" : ""} />
      <button onClick={onCompute}>Compute</button>
    </main>
  );
}

export default App;
