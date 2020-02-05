import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MonthPaper from './MonthPaper';

const App = () => {
  return <BrowserRouter>
    <MonthPaper />
  </BrowserRouter>
}

export default App;
