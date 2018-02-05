import React from 'react'

const Filtteri = ({filter, handleFilterChange}) => {
    return(
        <p>Filtteröi: <input value={filter}
          onChange={handleFilterChange} /></p>
    )
}

export default Filtteri
