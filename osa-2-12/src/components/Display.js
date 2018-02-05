import React from 'react'

const Display = ({ countries, filter }) => {
    console.log("Filter: ", filter)
    if (countries.length === 0) {
        return ("No results")
    }
    const filteredList = countries.filter(country =>
        country.name.toLowerCase().includes(filter.toLowerCase())
    );
    console.log("Matchaako Afghanistan: ",
        countries[0].name.toLowerCase().includes(filter.toLowerCase()))
    console.log("Matchaavia valtioita ", filteredList.length)
    if (filteredList.length < 10 && filteredList.length > 1) {
        return (
            <ul>
                {filteredList.map(country =>
                    <li key={country.numericCode}>{country.name}</li>
                )}
            </ul>
        )
    } else if (filteredList.length === 1) {
        const valtio = filteredList[0]
        const altText = "The flag of ".concat(valtio.name)
        return (
            <div>
                <h2>{valtio.name}</h2>
                <p>Capital: {valtio.capital}</p>
                <p>Population: {valtio.population}</p>
                <img src={valtio.flag} alt={altText}></img>
            </div>
        )
    } else {
        return ("Too many matches, try another filter")
    }
}

export default Display