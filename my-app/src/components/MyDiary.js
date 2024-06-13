import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const MyDiary = () => {
  const [date, setDate] = useState(new Date());
  const [entry, setEntry] = useState('');

  const handleChangeDate = (selectedDate) => {
    setDate(selectedDate);
  };

  const handleChangeEntry = (event) => {
    setEntry(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Process your diary entry submission here
    console.log('Date:', date);
    console.log('Entry:', entry);
    // Reset form fields after submission
    setDate(new Date());
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
    </div>
  );
};

export default MyDiary;
