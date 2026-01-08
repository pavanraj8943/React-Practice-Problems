import React, { memo } from 'react';

const ListItem = memo(({ data }) => <li>{data}</li>);

 function PreventReRender() {
  const items = ['Booke', 'Pen', 'Pencil', 'Eraser'];
console.log('render');

  return (
    <ul>
      {items.map(item => (
        <ListItem key={item} data={item} />
      ))}
    </ul>
  );
}
export default PreventReRender;