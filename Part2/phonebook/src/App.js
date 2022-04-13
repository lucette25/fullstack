import { useState, useEffect } from 'react'

import axios from 'axios'

import Form from './components/Form'
import Persons from './components/Persons'
import Filter from './components/Filter'






const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showFilter, setShowFilter] = useState('')


  const hook=() => {
    console.log('effect')
   axios
      .get('http://localhost:3001/persons')
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
      <Persons persons={persons} showFilter={showFilter}/>
    </div>
  )
}

export default App