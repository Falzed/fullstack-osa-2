import React from 'react'

const Person = ({person, removePerson}) => {
    return(<tr><td>{person.name}</td><td>{person.number}</td><td>
        <button onClick={() => removePerson(person)}>Poista</button></td></tr>)
}

export default Person