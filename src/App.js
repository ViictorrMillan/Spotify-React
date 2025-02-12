// App.jsx
import React, { useState } from 'react';
import './styles/reset.css';  // Reset global (importado primeiro)
import './styles/global.css';  // Variáveis globais e estilos gerais
import './styles/media-queries.css';  // Estilos responsivos

import './App.css';
import Header from '../src/components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';



function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div>
      <Header handleSearch={handleSearch}/>
      <Sidebar/>
      <Main searchTerm={searchTerm}/>
      <Footer/>
    </div>
  );
}

export default App;