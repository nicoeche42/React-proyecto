/* import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemCount from './componentes/ItemCount/ItemCount';
import Vista from './componentes/Vista/Vista';
import Contador from './componentes/Contador/Contador';
import Categorias from './componentes/Categorias/Categorias';
import UseRef from './componentes/UseRef/UseRef';
import UseRefDom from './componentes/UseRefDom/UseRefDom';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import JsonPlaceHolder from './componentes/Fetch/JsonPlaceHolder';
import Nesflic from './componentes/Fetch/Nesflic';
import TodoList from './componentes/TodoList/TodoList';
import Articulos from './componentes/Articulos/Articulos'; */
import Hooks from './componentes/Hooks/Hooks';
import Mensaje from './componentes/Patrones/Mensaje';
import { mensajeConTitulo, conAumento } from './componentes/Patrones/Hoc'
import Producto from './componentes/Patrones/Producto';
import Loguear from './componentes/Patrones/Loguear';





function App() {
  const NuevoComponente = mensajeConTitulo(Mensaje)
  const NuevoProducto = conAumento(Producto);

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
      {/*    <Nesflic />
      <TodoList />
      <Articulos titulo="Productos nuevos" img="https://1.bp.blogspot.com/-pnks5kc7INo/X62mgegRYPI/AAAAAAACkeM/s23GnGhZkuEI99rHlJAMHc_uHYsAYQ2bgCNcBGAsYHQ/s1280/tarta%2Bbrownie%2Bcon%2Bdulce%2Bde%2Bleche%2By%2Bmerengue%2B%25281%2529.JPG">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque soluta alias rerum? Autem maiores magni nemo accusamus ad? Porro quod quae repellendus totam necessitatibus incidunt sunt tempora nobis assumenda esse?</p>
      <strong>Tiempo de lectura 2 minutos</strong>
      </Articulos>
    
      <h2>Recetas</h2>
    
      <Articulos titulo="Torta Matilda" img="https://img-global.cpcdn.com/recipes/8168ffbebd3327e8/400x400cq70/photo.jpg">
        <p>RECETA TORTA MATILDA</p>
      </Articulos>
     */}
      {/* <Hooks /> */}
      <NuevoComponente />
      <hr />
      <NuevoProducto nombre="Tomate" precio={100} /> 
      <hr />
      <Loguear/>
    </>
  );
}

export default App;
