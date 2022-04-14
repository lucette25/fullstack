import React from 'react'
import Button from './Button'
import personsService from '../services/persons'

const Person = ({ person,setPersons,persons,setErrorMessage,setClassName }) => {
    return (
      
      <li>{person.name} {person.number}<Button  handleClick={()=>handleClick(person,setPersons,persons,setErrorMessage,setClassName)} text={"Delete"}/></li>
    )
  }
  
  const handleClick= (person,setPersons,persons,setErrorMessage,setClassName) => {
    
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

      //Setting sucess nottification attribut
      setErrorMessage(` ${person.name} is deleted` )
      setClassName('sucess')
      setTimeout(() => {
        setErrorMessage('')
      }, 2000)

    }
 }
  
  const Persons = ({ persons,setPersons,showFilter,setErrorMessage,setClassName }) => {
    const namesToShow = showFilter===''
    ? persons
    : persons.filter(person=>person.name.toLowerCase().includes(showFilter.toLowerCase()))
  
    return (
      <ul>
          {namesToShow.map(person =>
            <Person key={person.id} person={person} persons={persons} setPersons={setPersons} setErrorMessage={setErrorMessage}
            setClassName={setClassName} />
          )}
      </ul>
      
    )
  }

  export default Persons