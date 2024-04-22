import axios from 'axios';
import React, {useState} from 'react';

export default function Searchbar() {

    const [postcode, setPostcode] = useState('');
    
    const fetchData = async () => {
        console.log('fetching data');
        try{
            const response = await axios.get(`http://localhost:5000/restaurants/${postcode}`)
            console.log(response.data)
        } catch (error) {
            console.error('Error fetching data: ', error)
        }
    }

    const handleChange = (e) => {
        console.log('hey! you clicked me')
        setPostcode(e.target.value)
    }

    return (
    <div>
      <input type="text" placeholder="Keyin your zipcode" value={postcode} onChange={handleChange}/>
      <button onClick={fetchData}>Search</button>
    </div>
  );
}