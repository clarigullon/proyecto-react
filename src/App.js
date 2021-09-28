import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
function App() {
  return (
    <div className="App">
      <header>
        <NavBar></NavBar>
        <ItemListContainer greeting="Productos TuttiGlutenFree"></ItemListContainer>
      </header>
     
    </div>
  );
}

export default App;
