import React from "react";

function UserInput(props) {
  return (
    <div>
      <label>Enter some text here: </label>
      <input
        type="text"
        name="user-input"
        onChange={props.changeUser}
        value={props.username}
      />
    </div>
  );
}

export default UserInput;
