import './App.css';
import { GroceryList } from './GroceryList';
import imageBag from './image-bag.png';
import imageMan from './image-man.png';

function App() {
  return (
    <div className="app">
      <div className="container">
        <img src={ imageBag } alt="bag" width="200px"/>
      </div>
      <div className="container">
        <h1>Grocery List</h1>
      </div>
      <GroceryList/>
      <div className="container">
        <img src={ imageMan } alt="man" width="200px"/>
      </div>
    </div>
  )
}

export default App;
