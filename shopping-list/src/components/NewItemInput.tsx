import React, { useState } from "react";

interface NewItemInputProps {
  onAddItem: (newItem: string) => void;
}

const NewItemInput: React.FC<NewItemInputProps> = ({ onAddItem }) => {
  const [newItem, setNewItem] = useState("");

  const handleAddItem = () => {
    if (newItem.trim() !== "") {
      onAddItem(newItem);
      setNewItem("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Enter new item"
      />
      <button onClick={handleAddItem}>Add Item</button>
    </div>
  );
};

export default NewItemInput;
