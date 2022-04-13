import { useState, useEffect } from 'react'
import personsService from './services/persons'


import Form from './components/Form'
import Persons from './components/Persons'
import Filter from './components/Filter'






const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showFilter, setShowFilter] = useState('')


  const hook=() => {
    personsService
    .getAll()
    .then(response => {
      setPersons(response.data)
        })   
  }
  useEffect(hook, [])


  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setShowFilter(event.target.value)
  }


  
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilterChange={handleFilterChange}/>

      <h2>Add a new </h2>
     <Form  handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} newName={newName} newNumber={newNumber} persons={persons} setPersons={setPersons}/>

      <h2>Numbers</h2>
      <Persons persons={persons} setPersons={setPersons} showFilter={showFilter}/>
    </div>
  )
}

export default App