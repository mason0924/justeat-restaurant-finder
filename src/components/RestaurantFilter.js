import React, {useState, useEffect} from 'react';

export default function RestaurantFilter({restaurants, updateFilteredRestaurants}) {
    // updateFilteredRestaurants to be added in to parameter

    const restaurantCuisineNameSet = new Set();
    const reviewRate = [1, 2, 3, 4];
    const [selectedCuisines, setSelectedCuisines] = useState([]);
    const [selectedReviewRates, setSelectedReviewRates] = useState([]);
    
    // extract cuisine types
    restaurants.forEach(restaurant => {
        restaurant.cuisines.forEach(cuisine => {
            restaurantCuisineNameSet.add(cuisine.name)
        });
    });    

    // convert Set into Array
    const restaurantCuisineName = Array.from(restaurantCuisineNameSet).sort();

    // Function to handle checkbox change for cuisines
    const handleCuisineChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
          setSelectedCuisines([...selectedCuisines, value]);
        } else {
          setSelectedCuisines(selectedCuisines.filter(cuisine => cuisine !== value));
        }
    };

    // Function to handle checkbox change for review rates
    const handleReviewRateChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
        setSelectedReviewRates([...selectedReviewRates, parseInt(value)]);
        } else {
        setSelectedReviewRates(selectedReviewRates.filter(rate => rate !== parseInt(value)));
        }
    };

    useEffect(() => {
        // Update filtered restaurants whenever selected cuisines or review rates change
        const filteredRestaurants = selectedCuisines.length > 0 ?
        restaurants.filter(restaurant => {
            return restaurant.cuisines.some(cuisine => {
                return selectedCuisines.some(filter => cuisine.name.toLowerCase().includes(filter.toLowerCase()));
            });
        }) :
        restaurants;
        // Pass back filtered restaurants to the parent component
        updateFilteredRestaurants(filteredRestaurants);
    }, [selectedCuisines, selectedReviewRates]);

    return (
        <div>
            <div clasName='container'>
                {restaurants.length > 0 && (        
                    <div className='text-start rounded-3 m-3' style={{backgroundColor: "#FFEAD4"}}>
                        <div className='cuisine-name p-3' style={{ fontSize: '10px' }}>
                            {restaurantCuisineName.map((item, index) => (
                                <div key={index}>
                                    <input 
                                        type="checkbox" 
                                        id={item} 
                                        name={item} 
                                        value={item}
                                        checked={selectedCuisines.includes(item)}
                                        onChange={handleCuisineChange}
                                        />
                                    <label htmlFor={item}>{item}</label>
                                </div>
                            ))}
                        </div> 
                    </div>
             )}
            </div>
        </div>
    );
}