import React from 'react'

const ListRenderingUniqueKey = () => {
  const items = [
    { id: 1, name: "Pavan" },
    { id: 2, name: "Anju" },
    { id: 3, name: "Abhi" }
  ];

  return (
    <div>
        {items.map(item => (
          <p key={item.id}>{item.name}</p>
        ))}
    </div>
  )
}

export default ListRenderingUniqueKey
