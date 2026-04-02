// Import required modules
const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const bodyParser = require('body-parser');
const path = require('path');

// Create an Express app
const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// MongoDB configuration
const MONGO_URI = 'mongodb://127.0.0.1:27017';
const DATABASE_NAME = 'SNIST';
let db;

// Connect to MongoDB
MongoClient.connect(MONGO_URI)
  .then(client => {
    console.log('Connected to MongoDB');
    db = client.db(DATABASE_NAME);
  })
  .catch(err => console.error(err));

/* ================= ROUTES ================= */

// Home - Read all items
app.get('/', async (req, res) => {
  try {
    const items = await db.collection('items').find().toArray();
    res.render('index', { items });
  } catch (error) {
    res.status(500).send('Error fetching items');
  }
});

// Show Create Form
app.get('/create', (req, res) => {
  res.render('create');
});

// Create Item
app.post('/create', async (req, res) => {
  try {
    await db.collection('items').insertOne({
      name: req.body.name,
      description: req.body.description
    });
    res.redirect('/');
  } catch (error) {
    res.status(500).send('Error creating item');
  }
});

// Show Edit Form
app.get('/edit/:id', async (req, res) => {
  try {
    const item = await db.collection('items').findOne({
      _id: new ObjectId(req.params.id)
    });
    res.render('edit', { item });
  } catch (error) {
    res.status(500).send('Error fetching item');
  }
});

// Update Item
app.post('/edit/:id', async (req, res) => {
  try {
    await db.collection('items').updateOne(
      { _id: new ObjectId(req.params.id) },
      {
        $set: {
          name: req.body.name,
          description: req.body.description
        }
      }
    );
    res.redirect('/');
  } catch (error) {
    res.status(500).send('Error updating item');
  }
});

// Delete Item
app.post('/delete/:id', async (req, res) => {
  try {
    await db.collection('items').deleteOne({
      _id: new ObjectId(req.params.id)
    });
    res.redirect('/');
  } catch (error) {
    res.status(500).send('Error deleting item');
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});