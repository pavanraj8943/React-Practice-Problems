import React from "react";

function ListKey() {
  const obj = {
    Name: "Pavan",
    Role: "Developer",
    Age: 21
  };

  return (
    <ul>
      {Object.keys(obj).map((key) => (
        <li key={key}>
          {key}: {obj[key]}
        </li>
      ))}
    </ul>
  );
}

export default ListKey;
