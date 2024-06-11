import React, { useState } from 'react';

const EditableBox = ({ onSubmitRow, onSubmitCol }) => {
  const [inputValue, setInputValue] = useState('');
  const [inputType, setInputType] = useState('row'); // 'row' or 'col'

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputType === 'row') {
      onSubmitRow(inputValue.split(',').map(item => item.trim()));
    } else {
      onSubmitCol(inputValue.split(',').map(item => item.trim()));
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
