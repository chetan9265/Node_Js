import React, { useState } from 'react';
import axios from "axios"

const SignUp = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        dateOfBirth: '',
        location: '',   
        password: '',
        role:"",
        confirmPassword: ''
    });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match!');
            return;
         }
        axios.post(`${import.meta.env.VITE_URL}/Usercreate`, formData, {
            WithCredentials: true
        }, {
        }).then((res) => {
            localStorage.setItem("autharization_token",res.data. autharization_token)
        })
            .catch((error) => {
                console.error(error);   
            })
    };

    return (
        <form className="sign-up-form" onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
            <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
            <input type="date" name="dateOfBirth" onChange={handleChange} required />

            <input type="text" name="location" placeholder="Location" onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
            <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} required />
            <button type="submit">Register</button>
        </form>
    );
};

export default SignUp;