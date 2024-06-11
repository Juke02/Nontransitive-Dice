import React, { useState } from 'react';
import './App.css';
import EditableBox from './EditableBox';
import Grid from './Grid';

function App() {
  const [rowData, setRowData] = useState(Array(10).fill(''));
  const [colData, setColData] = useState(Array(10).fill(''));

  const handleRowSubmit = (data) => {
    setRowData(data);
  };

  const handleColSubmit = (data) => {
    setColData(data);
  };

  return (
    <div className="App">
      <h1>Nontransitive Dice Calculator</h1>
      <EditableBox onSubmitRow={handleRowSubmit} onSubmitCol={handleColSubmit} />
      <Grid rowLabels={rowData} colLabels={colData} />
    </div>
  );
}

export default App;
