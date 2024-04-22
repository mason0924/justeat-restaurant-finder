import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Searchbar from './components/Searchbar';
import DisplayResult from './components/DisplayResult';

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const updateRestaurants = (newRestaurants) => {
    setRestaurants(newRestaurants);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Searchbar searchResults={updateRestaurants} />
        <DisplayResult restaurants={restaurants}/>
      </header>
    </div>
  );
}

export default App;
