import React, { Fragment, useState, useEffect } from 'react';
import NewItemInput from './NewItemInput';

const List: React.FC = () => {
  const [items, setItems] = useState<{ id: number; text: string; completed: boolean }[]>([]);
  const [nextId, setNextId] = useState(1);

  const handleAddItem = (newItem: string) => {
    if (newItem.trim() !== '') {
      setItems([...items, { id: nextId, text: newItem, completed: false }]);
      setNextId(nextId + 1);
    }
  };

  const handleToggleCompleted = (id: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  // useEffect to add default items on component mount
  useEffect(() => {
    const defaultItems = ['Item1', 'Item2'];
    const defaultItemsData = defaultItems.map((item, index) => ({
      id: nextId + index,
      text: item,
      completed: false,
    }));

    setItems([...items, ...defaultItemsData]);
    setNextId(nextId + defaultItemsData.length);
  }, []); // Empty dependency array ensures this effect runs once on mount

  const completedItems = items.filter((item) => item.completed);
  const incompleteItems = items.filter((item) => !item.completed);

  return (
    <Fragment>
      <h1>Shopping List💳</h1>
      <ul>
        {incompleteItems.map((item) => (
          <li key={item.id} className="list-item">
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => handleToggleCompleted(item.id)}
            />
            <span style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
              {item.text}
            </span>
          </li>
        ))}
      </ul>
      {completedItems.length > 0 && <hr />}
      <ul>
        {completedItems.map((item) => (
          <li key={item.id} className="list-item">
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => handleToggleCompleted(item.id)}
            />
            <span style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
              {item.text}
            </span>
          </li>
        ))}
      </ul>
      <NewItemInput onAddItem={handleAddItem} />
    </Fragment>
  );
};

export default List;
