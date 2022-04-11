import React from 'react';

import Button from './Button';
import CountryDetails from './CountryDetails';




const Countries = ({ countries,newQuery,setNewQuery }) => {

    if (newQuery === '') {
      return (<div>Give a value for filter</div>)
  }

    const countriesToShow = newQuery===''
      ? countries
      : countries.filter(country=>country.name.toLowerCase().includes(newQuery.toLowerCase()))

    if(countriesToShow.length>10){
      return<>
      <div>To many matches, specify another filter</div>
      </>
    }

    if(countriesToShow.length===1){
      return<>
       <CountryDetails country={countriesToShow[0]}/>
       </>
    }

    return (
      <ul>
         {countriesToShow.map(c =>
            <li key={c.name}>{c.name} <Button handleClick={()=>setNewQuery(c.name)}/> </li>
          )}
      </ul>)
  }

  export default Countries