import React from 'react'

const Lomake = ({newName, newNumber, handleNameChange,
     handleNumberChange, addPerson}) => {
    return(
        <form onSubmit={addPerson}>
        <div>
          <p>nimi: <input value={newName}
            onChange={handleNameChange} /></p>
          <p>puhelinnumero: <input value={newNumber}
            onChange={handleNumberChange} /></p>
        </div>
        <div>
          <button type="submit">lisää</button>
        </div>
      </form>
    )
}

export default Lomake
