import React from 'react';
import Taulu from './components/Taulu';
import Lomake from './components/Lomake';
import Filtteri from './components/Filtteri';
import personService from './services/persons';
import './index.css';
import Notification from './components/Notification';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber: '',
      filter: '',
      notification: '',
      nextId: 1
    }
  }

  componentWillMount() {
    personService
      .getAll()
      .then(response => {
        this.setState({ persons: response })
      })
  }

  addPerson = (event) => {
    event.preventDefault()

    const nimetApu = this.state.persons.map(person =>
      person.name
    )
    const apu = this.state.persons.slice()
    const apuIndeksi = nimetApu.indexOf(this.state.newName)
    const vanhaHlo = apu[apuIndeksi]    

    /* console.log(apu)
    ei toimi jostain syystä
    const vanhaHlo = apu.find(person => {
      person.name === personObject.name
    })
    console.log(apu.find(person => {
      person.name === personObject.name
    })) */

    console.log(vanhaHlo)

    /* if (apuIndeksi === -1) { */
    if (vanhaHlo == null) {
      console.log(vanhaHlo)
      const personObject = {
        name: this.state.newName,
        number: this.state.newNumber
      }
      personService
        .create(personObject)
        .then(response => {
          this.setState({
            persons: this.state.persons.concat(response),
            notification: `${personObject.name} lisätty`
          })
        })
    } else {
      if (
        window.confirm(
          `${vanhaHlo.name} on jo luettelossa, korvataanko vanha numero uudella?`)
      ) {
        const personObject = {
          name: this.state.newName,
          number: this.state.newNumber,
          id: vanhaHlo.id
        }
        personService.update(vanhaHlo.id, personObject)
        this.setState({
          persons: this.state.persons.map(person => {
            /* personObject.name === person.name ? personObject : person */
            if(person.name===personObject.name) {
              return personObject
            } else {
              return person
            }
          }),
          notification: `Henkilön ${personObject.name} numero muutettu`
        })
      }
    }
  }

  handleNameChange = (event) => {
    this.setState({ newName: event.target.value })
  }
  handleNumberChange = (event) => {
    this.setState({ newNumber: event.target.value })
  }
  handleFilterChange = (event) => {
    this.setState({ filter: event.target.value })
  }

  removePerson = (person) => {
    let apuPersons = this.state.persons.slice()

    apuPersons.splice(apuPersons.findIndex(hlo => hlo.id === person.id), 1)

    if (window.confirm(`Poistetaanko ${person.name}?`)) {
      console.log(apuPersons)
      console.log(person)
      personService
        .remove(person.id)
        .then(response => {
          this.setState({
            persons: apuPersons,
            notification: `${person.name} poistettu`
          })
          console.log(`removed ${person.id}`)
        })
    }
  }

  ajastus = () => {
    setTimeout(()=> {
      this.setState({notification: ''})
    }, 5000)
  }

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <Notification message={this.state.notification}
          ajastus={this.ajastus}/>
        <Filtteri filter={this.state.filter}
          handleFilterChange={this.handleFilterChange} />
        <h2>Lisää uusi</h2>
        <Lomake newName={this.state.newName}
          newNumber={this.state.newNumber}
          handleNameChange={this.handleNameChange}
          handleNumberChange={this.handleNumberChange}
          addPerson={this.addPerson} />
        <h2>Numerot</h2>

        {<Taulu persons={this.state.persons} filter={this.state.filter}
          removePerson={this.removePerson} />}
      </div>
    )
  }
}

export default App