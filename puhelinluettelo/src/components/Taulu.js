import React from 'react'
import Person from './Person'

const Taulu = ({ persons, filter, removePerson }) => {
    return (
        <table>
            <tbody>
                {persons.filter(
                    person => person.name
                        .toLowerCase()
                        .includes(filter.toLowerCase())
                ).map(person => <Person key={person.name} person={person}
                    /* removePerson = {removePerson(person.id)} />)} */
                    removePerson = {removePerson} />)}
            </tbody>
        </table>
    )
}

export default Taulu