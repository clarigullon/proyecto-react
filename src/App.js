import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header/Header'
import Home from './views/Home';
import Productos from './views/Productos';
import Recetas from './views/Recetas';
import Preguntas from './views/Preguntas';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import Seccion from './components/Category/Seccion'
import Cart from './components/Cart/Cart'
import { ItemsProvider } from './components/Cart/CartContext';

const App =()=> {
  return (
    <Router>
      <ItemsProvider>
      <div className="App">
        <header>
          <Header/>
          <NavBar/>
        </header>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/productos" component={Productos}/>
          <Route path="/recetas" component={Recetas}/>
          <Route path="/preguntas" component={Preguntas}/> 
          <Route path="/category/:categoriaId" component={Seccion} />
          <Route path="/cart" component={Cart}/>
          <Route path="/detail/:id" component={ItemDetailContainer}/>
        </Switch>
      
      </div>
      </ItemsProvider>
    </Router>
    
  );
}

export default App;

