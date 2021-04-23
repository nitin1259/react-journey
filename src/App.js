import { useState } from "react";
import "./App.css";
import UserInput from "./user/UserInput";
import UserOutput from "./user/UserOutput";

/**
 * 
 * @returns 
 * The instructions are:

Create TWO new components: UserInput and UserOutput
UserInput should hold an input element, UserOutput two paragraphs
Output multiple UserOutput components in the App component (any paragraph texts of your choice)
Pass a username (of your choice) to UserOutput via props and display it there
Add state to the App component (=> the username) and pass the username to the UserOutput component
Add a method to manipulate the state (=> an event-handler method)
Pass the event-handler method reference to the UserInput component and bind it to the input-change event
Ensure that the new input entered by the user overwrites the old username passed to UserOutput
Add two-way-binding to your input (in UserInput) to also display the starting username
Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets

 * 
 */

function App() {
  const [userName, setUserName] = useState("default-name");

  const changeUserHandler = (event) => {
    if (event.target.value) setUserName(event.target.value);
    else setUserName("Kapil");
  };

  const btnStyle = {
    backgroundColor: "#999",
    border: "1px solid red",
    width: "150px",
    height: "30px",
    borderRadius: "5px",
  };
  return (
    <div className="App">
      <h1>I m a React App !!!</h1>

      <UserInput username={userName} changeUser={changeUserHandler} />

      <br></br>
      <button onClick={changeUserHandler} style={btnStyle}>
        {" "}
        Change User
      </button>
      <UserOutput username={userName} />
    </div>
  );
}

export default App;
