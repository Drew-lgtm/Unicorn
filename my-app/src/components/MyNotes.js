// src/components/MyNotes.js
import React, { useState, useEffect } from 'react';

const MyNotes = () => {
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem('notes');
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const handleChange = (event) => {
    setNote(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setNotes([...notes, note]);
    setNote('');
  };

  return (
    <div>
      <h2>My Notes</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          rows="5"
          cols="50"
          placeholder="Write your note..."
          value={note}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit">Add Note</button>
      </form>
      <hr />
      <h3>Notes:</h3>
      {notes.length > 0 ? (
        <ul>
          {notes.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </ul>
      ) : (
        <p>No notes yet.</p>
      )}
    </div>
  );
};

export default MyNotes;
