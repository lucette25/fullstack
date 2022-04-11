import React from 'react'

const Person = ({ person }) => {
    return (
      
      <li>{person.name} {person.number}</li>
    )
  }
  
  
  const Persons = ({ persons,showFilter }) => {
    const namesToShow = showFilter===''
    ? persons
    : persons.filter(person=>person.name.toLowerCase().includes(showFilter.toLowerCase()))
  
    return (
      <ul>
          {namesToShow.map(person =>
            <Person key={person.name} person={person} />
          )}
      </ul>
      
    )
  }

  export default Persons