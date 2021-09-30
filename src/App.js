import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
const App =()=> {
  return (
    <div className="App">
      <header>
        <NavBar/>
        <ItemListContainer greeting="Productos TuttiGlutenFree"/>
        <ItemCount stock="5" initial="1"/>
      </header>
     
    </div>
  );
}

export default App;
