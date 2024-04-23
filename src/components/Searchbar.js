import axios from 'axios';
import React, {useState} from 'react';

export default function Searchbar({ searchResults }) {

    const [postcode, setPostcode] = useState('');
    
    const fetchData = async () => {
        if (postcode === "") {
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
        setPostcode(e.target.value)
    }

    return (
    <div>
        <input 
            className='rounded text-center'
            type="text" 
            placeholder="Enter your postcode (UK only eg: BS14DJ)" 
            value={postcode} 
            onChange={handleChange}
            style={{ width: '400px' }} 
        />
    
        {/* <p className='text-secondary' style={{ fontSize: '10px' }}>sample postcode: CT12EH BS14DJ L40TH</p> */}
        <button onClick={fetchData} 
            className='btn btn-sm rounded-2' style={{backgroundColor: "#f36805"}}
        >Search
        </button>
    </div>
  );
}