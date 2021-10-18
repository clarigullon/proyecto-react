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
import Postres from './components/Category/Postres'


const App =()=> {
  return (
    <Router>
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
          <Route path="/detail/:id" component={ItemDetailContainer}/>
          <Route path="/detail/postres" component={Postres} />
        </Switch>
      
      </div>
    </Router>
  );
}

export default App;

