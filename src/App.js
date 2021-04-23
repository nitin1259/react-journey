import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>I m a React App !!!</h1>
    </div>
  );
  // compiler will convert over code to below code (behind the scenes)
  // return React.createElement(
  //   "div",
  //   { className: "App" },
  //   React.createElement("h1", null, "I m a React App !!!")
  // );
}

export default App;
