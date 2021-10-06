import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemList from './components/ItemListContainer/ItemList/ItemList';
const App =()=> {
  return (
    <div className="App">
      <header>
        <NavBar/>
        <ItemListContainer greeting="Productos TuttiGlutenFree"/>
        <ItemList/>
      </header>
     
    </div>
  );
}

export default App;
