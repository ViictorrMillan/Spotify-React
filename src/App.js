// App.jsx
import React, { useState } from 'react';
import './styles/global.css';	
import './App.css';
import Header from '../src/components/Header/Header';


function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div>
      <Header onSearch={handleSearch} />
    </div>
  );
}

export default App;