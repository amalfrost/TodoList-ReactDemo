import React, { useState } from "react";

function App() {
  const [inputItems, setInputItems] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(e) {
    const inputItem = e.target.value;
    setInputItems(inputItem);
  }
  function addItems() {
    setItems((prevItem) => {
      return [...prevItem, inputItems];
    });
    setInputItems("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputItems} />
        <button onClick={addItems}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
