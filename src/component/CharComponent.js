import React from "react";
import "./styles.css";

function CharComponent(props) {
  return (
    <div className="char-comp" onClick={props.clicked}>
      <p>{props.charText}</p>
    </div>
  );
}

export default CharComponent;
