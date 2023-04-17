import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />
          <Route path="/item/:idItem" element={<ItemDetailContainer />} />
          <Route path="*" element={<h2>Sitio en construccion</h2>}/>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;


/* import Eventos from './componentes/Eventos/Eventos';
import Escuchadores from "./componentes/Escuchadores/Escuchadores";
import Formulario from "./componentes/Formulario/Formulario"; */

/*   <Eventos/>
  <Formulario />
  <Escuchadores/> */