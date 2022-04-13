import { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from './components/Countries'


  const App = () => {
  const [countries, setCountries] = useState([])

  const [newQuery, setNewQuery] = useState('')
  
  const hook=() => {
    console.log('effect')
   axios
      .get('https://restcountries.com/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }
  useEffect(hook, [])



  const handleQueryChange = (event) => {
    setNewQuery(event.target.value)
    
 }

  return (
    <div>
      <h2>Countries</h2>
          <div>Find conuntry : <input onChange={handleQueryChange}/></div>
          <Countries countries={countries} newQuery={newQuery} setNewQuery={setNewQuery}/>

    </div>
  )
}

export default App