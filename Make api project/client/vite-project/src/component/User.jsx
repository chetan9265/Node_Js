import axios from 'axios'
import React, { useEffect, useState } from 'react'

const User = () => {
    const [state, setstate] = useState({})
    const id=localStorage.getItem('id')
    console.log(id)
    const fetchData = () => {
        axios.get(`${import.meta.env.VITE_URL}/User/${id}`).then((res) => {
            setstate(res.data.UserData)
        })
            .catch((err) => {
                console.log(err)
            })
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div>
            <div className="user-details-container">
                <h1>User Details</h1>
                            <div className="user-card" key={state._id}>
                                <h2>{state.username}</h2>
                                <p><strong>Email:</strong> {state.email}</p>
                                <p><strong>Date of Birth:</strong> {state.dateOfBirth}</p>
                                <p><strong>Role:</strong> {state.role}</p>
                                <p><strong>Location:</strong> {state.location}</p>
                            </div>
            </div>
        </div>
    )
}

export default User
