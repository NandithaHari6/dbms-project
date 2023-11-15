const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Simulated user data
const users = [
  { id: 1, username: 'user1', password: 'password1', bankId: 'bank1' },
  { id: 2, username: 'user2', password: 'password2', bankId: 'bank2' },
  // Add more users as needed
];

// Secret key for signing JWT
const secretKey = 'your_secret_key';

// Middleware for authenticating user based on JWT
function authenticateUser(req, res, next) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const token = authorization.replace('Bearer ', '');

  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return res.status(401).json({ error: 'Invalid token' });
    }

    req.user = user; // Store user information in req.user
    next();
  });
}

// Route for user login
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    // Create a JWT and send it as a response
    const token = jwt.sign({ id: user.id, username: user.username, bankId: user.bankId }, secretKey);
    res.json({ message: 'Login successful', token });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

// Use the authenticateUser middleware for routes that require authentication
app.use('/loans', authenticateUser);

// Your loan routes go here, and they can access the authenticated user information via req.user
app.get('/loans', (req, res) => {
  const { bankId } = req.user;
  // Retrieve loans based on bankId
  // ...
  res.json({ message: 'Retrieving loans for bankId: ' + bankId });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

  