import { useState } from "react";
import Fiction from "./components/Fiction";
import NonFiction from "./components/NonFiction"

function App() {

  const [flag, setflag] = useState(true)
  return (
    <div>
      <h1 className="title">Mini Book Store 📕</h1>
      <button id="btn" onClick={() => setflag(!flag)} data-testid="toggle-btn">{flag ? "Show Non-Fiction Books" : "Show Fiction Books"}</button>

      <div data-testid="conditional-container">
        {/* Render either Fiction or NonFiction Based on the Condition */}
        {flag ? <Fiction /> : <NonFiction />}
      </div>
    </div>
  );
}

export default App;
