import React from 'react';
import axios from 'axios';
import Filtteri from './components/Filtteri';
import Display from './components/Display';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: [],
      filter: '',
      displayedCountry: null
    }
  }

  /*findByName = ({ name, countries }) => {
    let country = null;
    for (let i = 0; i < countries.length; i++) {
      if (countries[i].name === name) {
        country = countries[i]
        break
      }
    }
    return country
  } */

  changeDisplayedCountry = (country) => {
    console.log(country)
    this.setState({ 
      filter: country.name,
      displayedCountry: country })
  }

  componentWillMount() {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        this.setState({ countries: response.data })
      })
  }
  handleFilterChange = (event) => {
    this.setState({
       filter: event.target.value,
       displayedCountry: null
     })
  }

  render() {
      return (
        <div>
          <Filtteri filter={this.state.filter}
            handleFilterChange={this.handleFilterChange} />
          <Display countries={this.state.countries}
            filter={this.state.filter}
            displayedCountry = {this.state.displayedCountry}
            changeDisplayedCountry={this.changeDisplayedCountry} />
        </div>
      )
       /*else {
      return (
        <div>
          <Filtteri filter={this.state.filter}
            handleFilterChange={this.handleFilterChange} />
          <SingleCountry country={this.state.displayedCountry} />
        </div>
      )
    } */
  }
}

export default App