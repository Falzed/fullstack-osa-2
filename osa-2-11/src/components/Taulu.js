import React from 'react'
import Person from './Person'

const Taulu = ({ persons, filter }) => {
    return (
        <table>
            <tbody>
                {persons.filter(
                    person => person.name
                        .toLowerCase()
                        .includes(filter.toLowerCase())
                ).map(person => <Person key={person.name} person={person} />)}
            </tbody>
        </table>
    )
}

export default Taulu