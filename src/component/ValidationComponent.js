import React from "react";

function ValidationComponent(props) {
  let displayText = "Text too short !!!";
  if (props.textLen > 5) {
    displayText = "Text long enough (^^) ";
  }
  return (
    <div>
      <p>{displayText}</p>
    </div>
  );
}

export default ValidationComponent;
