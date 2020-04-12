// @flow
import React from 'react';
import Header from './components/layout/Header';

import './App.css';
import Featured from "./components/featured/Featured";

function App() {
  return (
    <div style={{ height: '1500px', background: 'cornflowerblue' }}>
      <Header />
      <Featured />
    </div>
  );
}

export default App;
