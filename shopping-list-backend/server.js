

const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
const app = express();
const PORT = process.env.PORT || 3000;

// mock
let shoppingLists = [];

app.use(bodyParser.json());

function validateInputData(req, res, next) {
  next();
}

function authorize(req, res, next) {
  const isAuthenticated = true; 
  if (!isAuthenticated) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  next();
}

app.get('/', (req, res) => {
  res.send('Welcome to the Shopping List API!');
});

app.get('/api/lists', authorize, (req, res) => {
  res.json(shoppingLists);
});

app.post('/api/lists', authorize, validateInputData, (req, res) => {
  const newList = req.body;
  shoppingLists.push(newList);
  res.status(201).json(newList);
});

app.put('/api/lists/:listId', authorize, validateInputData, (req, res) => {
  const listId = req.params.listId;
  const updatedList = req.body;

  const index = shoppingLists.findIndex(list => list._id === listId);
  if (index !== -1) {
    shoppingLists[index] = { ...shoppingLists[index], ...updatedList };
    res.json(shoppingLists[index]);
  } else {
    res.status(404).json({ error: 'List not found' });
  }
});

app.delete('/api/lists/:listId', authorize, (req, res) => {
  const listId = req.params.listId;

  const index = shoppingLists.findIndex(list => list._id === listId);
  if (index !== -1) {
    shoppingLists.splice(index, 1);
    res.json({ message: 'List deleted successfully' });
  } else {
    res.status(404).json({ error: 'List not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
