import React from 'react';

const List = ({ data, ItemComponent, className }) => {
  return (
    <ul className={className}>
      {data.map(element => (
        <ItemComponent key={element.id} element={element} />
      ))}
    </ul>
  );
};
export default List;
