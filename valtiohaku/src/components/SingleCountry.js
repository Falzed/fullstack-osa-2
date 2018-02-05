import React from 'react'

const SingleCountry = ({country}) => {
    const altText = "The flag of ".concat(country.name)
    return (
        <div>
            <h2>{country.name} {country.nativeName}</h2>
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>
            <img src={country.flag} alt={altText}></img>
        </div>
    )
}

export default SingleCountry