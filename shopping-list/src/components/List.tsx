import React, { Fragment, useState, useEffect } from 'react';
import NewItemInput from './NewItemInput';

interface ListProps {
  listName: string;
}

const List: React.FC<ListProps> = ({ listName }) => {
  const [items, setItems] = useState<{ id: number; text: string; completed: boolean }[]>([]);
  const [nextId, setNextId] = useState(1);

  // Load items from localStorage when the component mounts
  useEffect(() => {
    const storedItems = localStorage.getItem(listName);
    if (storedItems) {
      setItems(JSON.parse(storedItems));
      const maxId = Math.max(...(JSON.parse(storedItems) as { id: number }[]).map((item) => item.id), 0);
      setNextId(maxId + 1);
    }
  }, [listName]);

  // Function to handle adding an item to the list
  const handleAddItem = (newItem: string) => {
    if (newItem.trim() !== '') {
      const newItemObject = { id: nextId, text: newItem, completed: false };
      setItems((prevItems) => [...prevItems, newItemObject]);
      localStorage.setItem(listName, JSON.stringify([...items, newItemObject]));
      setNextId(nextId + 1);
    }
  };

  // Function to handle toggling the completion status of an item
  const handleToggleCompleted = (id: number) => {
    setItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, completed: !item.completed } : item))
    );
    localStorage.setItem(listName, JSON.stringify(items));
  };

  // Function to handle deleting an item from the list
  const handleDeleteItem = (id: number) => {
    setItems((prevItems) => {
      const updatedItems = prevItems.filter((item) => item.id !== id);
      localStorage.setItem(listName, JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  // Function to handle changing the list name
  const handleListNameChange = () => {
    const newName = prompt('Enter a new name for the shopping list', listName);
    if (newName !== null && newName.trim() !== '') {
    }
  };

  const completedItems = items.filter((item) => item.completed);
  const incompleteItems = items.filter((item) => !item.completed);

  return (
    <Fragment>
      <h1 style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px', display: 'inline-block' }}>
        {listName} 💳
        <button style={{ marginLeft: '10px', fontSize: '12px' }} onClick={handleListNameChange}>
          ✎
        </button>
      </h1>
      <ul>
        {incompleteItems.map((item) => (
          <li key={item.id} className="list-item">
            <input type="checkbox" checked={item.completed} onChange={() => handleToggleCompleted(item.id)} />
            <span style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>{item.text}</span>
            <button onClick={() => handleDeleteItem(item.id)} className="delete-button">
              &#10006;
            </button>
          </li>
        ))}
      </ul>
      {completedItems.length > 0 && <hr />}
      <ul>
        {completedItems.map((item) => (
          <li key={item.id} className="list-item">
            <input type="checkbox" checked={item.completed} onChange={() => handleToggleCompleted(item.id)} />
            <span style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>{item.text}</span>
            <button onClick={() => handleDeleteItem(item.id)} className="delete-button">
              &#10006;
            </button>
          </li>
        ))}
      </ul>
      <NewItemInput onAddItem={handleAddItem} />
    </Fragment>
  );
};

export default List;
