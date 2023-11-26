// useList.ts
import { useState, useEffect } from 'react';
import NewItemInput from './NewItemInput';


const useList = (defaultItems: string[] = []) => {
  const [items, setItems] = useState<{ id: number; text: string; completed: boolean }[]>([]);
  const [nextId, setNextId] = useState(1);
  const [listName, setListName] = useState<string>('Shopping List');

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

  const handleDeleteItem = (id: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleListNameChange = () => {
    const newName = prompt('Enter a new name for the shopping list', listName);
    if (newName !== null && newName.trim() !== '') {
      setListName(newName);
    }
  };

  // useEffect to add default items on component mount
  useEffect(() => {
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

  return {
    listName,
    handleListNameChange,
    incompleteItems,
    completedItems,
    handleToggleCompleted,
    handleDeleteItem,
    handleAddItem,
  };
};

export default useList;
