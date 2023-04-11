import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemCount from './componentes/ItemCount/ItemCount';
import  Vista from './componentes/Vista/Vista';
import Contador from './componentes/Contador/Contador';
import Categorias from './componentes/Categorias/Categorias';
import UseRef from './componentes/UseRef/UseRef';
import UseRefDom from './componentes/UseRefDom/UseRefDom';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import JsonPlaceHolder from './componentes/Fetch/JsonPlaceHolder';
import Nesflic from './componentes/Fetch/Nesflic';
import TodoList from './componentes/TodoList/TodoList';

function App() {
  return (
    <>
   {/*  <NavBar/>
    <ItemListContainer greeting="Bienvenidos a nuestra TIENDA"/>
    <ItemCount/>
    <Vista/>
    <Contador stock = {10} inicial = {1}/>
    <Categorias/>
    <UseRef/>
    <UseRefDom/>
    <ItemDetailContainer/> */}
    {/* <JsonPlaceHolder/> */}
    <Nesflic/>
    <TodoList/>
    
    </>
   );
}

export default App;
