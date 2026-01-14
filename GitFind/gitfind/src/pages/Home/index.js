import {useState} from 'react';
import {Header} from '../../components/Header';
import background from "../../assets/background.png";
import ItemList from '../../components/ItemList';
import "./styles.css";

function App() {
  const [user, setUser] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [repos, setRepos] = useState(null);
  const [error, setError] = useState(false);

  const handleGetData = async () => {
    setError(false);
    try {
      const userData = await fetch(`https://api.github.com/users/${user}`);
      const newUser = await userData.json();
    
      if(newUser.login){
        const {avatar_url, name, bio, login} = newUser;
        setCurrentUser({avatar_url, name: name || login, bio, login});

        const reposData = await fetch(`https://api.github.com/users/${user}/repos`);
        const newRepos = await reposData.json();
      

        if(Array.isArray(newRepos)){
        setRepos(newRepos);
       }
       
      } else {
        setCurrentUser(null);
        setRepos(null);
        setError(true);
      }
    } catch (e) {
      setError(true);
    }
  };

  return (
    <div className="App">
     <Header />
     <div className="conteudo">
        <img src={background} className="background" alt="background app" />
        <div className="info">
          <div>
            <input 
            name="usuario" 
            value={user} 
            onChange={event => setUser(event.target.value)} 
            placeholder="@username" />
            <button onClick={handleGetData}>Buscar</button>
          </div>
          {error && (
            <p className="error">Usuário não encontrado. Tente novamente.</p>
          )}
          {currentUser?.name ? (
            <>
              <div className="perfil">
                <img src={currentUser.avatar_url} className="profile" alt="imagem de perfil" />
                <div>
                  <h3>{currentUser.name}</h3>
                  <span>@{currentUser.login}</span>
                  <p>{currentUser.bio}</p>
                </div>
              </div>
              <hr />
            </>
          ) : null}
          {repos?.length > 0 ? (
          <div>
            <h4 className="repositorio">Repositórios</h4>
            {repos.map(repo => (
            <ItemList
            key={repo.id} 
            title={repo.name} 
            description={repo.description}

            />
            ))}
            
          </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
