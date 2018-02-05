import React from 'react'
import SingleCountry from './SingleCountry'

/*const findByName = (name, countries) => {
    let country = null;
    for (let i = 0; i < countries.length; i++) {
        if (countries[i].name === name) {
            country = countries[i]
            break
        }
    }
    return country
}*/

/*const displayCountry = (name, countries) => {
    const valtio = findByName(name, countries)
    if (valtio === null) {
        return (
            <div>Country not found</div>
        )
    }
    const altText = "The flag of ".concat(valtio.name)
    return (
        <div>
            <h2>{valtio.name}</h2>
            <p>Capital: {valtio.capital}</p>
            <p>Population: {valtio.population}</p>
            <img src={valtio.flag} alt={altText}></img>
        </div>
    )
} */

/*const debugViesti = () => {
    console.log("Klikattu")
}*/

const Display = ({ countries, filter, displayedCountry,changeDisplayedCountry }) => {
    if(displayedCountry!==null) {
        return(<div>
            <SingleCountry country={displayedCountry} />
        </div>)
    }
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

    console.log(`displayedCountry: ${displayedCountry}`)
    

    if (filteredList.length < 10 && filteredList.length > 1) {
        /* if(displayedCountry!==null) {
            changeDisplayedCountry(null)
        } */
        return (
            <ul>
                {filteredList.map(country =>
                    <li key={country.numericCode}
                        onClick={() => changeDisplayedCountry(country)}
                        /* {debugViesti} */>{country.name}</li>
                )}
            </ul>
        )
    } else if (filteredList.length === 1) {
        console.log("Ainoa matchaava valtio on ", filteredList[0].name)
        /* if(displayedCountry!==filteredList[0]) {
            changeDisplayedCountry(filteredList[0])
        } */
        return(
        <div>
            <SingleCountry country={filteredList[0]} />
        </div>)
        /* return(displayCountry(filteredList[0].name, countries)) */
    } else {
        return ("Too many matches, try another filter")
    }
}

export default Display