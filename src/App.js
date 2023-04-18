import logo from './logo.svg';
import './App.css';
import Botao from './components/botao';
import Formulario from './components/formulario';
import Lista from './components/lista';

function App() {
  return (
    <div className="App">
     <Formulario/>
     <Lista></Lista>
    </div>
  );
}

export default App;
