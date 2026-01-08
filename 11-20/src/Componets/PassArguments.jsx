import React from "react";

function List({ items }) {
  const handleClick = (item) => {
    alert(`${item} veno...?`);
  };

  return (
    <>
      {items.map((i) => (
        <button key={i} onClick={() => handleClick(i)}>
          {i}
        </button>
      ))}
    </>
  );
}

export default List;
