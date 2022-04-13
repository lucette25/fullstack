import React from "react";
import Weather from "./Weather";

const Languages = ({ languages }) => {
  return(
  <ul>
    {languages.map(l=>
     <li key={l.name}>{l.name} </li>
    )}
  </ul>
 )
}

const CountryDetails = ({ country }) => {
  return (<>
    <h1>{country.name}</h1>

    <div>
      <p>Capital : {country.capital}</p>
      <p> Area : {country.area}</p>
    </div>

    <h3> Languages : </h3>
    <Languages languages={country.languages}/>
    
    <img src={country.flag} alt={country.name} width='300'/>
    
     <Weather capital={country.capital}/>
    
    </>
  )
}


export default CountryDetails