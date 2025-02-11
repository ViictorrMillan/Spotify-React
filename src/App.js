// App.jsx
import React, { useState } from 'react';
import './styles/global.css';	
import './App.css';
import Header from '../src/components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';


function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div>
      <Header onSearch={handleSearch} />
      <Sidebar/>
    </div>
  );
}

export default App;