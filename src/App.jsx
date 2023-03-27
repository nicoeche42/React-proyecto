import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemCount from './componentes/ItemCount/ItemCount';
import  Vista from './componentes/Vista/Vista';

function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting="hola mundillo"/>
    <ItemCount/>
    <Vista/>
    </>
   );
}

export default App;
