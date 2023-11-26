// components/ListTile.tsx
import React from 'react';
import ListModal from './ListModal';

interface ListTileProps {
  listName: string;
  onClick: (listName: string) => void;
}

const ListTile: React.FC<ListTileProps> = ({ listName, onClick }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', cursor: 'pointer' }} onClick={() => onClick(listName)}>
      <h3>{listName}</h3>
    </div>
  );
};

export default ListTile;
