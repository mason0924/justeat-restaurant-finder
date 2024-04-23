import React, { useState } from 'react';

export default function DisplayResult({ restaurants }) {
    const [sortType, setSortType] = useState('rating');

    // Sort restaurants based on sortType
    const sortedRestaurants = [...restaurants].sort((a, b) => {
        if (sortType === 'rating') {
            return b.rating.starRating - a.rating.starRating; // Sort by rating (descending)
        } else {
            return a.name.localeCompare(b.name); // Sort by name (A-Z)
        }
    });

    const handleSortChange = () => {
        setSortType(sortType === 'rating' ? 'name' : 'rating');
    };

    return (
        <div className=''>
            <div className="results">
                {restaurants.length > 0 && (
                    <button 
                    className='btn btn-sm btn-danger shadow rounded-2'
                    onClick={handleSortChange}>
                        {sortType === 'rating' ? 'Sort by name (A-Z)' : 'Sort by rating'}
                    </button>
                )}
                <div className='row rounded-3 px-4' style={{backgroundColor:"#F5F3F1"}}>
                    {sortedRestaurants.map((restaurant, index) => (
                        <div className='col-lg-3 col-sm-4 col-m-5 col-xs-12 g-3' key={index}>
                            <div className='restaurant-item text-center bg-white border shadow m-2 p-2 rounded-4 h-100 d-flex flex-column '>
                                <div className='img-fluid h-50 mt-1'>
                                    <img
                                        className='restaurantLogo'
                                        style={{ height: '100px', width: '100px' }}
                                        alt={restaurant.name}
                                        src={restaurant.logoUrl}
                                        onError={(e) => { e.target.style.display = 'none'; }} />
                                </div>
                                <h3 className='restaurantName h3 m-1 px-3'>{restaurant.name}</h3>
                                <p className='rating'><i className="bi bi-star-fill"> </i><b>{restaurant.rating.starRating}</b>/5 ({restaurant.rating.count})</p>
                                <p className='cuisine'> {restaurant.cuisines.map((cuisine) => cuisine.name).join(', ')}</p>
                                <p className='address' style={{ fontSize: '10px' }}> {restaurant.address.firstLine}, {restaurant.address.city}, {restaurant.address.postalCode}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
