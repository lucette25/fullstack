import React from 'react'


const Form = ({handleNameChange,handleNumberChange,newName,newNumber,persons,setPersons}) => {


  

    const addName = (event) => {
      event.preventDefault()
      console.log('button clicked', event.target)
      
      const isLargeNumber = (element) => element.name===newName;
      console.log("if",persons.findIndex(isLargeNumber),newName)
      if(persons.findIndex(isLargeNumber)===-1){
        const nameObject = {
          name:newName,
          number:newNumber
        }
        setPersons(persons.concat(nameObject))
        
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