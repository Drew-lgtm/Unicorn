// ListModal.tsx
import React from 'react';
import useList from './useList';
import NewItemInput from './NewItemInput';

interface ListModalProps {
  listName: string;
  onClose: () => void;
}

const ListModal: React.FC<ListModalProps> = ({ listName, onClose }) => {
  const {
    handleListNameChange,
    incompleteItems,
    completedItems,
    handleToggleCompleted,
    handleDeleteItem,
    handleAddItem,
  } = useList();

  return (
    <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', backgroundColor: '#fff' }}>
      <h2>{listName} Modal</h2>
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
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => handleToggleCompleted(item.id)}
            />
            <span style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
              {item.text}
            </span>
            <button onClick={() => handleDeleteItem(item.id)} className="delete-button">
              &#10006;
            </button>
          </li>
        ))}
      </ul>
      <NewItemInput onAddItem={handleAddItem} />
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default ListModal;
