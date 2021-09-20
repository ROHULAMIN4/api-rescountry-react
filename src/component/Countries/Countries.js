import React, { useEffect, useState } from 'react';
import Country from './Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries,setCountires]=useState([])
    useEffect(()=>{
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res=>res.json())
        .then(data=>setCountires(data))
    },[])
    return (
        <div className='countries-style'>

           { 
                  countries.map(country=><Country name={country.name} capital={country.capital} key={country.capital} 
                    img={country.flag}

                ></Country>)

           }
        </div>
    );
};

export default Countries;