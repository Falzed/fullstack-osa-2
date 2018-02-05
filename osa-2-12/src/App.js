import React from 'react';
import axios from 'axios';
import Filtteri from './components/Filtteri';
import Display from './components/Display';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: [],
      filter: ''
    }
  }

  componentWillMount() {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        this.setState({ countries: response.data })
      })
  }
  handleFilterChange = (event) => {
    this.setState({ filter: event.target.value })
  }

  render() {
    return (
      <div>
        <Filtteri filter={this.state.filter}
          handleFilterChange={this.handleFilterChange} />
        <Display countries={this.state.countries}
          filter={this.state.filter} />
      </div>
    )
  }
}

export default App