import React, { useState } from 'react';

const MyTodo = () => {
  const initialTasks = [
    { id: 1, text: 'Task 1', completed: true },
    { id: 2, text: 'Task 2', completed: false },
    { id: 3, text: 'Task 3', completed: true },
    { id: 4, text: 'Task 4', completed: false },
    { id: 5, text: 'Task 5', completed: true },
  ];

  const [tasks, setTasks] = useState(initialTasks);
  const [task, setTask] = useState('');

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (task.trim() === '') return; // Prevent adding empty tasks
    const newTask = {
      id: tasks.length + 1,
      text: task,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setTask('');
  };

  const handleToggleComplete = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleDelete = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h2>My Todo</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter task"
          value={task}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Task</button>
      </form>
      <hr />
      <ul style={styles.taskList}>
        {tasks.map((task) => (
          <li key={task.id} style={styles.taskItem}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleComplete(task.id)}
              style={styles.checkbox}
            />
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none', marginRight: '10px' }}>
              {task.text}
            </span>
            <button onClick={() => handleDelete(task.id)} style={styles.deleteButton}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  taskList: {
    listStyleType: 'none',
    padding: 0,
  },
  taskItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  checkbox: {
    marginRight: '10px',
  },
  deleteButton: {
    marginLeft: '10px',
    padding: '5px 10px',
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
};

export default MyTodo;
