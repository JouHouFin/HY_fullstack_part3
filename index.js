require('dotenv').config()
const express = require('express')
var morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/person')

/* if (process.argv.length < 3) {
	Person.find({}).then(result => {
		console.log(`Phonebook:`)
		result.forEach(person => {
			console.log(`${person.name} ${person.number}`)
		})
		mongoose.connection.close()
	})
} else {
	const name = process.argv[2]
	const number = process.argv[3]
	const person = new Person({
		name: name,
		number: number
	})

	person.save().then(response => {
		console.log(`added ${name} with number ${number} to phonebook`)
		mongoose.connection.close()
	})
}
let persons = [
	{ 
		"name": "Arto Hellas", 
		"number": "040-123456",
		"id": 1
	},
	{ 
		"name": "Ada Lovelace", 
		"number": "39-44-5323523",
		"id": 2
	},
	{ 
		"name": "Dan Abramov", 
		"number": "12-43-234345",
		"id": 3
	},
	{ 
		"name": "Mary Poppendieck", 
		"number": "39-23-6423122",
		"id": 4
	}
] */

const app = express()

morgan.token('body', function (req, res) { if (req.method === 'POST') {return JSON.stringify(req.body)} return null })

app.use(express.static('build'))
app.use(cors())
app.use(express.json()) 
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

const generateId = () => {
  return Math.floor(Math.random() * Math.floor(65535));
}

app.get('/info', (req, res) => {
	const date = new Date().toString()
  res.send(
		`Phonebook has info for ${persons.length} people<br />${date}`
	)
})

app.get('/api/persons', (req, res) => {
  Person.find({}).then(persons => {
    res.json(persons)
  })
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(person => person.id === id)
  if (person) {    
    response.json(person)  
  } else {    
    response.status(404).end()  
  }
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  
  persons = persons.filter(person => person.id !== id)
  response.status(204).end()
})

app.post('/api/persons', (request, response) => {
  const body = request.body

  if (!body.name) {
    return response.status(400).json({ error: 'name missing' })
  } else if (!body.number) {
    return response.status(400).json({ error: 'number missing' })
  } else if (persons.find(person => person.name === body.name)) {
    return response.status(400).json({ error: 'name must be unique' })
  } 

  const person = {
    name: body.name,
    number: body.number,
    id: generateId(),
  }

  persons = persons.concat(person)

  response.json(person)
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

