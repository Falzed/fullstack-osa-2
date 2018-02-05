import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response=>response.data)
}

const create = (newPerson) => {
    const request = axios.post(baseUrl, newPerson)
    return request.then(response=>response.data)
}

const update = (id, newPerson) => {
    const request = axios.put(`${baseUrl}/${id}`, newPerson)
    return request.then(response=>response.data)
}

/* const findByName = (name) => {
    let kaikki = null;
    getAll().then(response => {
        kaikki = response
    })
    return (
        /* kaikki.filter(person => person.name===name)[0].id */ /*
        7
    )
} */
const findById = (id) => {
    const request = axios.get(`${baseUrl}/${id}`)
    return request.then(response=>response.data)
}

const remove = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
}
/* const removeByName = (name) => {
    const id = findByName(name)
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response=>response.data)
} */

export default {getAll, create, update, remove, findById}