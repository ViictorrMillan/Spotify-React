import React, { useState, useEffect } from "react";
import "./Main.css";

import Playlist1 from "../../assets/playlist/1.jpeg";
import Playlist2 from "../../assets/playlist/2.png";
import Playlist3 from "../../assets/playlist/3.jpeg";
import Playlist4 from "../../assets/playlist/4.jpeg";
import Playlist5 from "../../assets/playlist/5.jpeg";
import Playlist6 from "../../assets/playlist/6.jpeg";
import Playlist7 from "../../assets/playlist/7.jpeg";
import Playlist8 from "../../assets/playlist/8.jpeg";
import Playlist9 from "../../assets/playlist/9.jpeg";
import Playlist10 from "../../assets/playlist/10.jpeg";
import Playlist11 from "../../assets/playlist/11.jpeg";
import Playlist12 from "../../assets/playlist/12.jpeg";
import Playlist13 from "../../assets/playlist/13.jpeg";
import Playlist14 from "../../assets/playlist/14.jpeg";
import Playlist15 from "../../assets/playlist/15.jpeg";

// Lista de playlists
const playlists = [
  { img: Playlist1, name: "Boas festas" },
  { img: Playlist2, name: "Feitos para você" },
  { img: Playlist3, name: "Lançamentos" },
  { img: Playlist4, name: "Creators" },
  { img: Playlist5, name: "Para treinar" },
  { img: Playlist6, name: "Podcasts" },
  { img: Playlist7, name: "Sertanejo" },
  { img: Playlist8, name: "Samba e pagode" },
  { img: Playlist9, name: "Funk" },
  { img: Playlist10, name: "MPB" },
  { img: Playlist11, name: "Rock" },
  { img: Playlist12, name: "Hip Hop" },
  { img: Playlist13, name: "Indie" },
  { img: Playlist14, name: "Relax" },
  { img: Playlist15, name: "Música Latina" },
];

const Main = ({ searchTerm }) => {
  const [greeting, setGreeting] = useState(""); // Estado para armazenar a saudação
  const [columns, setColumns] = useState(1); // Estado para o número de colunas

  // Função para obter a saudação com base na hora atual
  const getGreetingMessage = (currentHour) => {
    if (currentHour >= 5 && currentHour < 12) {
      return "Bom dia";
    } else if (currentHour >= 12 && currentHour < 18) {
      return "Boa tarde";
    } else {
      return "Boa noite";
    }
  };

  // Atualiza a saudação com base na hora atual
  useEffect(() => {
    const currentHour = new Date().getHours(); // Obtém a hora atual
    const greetingMessage = getGreetingMessage(currentHour); // Obtém a saudação
    setGreeting(greetingMessage); // Atualiza o estado com a saudação
  }, []);

  useEffect(() => {
    const container = document.querySelector(".offer__list-item");

    const observer = new ResizeObserver(() => {
      const containerWidth = container.clientWidth;
      const numColumns = Math.floor(containerWidth / 220);

      // Evita o ciclo infinito
      if (numColumns !== columns) {
        setColumns(numColumns);
      }
    });

    observer.observe(container);
    return () => {
      observer.disconnect();
    };
  }, [columns]); // Atualiza o número de colunas quando o estado mudar

  return (
    <div className="playlist-container">
      <div id="result-playlists">
        <div className="playlist">
          <h1 id="greeting">{greeting}</h1> {/* Exibe a saudação */}
          <h2 className="greeting-subtitle">Navegar por todas as seções</h2>
        </div>

        <div className="offer__scroll-container">
          <div className="offer__list">
            <section
              className="offer__list-item"
              style={{
                gridTemplateColumns: `repeat(${Math.max(columns, 1)}, minmax(200px, 1fr))`,
              }}
            >
              {playlists.map((playlist, index) => (
                <a key={index} href="#" className="cards">
                  <div className={`cards card${index + 1}`}>
                    <img src={playlist.img} alt={playlist.name} />
                    <span>{playlist.name}</span>
                  </div>
                </a>
              ))}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
