import React, { useState } from 'react';

const EditableBox = ({ onSubmitRow, onSubmitCol }) => {
  const [inputValue, setInputValue] = useState('');
  const [inputType, setInputType] = useState('row'); // 'row' or 'col'

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Use regex to match numbers, including multi-digit numbers
    const parsedData = inputValue.match(/\d+/g)?.map(item => item.trim()) || [];
    
    if (inputType === 'row') {
      onSubmitRow(parsedData);
    } else {
      onSubmitCol(parsedData);
    }
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <select value={inputType} onChange={(e) => setInputType(e.target.value)}>
        <option value="row">Dice 1 values</option>
        <option value="col">Dice 2 values</option>
      </select>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter data (comma-separated)"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default EditableBox;
