import React, { useState } from 'react';

interface NewItemInputProps {
  onAddItem: (newItem: string) => void;
}

const NewItemInput: React.FC<NewItemInputProps> = ({ onAddItem }) => {
  const [newItem, setNewItem] = useState('');

  const handleAddItem = () => {
    if (newItem.trim() !== '') {
      onAddItem(newItem);
      setNewItem('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAddItem();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Enter new item"
      />
      <button onClick={handleAddItem}>Add Item</button>
    </div>
  );
};

export default NewItemInput;
