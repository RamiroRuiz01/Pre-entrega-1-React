import './App.css';
import Navbar from './components/navbar/navbar';
import ListCards from './components/listCards/listCards';
import ItemListContainer from './components/itemContainer/itemContainer';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting={'Bienvenidos'}/>
      <ListCards/>
    </div>
  );
}

export default App;
