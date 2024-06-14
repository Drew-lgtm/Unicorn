// src/components/MyDiary.js
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const MyDiary = () => {
  const [date, setDate] = useState(new Date());
  const [entry, setEntry] = useState('');
  const [entries, setEntries] = useState(() => {
    const savedEntries = localStorage.getItem('diaryEntries');
    return savedEntries ? JSON.parse(savedEntries).map(entry => ({
      ...entry,
      date: new Date(entry.date)
    })) : [];
  });

  useEffect(() => {
    localStorage.setItem('diaryEntries', JSON.stringify(entries));
  }, [entries]);

  const handleChangeDate = (selectedDate) => {
    setDate(selectedDate);
  };

  const handleChangeEntry = (event) => {
    setEntry(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newEntry = { date, entry };
    setEntries([...entries, newEntry]);
    setEntry('');
  };

  return (
    <div>
      <h2>My Diary</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Date:</label>
          <DatePicker selected={date} onChange={handleChangeDate} dateFormat="dd/MM/yyyy" />
        </div>
        <div>
          <label>Entry:</label>
          <textarea
            value={entry}
            onChange={handleChangeEntry}
            placeholder="Write your diary entry..."
            rows={5}
            cols={50}
            required
          />
        </div>
        <button type="submit">Add Entry</button>
      </form>
      <hr />
      <h3>Entries:</h3>
      {entries.length > 0 ? (
        <ul>
          {entries.map((entry, index) => (
            <li key={index}>
              <strong>{entry.date.toLocaleDateString()}</strong>: {entry.entry}
            </li>
          ))}
        </ul>
      ) : (
        <p>No entries yet.</p>
      )}
    </div>
  );
};

export default MyDiary;
