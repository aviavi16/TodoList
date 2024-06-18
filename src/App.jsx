import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import ToDoList from './ToDoList.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ToDoList />} />
      </Routes>
    </Router>
  );
}

export default App;
