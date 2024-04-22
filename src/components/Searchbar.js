import axios from 'axios';
import React, {useState} from 'react';

export default function Searchbar({ searchResults }) {

    const [postcode, setPostcode] = useState('');
    
    const fetchData = async () => {
        if (postcode == "") {
            console.log('no input detected');
            searchResults([])
        } else {
            console.log('fetching data');
            try{
                const response = await axios.get(`http://localhost:5000/restaurants/${postcode}`)
                const firstTenResults = response.data.restaurants.slice(0, 10);
                console.log(firstTenResults)
                searchResults(firstTenResults)
            } catch (error) {
                console.error('Error fetching data: ', error)
            }
        }
    }

    const handleChange = (e) => {
        console.log('input detected:', e.target.value)
        setPostcode(e.target.value)
    }

    return (
    <div>
      <input type="text" placeholder="Keyin your zipcode" value={postcode} onChange={handleChange}/>
      <button onClick={fetchData}>Search</button>
    </div>
  );
}