import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import HomePage from './components/HomePage';
import Quotes from './components/Quotes';

class App extends React.PureComponent {
  render() {
    return (
      <>
        <div className="app-container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="calculator" element={<Calculator />} />
            <Route path="Quotes" element={<Quotes />} />
          </Routes>
        </div>
      </>
    );
  }
}

export default App;
