import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

const App =()=> {
  return (
    <div className="App">
      <header>
        <NavBar/>
        <ItemListContainer greeting="Productos TuttiGlutenFree"/>
      </header>
     
    </div>
  );
}

export default App;
