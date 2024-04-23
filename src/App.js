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
      <p>sample postcode: CT12EH BS14DJ L40TH</p>
      <Searchbar searchResults={updateRestaurants} />
      <DisplayResult restaurants={restaurants}/>
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
