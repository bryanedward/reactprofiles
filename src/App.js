import './App.css'
import { Router } from '@reach/router'
import Home from './page/home';
import City from './page/city';
import Perfil from './page/perfil';


function App() {

  return (
    <div className="App">
      <Router>
        <Home path="/"/>
        <City path="/ciudad/:cod_ciudad"/>
        <Perfil path="/perfil/:ced_usuar"/>
      </Router>
    </div>
  );
}

export default App;
