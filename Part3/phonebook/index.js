const express = require('express')
const app = express()


let persons=[
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/api/persons', (request, response) => {
    response.json(persons)
  })

  app.get('/persons/info', (request, response) => {
    const numberPersons=persons.length
    const date=new Date()

    const info=`<p>Phonebook has info for ${numberPersons} people</p>
                    <p> ${date}</p>`

    response.send(info)
  })

  app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person= persons.find(note => note.id === id)
    
    if (person) {
      response.json(person)
    } else {
        response.status(404)
        response.send(`Id ${id} does not exist`);
    }
  })


  app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)
    response.status(204).end()
  })
  //npm run dev
const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)