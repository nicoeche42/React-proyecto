import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemCount from './componentes/ItemCount/ItemCount';
import  Vista from './componentes/Vista/Vista';

function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting="Bienvenidos a nuestra TIENDA"/>
    <ItemCount/>
    <Vista/>
    </>
   );
}

export default App;
