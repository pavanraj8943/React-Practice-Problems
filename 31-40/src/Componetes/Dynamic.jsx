import React from 'react';

const Dynamic = ({ item }) => {
  return (
    <ul>
      <li className={item.active ? 'active' : 'inactive'}>
        {item.name}
      </li>
    </ul>
  );
};

export default Dynamic;
