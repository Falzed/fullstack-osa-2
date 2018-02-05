import React from 'react';
import axios from 'axios';
import Taulu from './components/Taulu';
import Lomake from './components/Lomake';
import Filtteri from './components/Filtteri';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber: '',
      filter: ''
    }
  }

  componentWillMount() {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        this.setState({persons: response.data})
      })
  }

  addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: this.state.newName,
      number: this.state.newNumber
    }
    const nimetApu = this.state.persons.map(person =>
      person.name
    )
    if (nimetApu.indexOf(personObject.name) === -1) {
      const personsApu = this.state.persons.concat(personObject)
      this.setState({ persons: personsApu, newName: '', newNumber: '' })
    } else {
      alert('on jo luettelossa')
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

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <Filtteri filter={this.state.filter}
          handleFilterChange={this.handleFilterChange} />
        <h2>Lisää uusi</h2>
        <Lomake newName={this.state.newName}
          newNumber={this.state.newNumber}
          handleNameChange={this.handleNameChange}
          handleNumberChange={this.handleNumberChange}
          addPerson={this.addPerson} />
        <h2>Numerot</h2>
        <Taulu persons={this.state.persons} filter={this.state.filter} />
      </div>
    )
  }
}

export default App