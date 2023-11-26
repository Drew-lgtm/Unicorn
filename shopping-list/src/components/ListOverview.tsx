import React, { useState } from 'react';
import ListTile from './ListTile';
import ListModal from './ListModal';


const ListOverview: React.FC = () => {
    const [lists, setLists] = useState(['List1', 'List2', 'List3']);
    const [archivedLists, setArchivedLists] = useState<string[]>([]);
    const [selectedList, setSelectedList] = useState<string | null>(null);
  
    const handleListClick = (listName: string) => {
      setSelectedList(listName);
    };
  
    const handleModalClose = () => {
      setSelectedList(null);
    };
  
    const handleAddList = () => {
      const newListName = prompt('Enter the name for the new list');
      if (newListName !== null && newListName.trim() !== '') {
        setLists((prevLists) => [...prevLists, newListName]);
      }
    };
  
    const handleDeleteList = (listName: string) => {
      const confirmDelete = window.confirm(`Are you sure you want to delete the list "${listName}"?`);
      if (confirmDelete) {
        setLists((prevLists) => prevLists.filter((list) => list !== listName));
        setSelectedList(null);
      }
    };
  
    const handleArchiveList = (listName: string) => {
      setLists((prevLists) => prevLists.filter((list) => list !== listName));
      setArchivedLists((prevArchivedLists) => [...prevArchivedLists, listName]);
      setSelectedList(null);
    };
  
    const handleUnarchiveList = (listName: string) => {
      setArchivedLists((prevArchivedLists) => prevArchivedLists.filter((list) => list !== listName));
      setLists((prevLists) => [...prevLists, listName]);
    };
  
    return (
      <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px' }}>
        <h1>List Overview</h1>
        <div>
          {lists.map((listName, index) => (
            <div
              key={listName + index}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '10px',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '8px',
              }}
            >
              <ListTile listName={listName} onClick={() => handleListClick(listName)} />
              <button
                style={{
                  backgroundColor: '#dc3545',
                  color: '#fff',
                  border: 'none',
                  padding: '5px 10px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
                onClick={() => handleDeleteList(listName)}
              >
                Delete
              </button>
              <button
                style={{
                  backgroundColor: '#007bff',
                  color: '#fff',
                  border: 'none',
                  padding: '5px 10px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
                onClick={() => handleArchiveList(listName)}
              >
                Archive
              </button>
            </div>
          ))}
          <button
            style={{
              backgroundColor: '#28a745',
              color: '#fff',
              border: 'none',
              padding: '10px',
              borderRadius: '8px',
              cursor: 'pointer',
              marginBottom: '10px',
            }}
            onClick={handleAddList}
          >
            Add List
          </button>
        </div>
        <h2>ARCHIVED</h2>
        <div>
          {archivedLists.map((archivedList, index) => (
            <div
              key={archivedList + index}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '10px',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '8px',
              }}
            >
              <ListTile listName={archivedList} onClick={() => handleListClick(archivedList)} />
              <button
                style={{
                  backgroundColor: '#28a745',
                  color: '#fff',
                  border: 'none',
                  padding: '5px 10px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
                onClick={() => handleUnarchiveList(archivedList)}
              >
                Unarchive
              </button>
            </div>
          ))}
        </div>
        {selectedList && <ListModal listName={selectedList} onClose={handleModalClose} />}
      </div>
    );
  };
  
  export default ListOverview;
  