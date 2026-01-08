import React from 'react';

const NestedComponents = () => {
  const items = [
    { id: 1, name: "Pen", Price: 10 },
    { id: 2, name: "Pencil", Price: 5 },
    { id: 3, name: "Eraser", Price: 2 }
  ];

  const Item = ({ data }) => {
    return (
      <div>
        <h3>{data.name}</h3>
        <p>Price: ${data.Price}</p>
      </div>
    );
  };

  return (
    <div>
      {items.map(i => (
        <Item key={i.id} data={i} />
      ))}
    </div>
  );
};

export default NestedComponents;
