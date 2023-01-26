import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { loginUser } from '../../api/User';
import { storageSave } from '../../utils/storage';
import {useNavigate}  from 'react-router-dom'
import { useUser } from '../../context/UserContext';
import { STORAGE_KEY_USER } from '../../const/storageKeys';
import "../../styles/Login.css"
// Username configuration. It applies a minimum char length of 3 to a name
// and it requires a name to be input 
const usernameConfig = {
    required: true,
    minLength: 3
}

export default function LoginForm() {
    // hooks 
    const {register, handleSubmit, formState: { errors }} = useForm()
    const { user, setUser } = useUser() 
    const navigate = useNavigate()
    // When the continue button is clicked it shows the user a loading text
    // Local states 
    const [loading , setLoading ] = useState(false)
    const [ apiError, setApiError] = useState(null)

    // Navugates the user to the translation page after logging in
    useEffect(() => {
        if (user !== null ) {
            navigate('translation')
        }
        console.log( 'User has changed', user)
    }, [user, navigate ])  // Empty dependencies only run once

    // Event handler for onSubmit button 
    const onSubmit = async ({ username }) => {
        setLoading(true)
        const [ error , userResponse ] = await loginUser(username)
        if (error !== null) {
            setApiError(error)
        }
        if ( userResponse !== null ) {
            storageSave(STORAGE_KEY_USER, userResponse)
            setUser(userResponse)
        }
        setLoading(false)


    }

    // Error message for if a user inputs a name that is too short or try's to login without a username
    const errorMsg = (() => {
        if(!errors.username) {
            return null
        }

        if (errors.username.type === 'required') {
            return <span style={{margin: 20}}>Username is required</span>
        }

        if (errors.username.type === 'minLength') {
           return <span>Username is too shotrt! (Min. 3 characters) </span>
        }
    })()
    // Login form data gets passed through form input 
    // and sent to user API for requests
    return (
        <>
            
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <h3 id="login-label">Get started</h3>
                    <input
                        id="login-input"
                        type="text"
                        placeholder="What's your name?"
                        {...register("username", usernameConfig)} />
                   
                {errorMsg}
                
                </div>
                <button id="login-button" type="submit" disabled={loading}>Continue</button>
               
                { loading && <p> Logging in...</p>}
                { apiError && <p>{apiError} </p>}
            </form>
        </>
    )
}