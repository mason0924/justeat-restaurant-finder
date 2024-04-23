import './App.css';
import React, {useState} from 'react';
import Searchbar from './components/Searchbar';
import DisplayResult from './components/DisplayResult';
import RestaurantFilter from './components/RestaurantFilter';


function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const updateRestaurants = (newRestaurants) => {
    setRestaurants(newRestaurants);
  };

  const updateFilteredRestaurants = (filteredRestaurants) => {
    setFilteredRestaurants(filteredRestaurants);
  };

  const handleSearchResults = (searchResults) => {
    if (searchResults.length === 0) {
        // If search results are empty, set filteredRestaurants to empty array
        setFilteredRestaurants([]);
        setRestaurants([]);
    } else {
        // Set restaurants and filteredRestaurants based on search results
        setRestaurants(searchResults);
        setFilteredRestaurants(searchResults);
    }
  };

  const imageURL = 'https://d30v2pzvrfyzpo.cloudfront.net/a/hw/img/decoration/bg_hero-wide.jpg';

  return (
    <div className="container-fluid" >
      <div className='text-center p-5' 
style={{ backgroundImage: `url('${imageURL}')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
      <Searchbar searchResults={handleSearchResults} />
      </div>
      <div className='row'>
      <div className=' col-xs-2 col-sm-2 col-m-2 col-lg-2' >
        <div className='sticky-top'> 
        <RestaurantFilter restaurants={restaurants} updateFilteredRestaurants={updateFilteredRestaurants}/>
        </div>
      </div>
      <div className='col-xs-10 col-sm-10 col-m-10 col-lg-10'>
        <DisplayResult restaurants={filteredRestaurants}/>
      </div>
      </div>
    </div>
  );
}

export default App;
