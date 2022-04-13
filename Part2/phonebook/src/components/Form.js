import React from 'react'
import axios from 'axios'

const Form = ({handleNameChange,handleNumberChange,newName,newNumber,persons,setPersons}) => {


  

    const addName = (event) => {
      event.preventDefault()
      console.log('button clicked', event.target)
      
      const exist = (element) => element.name===newName;
      
      if(persons.findIndex(exist)===-1){
        const nameObject = {
          name:newName,
          number:newNumber
        }
        axios
        .post('http://localhost:3001/persons', nameObject)
        .then(response => {
          setPersons(persons.concat(response.data))
        })
        
      }else{
        window.alert(`${newName} is already added to phonebook`);
      }
      
    }
    return (
      
      <form onSubmit={addName}>
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