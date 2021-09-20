import React from 'react';
import './Country.css'

const Country = (props) => {
    console.log(props)
 
    return (
        <div className='main'>
            

       
        <div className='country-single-data '>
            <img src={props.img} alt=""/>
            <h1>The name of country:{props.name}</h1>
            <h5>The captila of country is :{props.capital}</h5>
            
            </div> 
       
        </div>
    );
};

export default Country;