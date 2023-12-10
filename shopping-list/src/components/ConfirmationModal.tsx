import React from 'react';
import Modal from 'react-modal';
import '../styles.css';

interface ConfirmationModalProps {
  isOpen: boolean;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ isOpen, message, onConfirm, onCancel }) => {
  const modalStyles = {
    backgroundColor: 'red',
    maxWidth: '40px',
    margin: 'auto',
  };
  return (
    <Modal isOpen={isOpen} onRequestClose={onCancel} contentLabel="Confirmation Modal">
      <div style={{ textAlign: 'center' }}>
        <p>{message}</p>
        <button onClick={onConfirm}>Confirm</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </Modal>
  );
};

export default ConfirmationModal;
