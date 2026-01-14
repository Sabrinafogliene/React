import {Header} from '../../components/Header';
import background from "../../assets/background.png";
import "./styles.css";

function App() {
  return (
    <div className="App">
     <Header />
     <div className="conteudo">
        <img src={background} className="background" alt="background app" />
        <div className="info">
          <div>
            <input name="usuario" placeholder="@username" />
            <button>Buscar</button>
          </div>
          <div className="perfil">
            <img src="https://avatars.githubusercontent.com/u/162124050?s=400&u=684b8ead006d2c2be3c6c783480d69a14c361257&v=4" className="profile" alt="imagem de perfil" />
            <div>
              <h3>Sabrina Fogliene</h3>
              <span>@sabrinafogliene</span>
              <p>Desenvolvedora Frull stack | ReactJS | JavaScript | HTML | CSS | SQL | Phyton | Ruby</p>
            </div>
          </div>
          <hr />
        </div>
     </div>
    </div>
  );
}

export default App;
