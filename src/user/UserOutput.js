import React from "react";
import "./User.css";

function UserOutput(props) {
  return (
    <div className="user">
      <p> This is the User Output Component</p>
      <p> {props.username} : you are seeing the dynamic content here</p>
    </div>
  );
}

export default UserOutput;
