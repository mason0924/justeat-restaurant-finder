import React from 'react';

export default function DisplayResult({restaurants}) {
    if (restaurants.length > 0){
        return(
            <div className="display-results">
               <ul>
                <h2>Search Results</h2>
                    {restaurants.map((restaurant, index) => (
                        <li key={index}>
                        <h3>{restaurant.name}</h3>
                        <p>Rating: {restaurant.rating.starRating}</p>
                        <p>Cuisine Types: {restaurant.cuisines.map((cuisine) => cuisine.name).join(', ')}</p>
                        </li>
                    ))}
                </ul>
            </div>    
        )
    }
}

