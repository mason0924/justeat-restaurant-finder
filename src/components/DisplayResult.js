import React from 'react';

export default function DisplayResult({restaurants}) {
    if (restaurants.length > 0){
        return(
            <div className=' bg-warning'>
                <div className="results">
                    <h2 className='title'>Results: </h2>
                        <div className='row bg-info px-4'>
                            {restaurants?.map((restaurant, index) => (
                                <div className='col-lg-3 col-sm-4 col-m-5 col-xs-12 g-3'>
                                    <div className='restaurant-item bg-white border shadow m-2 p-2 rounded-4 h-100 d-flex flex-column '>
                                        <div className='img-fluid h-50'>  
                                            <img className='restaurantLogo' 
                                                style={{height: '100px', width: '100px'}} 
                                                alt={restaurant.name} 
                                                src={restaurant.logoUrl}  
                                                onError={(e) => { e.target.style.display = 'none'; }}/>
                                        </div>
                                        <h3 className='restaurantName h3 m-1 px-3'>{restaurant.name}</h3>
                                        <p className='rating'><i class="bi bi-star-fill"> </i><b>{restaurant.rating.starRating}</b>/5 ({restaurant.rating.count})</p>
                                        <p className='cuisine'> {restaurant.cuisines.map((cuisine) => cuisine.name).join(', ')}</p>
                                        {/* Collect stamps, Low Delivery Fee, Deals, Cheeky Tuesday, Local Legends, Freebies
                                        */}
                                        <p className='address'
                                        style={{fontSize: '10px'}}
                                        > {restaurant.address.firstLine}, {restaurant.address.city}, {restaurant.address.postalCode}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>    
        )
    }
}



{/* <div className="display-results">
      <h2 className="mb-4">Search Results</h2>
      <ul className="list-group">
        {restaurants?.map((restaurant, index) => (
          <li key={index} className="list-group-item">
            <h3 className="mb-1">{restaurant.name}</h3>
            <p className="mb-1">Rating: {restaurant.rating}</p>
            <p className="mb-0">Cuisine Types: {restaurant.cuisineTypes.join(', ')}</p>
          </li>
        ))}
      </ul>
    </div> */}