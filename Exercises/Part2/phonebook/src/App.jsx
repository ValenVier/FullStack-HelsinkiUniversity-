import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import NewPersonForm from './components/NewPersonForm'
import PeopleList from './components/PeopleList'
import personsService from './services/persons'
import axios from 'axios'
import Notification from './components/Notification'
import './styles/index.css'

const App = () => {
  const [persons, setPersons] = useState([]) //empty at the beginning
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  //useEffect: load data from the server
  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, []) //Empty array as dependency = runs only when mounting the component

  const [successMessage, setSuccessMessage] = useState(null)

  const addPerson = (event) => {
    event.preventDefault()

    /* const exists = persons.some(person => person.name === newName)
    if (exists) {
      alert(`${newName} is already added to phonebook`)
      return
    } */

    /* const personObject = {
    name: newName,
    number: newNumber,
    //id: persons.length + 1 //server generate the id
  } */

    const existing = persons.find(p => p.name === newName)
    if (existing) {
      if (window.confirm(
        `${newName} is already in the phonebook. Replace the old number with the new one?`
      )) {
        const updatedPerson = { ...existing, number: newNumber }
        personsService
          .update(existing.id, updatedPerson)
          .then(returnedPerson => {
            setPersons(persons.map(p =>
              p.id !== existing.id ? p : returnedPerson
            ))
            setNewName('')
            setNewNumber('')
          })
      }

    } else {
      const newPerson = { name: newName, number: newNumber }
      personsService
        .create(newPerson)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')

          // Show notification
          setSuccessMessage(`Added: ${returnedPerson.name}`)
          setTimeout(() => {
            setSuccessMessage(null)
          }, 5000)
        })
    }

  }

  const deletePerson = (id) => {
    const person = persons.find(p => p.id === id)
    if (window.confirm(`Delete ${person.name}?`)) {
      personsService.remove(id).then(() => {
        setPersons(persons.filter(p => p.id !== id))
      })
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    setFilter(event.target.value)
  }

  // Filter persons based on search
  const personsToShow = persons.filter(person =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={successMessage} />
      <Filter value={filter} onChange={handleFilter} />
      <h3>Add a new</h3>
      <NewPersonForm
        onSubmit={addPerson}
        nameValue={newName}
        onNameChange={handleNameChange}
        numberValue={newNumber}
        onNumberChange={handleNumberChange}
      />
      <h3>Numbers</h3>
      <PeopleList persons={personsToShow} onDelete={deletePerson} />
    </div>
  )
}

export default App