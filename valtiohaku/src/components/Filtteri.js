import React from 'react'

const Filtteri = ({filter, handleFilterChange}) => {
    return(
        <p>Find countries: <input value={filter}
          onChange={handleFilterChange} /></p>
    )
}

export default Filtteri