import React, { useState, useEffect } from 'react';

function App() {

  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  // Side effect (runs once)
  useEffect(() => {
    console.log("App Loaded");
  }, []);

  // Add or Update item
  const handleAdd = () => {
    if (input.trim() === "") return;

    if (editIndex !== null) {
      const updatedItems = [...items];
      updatedItems[editIndex] = input;
      setItems(updatedItems);
      setEditIndex(null);
    } else {
      setItems([...items, input]);
    }

    setInput("");
  };

  // Delete item
  const handleDelete = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  // Edit item
  const handleEdit = (index) => {
    setInput(items[index]);
    setEditIndex(index);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Item Manager</h1>

      {/* Input */}
      <input
        type="text"
        value={input}
        placeholder="Enter item"
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={handleAdd}>
        {editIndex !== null ? "Update" : "Add"}
      </button>

      {/* List */}
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;