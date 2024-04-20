const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const diaryRoutes = require('./routes/diaryRoutes');
// Import other route files

const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


app.get('/', (req, res) => {
    res.send('Hello World!');
});


// Use routes
app.use(userRoutes);
app.use(diaryRoutes);
// Use other routes

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
