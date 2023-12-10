import React, { useState } from 'react';
import ListTile from './ListTile';
import ListModal from './ListModal';
import ConfirmationModal from './ConfirmationModal';
import { lists } from './mockData';


const ListOverview: React.FC = () => {
  const [lists, setLists] = useState(['Mock List1', 'Mock List2', 'Mock List3']);
  const [archivedLists, setArchivedLists] = useState<string[]>([]);
  const [selectedList, setSelectedList] = useState<string | null>(null);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [listToDelete, setListToDelete] = useState<string | null>(null);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState<boolean>(false);

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
    setListToDelete(listName);
    setSelectedList(listName);
    setIsConfirmationModalOpen(true);
  };

    const handleConfirmDelete = () => {
    const confirmedList = listToDelete;
    setShowConfirmationModal(false);
    setListToDelete(null);

    if (confirmedList) {
      setLists((prevLists) => prevLists.filter((list) => list !== confirmedList));
    }
  };

    const handleCancelDelete = () => {
      setShowConfirmationModal(false);
      setListToDelete(null);
    };

    const cancelDeleteList = () => {
      setSelectedList(null);
      setIsConfirmationModalOpen(false);
    };

    const confirmDeleteList = () => {
      setLists((prevLists) => prevLists.filter((list) => list !== selectedList));
      setSelectedList(null);
      setIsConfirmationModalOpen(false);
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
        {isConfirmationModalOpen && (
          <ConfirmationModal
            isOpen={isConfirmationModalOpen}
            message={`Are you sure you want to delete this list "${selectedList}"?`}
            onConfirm={confirmDeleteList}
            onCancel={cancelDeleteList}
          />
        )}
        {selectedList && <ListModal listName={selectedList} onClose={handleModalClose} />}
      </div>
    );
  };
  
  export default ListOverview;
  