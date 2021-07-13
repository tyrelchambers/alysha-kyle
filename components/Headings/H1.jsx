import React from "react";

const H1 = (props) => (
  <h1 className={`text-gray-800 ${props.className ? props.className : ""}`}>
    {props.children}
  </h1>
);

export default H1;
