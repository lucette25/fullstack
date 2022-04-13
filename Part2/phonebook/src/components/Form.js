import React from 'react'
import personsService from '../services/persons'

const Form = ({handleNameChange,handleNumberChange,newName,newNumber,persons,setPersons}) => {



    const updatePerson=(newName,newNumber)=>{
      if(window.confirm(`${newName} is already added, remplace the old number with the new one?`)){

        const person = persons.find(p => p.name === newName)

        const changedPerson = { ...person, number: newNumber }

              personsService
        .update(person.id, changedPerson)
        .then(returnedNote => {
          setPersons(persons.map(p => p.id !== person.id ? p : returnedNote))
        })

      }
    }
  
    //Adding a person to the data

    const addPerson=(newName,newNumber)=>{

      const nameObject = {
        name:newName,
        number:newNumber
      }

        personsService
      .create(nameObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
      })

    }
    


     const buttonAdd= (event) => {
        event.preventDefault()
        
        const existName = (element) => element.name===newName;
        const existNumber = (element) => element.number===newNumber;

        
        if(persons.findIndex(existName)===-1){

          addPerson(newName,newNumber)
        }
        else{
          
          if(persons.findIndex(existNumber)===-1){
            updatePerson(newName,newNumber)
          }else{
            window.alert(`${newName} ${newNumber} is already added to phonebook`);
          }
        }
        
    }

    return (
      
      <form onSubmit={buttonAdd}>
          <div>
            <div>name: <input onChange={handleNameChange}/></div>
            <div>number: <input onChange={handleNumberChange}/></div>
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
    )
  }
  
  export default Form