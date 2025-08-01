const express = require('express');
const app = express();
app.use(express.json());

// Simulated database users
const users = [
  { id: 1, email: 'test@example.com', password: 'password123' },
];

// Endpoint to handle sign-in requests
app.post('/api/signin', (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    // Successfully authenticated
    res.status(200).json({ message: 'Sign in successful!' });
  } else {
    // Authentication failed
    res.status(401).json({ message: 'Invalid email or password.' });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
