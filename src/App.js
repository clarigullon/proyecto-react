import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
const App =()=> {
  return (
    <div className="App">
      <header>
        <NavBar></NavBar>
        <ItemListContainer greeting="Productos TuttiGlutenFree"></ItemListContainer>
        <ItemCount stock="5" initial="1"></ItemCount>
      </header>
     
    </div>
  );
}

export default App;
