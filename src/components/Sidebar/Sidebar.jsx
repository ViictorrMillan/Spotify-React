import './Sidebar.css';
import logoSpotify from '../../assets/icons/logo-spotify.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faGlobe, faBook, faPlus } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav className="sidebar__navigation">
        <div className="logo">
          <a href=""> 
            <img src={logoSpotify} alt="Logo Spotify" />
          </a>
        </div>
        <ul>
          <li> 
            <a href="">
              <span className="icon-container">
                <FontAwesomeIcon icon={faHome} className="fa" />
              </span>
              <span> Início</span>
            </a>
          </li>
          <li> 
            <a href="">
              <span className="icon-container">
                <FontAwesomeIcon icon={faSearch} className="fa" />
              </span>
              <span> Buscar </span>
            </a>    
          </li>
        </ul>
      </nav>

      <div className="library">
        <div className="library__content">
          <button className="library__button">
            <FontAwesomeIcon icon={faBook} className="fa" />
            <span> Sua biblioteca</span>
          </button>
          <FontAwesomeIcon icon={faPlus} className="fa" />
        </div>

        <section className="section-playlist">
          <div className="section-playlist__content">
            <span className="text title"> Crie sua primeira playlist</span>
            <span className="text subtitle"> É fácil, vamos te ajudar.</span>
            <button className="section-playlist__button">
              <span>Criar playlist</span>
            </button>
          </div>
        </section>

        <div className="cookies">
          <a href="">Cookies</a>
        </div>

        <div className="languages">
          <button className="languages__button">
            <FontAwesomeIcon icon={faGlobe} className="fa" />
            <span> Português do Brasil</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
