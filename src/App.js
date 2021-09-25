import './App.css'
import { Router } from '@reach/router'
import Home from './page/home';
function App() {

  return (
    <div className="App">
      <Router>
        <Home path="/"/>
        <Home path="/:cod_ciudad"/>
      </Router>
    </div>
  );
}

export default App;
