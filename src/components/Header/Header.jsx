import React, { useState } from 'react';
import './Header.css';
import smallRight from '../../assets/icons/small-right.png';
import smallLeft from '../../assets/icons/small-left.png';
import search from '../../assets/icons/search.png';

const Header = ({ handleSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleInputChange = (event) => {
        const value = event.target.value;
        setSearchTerm(value);
        handleSearch(value); // Passa o termo para o componente pai
    };

    return (
        <nav className="header__navigation">
            <div className="navigation">
                <button className="arrow-left">
                    <img src={smallLeft} alt="Voltar" />
                </button>
                <button className="arrow-right">
                    <img src={smallRight} alt="Avançar" />
                </button>
            </div>
            <div className="header__search">
                <img src={search} alt="Buscar" />
                <input
                    id="search-input"
                    maxLength="800"
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck="false"
                    placeholder="O que você quer ouvir?"
                    value={searchTerm}
                    onChange={handleInputChange} // Atualiza estado ao digitar
                />
            </div>
            <div className="header__login">
                <button className="subscribe">Inscreva-se</button>
                <button className="login">Entrar</button>
            </div>
        </nav>
    );
};

export default Header;
