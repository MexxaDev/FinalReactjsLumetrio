import './App.css';

import Menu from './Components/Menu';

import Paginainicio from './Paginas/Paginainicio';
import Paginaproyecto from './Paginas/Paginaproyecto';
import Paginasobremi from './Paginas/Paginasobremi';
import PaginaApi from './Paginas/PaginaApi';


import { Routes, Route, BrowserRouter as Router} from "react-router-dom";
import Popup from './Components/Popup';
import Paginacontacto from './Paginas/Paginacontacto';

function App() {
  return (
    <div className="App">
      <>
      <Popup />
      <Router>
      <Menu />
        <Routes>
          <Route path='/' element={<Paginainicio />}/>
          <Route path='/proyecto' element={<Paginaproyecto />} />
          <Route path='/sobremi' element={<Paginasobremi />} />
          <Route path='/contacto' element={<Paginacontacto />} />
          <Route path='/consumoApi' element={<PaginaApi />} />
        </Routes>
      </Router>
      </>
    </div>
  );
}

export default App;
