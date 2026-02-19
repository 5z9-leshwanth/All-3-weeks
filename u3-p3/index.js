const express = require('express');
const fs = require('fs');
const path = require('path');
const { body, validationResult } = require('express-validator');
const morgan = require('morgan');

const app = express();

app.use(express.json());
app.use(morgan('combined'));

app.post(
  '/process-input',
  [
    body('name').isString().withMessage('Name must be a string'),
    body('age').isInt({ min: 0 }).withMessage('Age must be non-negative')
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, age } = req.body;

    const userData = {
      name,
      age,
      timestamp: new Date().toISOString()
    };

    const filePath = path.join(__dirname, 'user-data.json');

    fs.writeFile(filePath, JSON.stringify(userData, null, 2), (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: 'File write error' });
      }

      res.json({
        message: 'Data processed successfully',
        data: userData
      });
    });
  }
);

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
