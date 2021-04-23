import { useState } from "react";
import "./App.css";
import CharComponent from "./component/CharComponent";
import ValidationComponent from "./component/ValidationComponent";

function App() {
  const [inputText, setInputText] = useState("");

  const inputChangeHandler = (event) => {
    setInputText(event.target.value);
  };

  const onDeleteHandler = (index) => {
    const text = inputText.split("");
    text.splice(index, 1);
    const updatedText = text.join("");
    setInputText(updatedText);
  };

  const charArr = inputText.split("");
  console.log(charArr);

  let characters = null;

  if (charArr.length > 0) {
    characters = charArr.map((ch, index) => (
      <CharComponent
        charText={ch}
        key={index}
        clicked={() => onDeleteHandler(index)}
      />
    ));
  }

  return (
    <div className="App">
      <h1>I m a React App !!!</h1>

      <input type="text" onChange={inputChangeHandler} value={inputText} />
      <p>Text: {inputText}</p>
      <br></br>
      <ValidationComponent textLen={inputText.length} />

      <br></br>
      <div>{characters}</div>
    </div>
  );
}

export default App;
