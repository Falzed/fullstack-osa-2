import React from 'react'

const Notification = ({ message, ajastus }) => {
    if (message === '') {
        return null
    }
    ajastus()
    return (
        <div className="success">
            {message}
        </div>
    )
}

export default Notification