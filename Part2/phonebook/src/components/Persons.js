import React from 'react'
import Button from './Button'
import personsService from '../services/persons'

const Person = ({ person,setPersons,persons }) => {
    return (
      
      <li>{person.name} {person.number}<Button  handleClick={()=>handleClick(person,setPersons,persons)} text={"Delete"}/></li>
    )
  }
  
  const handleClick= (person,setPersons,persons) => {
    
    if (window.confirm(`Do you really want to delete ${person.name} ?`)) {
      personsService
      .deletePerson(person.id)
      .then(response => {
            personsService
        .getAll()
        .then(updatePersons => {
          setPersons(updatePersons)
            }) 

      })
    }
 }
  
  const Persons = ({ persons,setPersons,showFilter }) => {
    const namesToShow = showFilter===''
    ? persons
    : persons.filter(person=>person.name.toLowerCase().includes(showFilter.toLowerCase()))
  
    return (
      <ul>
          {namesToShow.map(person =>
            <Person key={person.id} person={person} persons={persons} setPersons={setPersons} />
          )}
      </ul>
      
    )
  }

  export default Persons