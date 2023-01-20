import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { loginUser } from '../../api/User';
import { storageSave } from '../../utils/storage';
import {useHistory}  from 'react-router-dom'
// Username configuration. It applies a minimum char length of 3 to a name
// and it requires a name to be input 
const usernameConfig = {
    required: true,
    minLength: 3
}

export default function LoginForm() {

    const {register, handleSubmit, formState: { errors }} = useForm()

    // When the continue button is clicked it shows the user a loading text
    // Local states 
    const [loading , setLoading ] = useState(false)
    const [ apiError, setApiError] = useState(null)

    useEffect(() => {

    }, [])  // Empty dependencies only run once

    // Event handler for onSubmit button 
    const onSubmit = async ({ username }) => {
        setLoading(true)
        const [ error , user ] = await loginUser(username)
        if (error !== null) {
            setApiError(error)
        }
        if ( user !== null ) {
            storageSave('translation-user', user)
        }
        setLoading(false)


    }

    const errorMsg = (() => {
        if(!errors.username) {
            return null
        }

        if (errors.username.type === 'required') {
            return <span>Username is required</span>
        }

        if (errors.username.type === 'minLength') {
           return <span>Username is too shotrt! (Min. 3 characters) </span>
        }
    })()
    // Login form data gets passed through form input 
    // and sent to user API for requests
    return (
        <>
            <h2>What's your name?</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset>
                    <label htmlFor="username">Username: </label>
                    <input
                        type="text"
                        placeholder="what's your name?"
                        {...register("username", usernameConfig)} />
                   
                {errorMsg}
                </fieldset>
                <button type="submit" disabled={loading}>Continue</button>
               
                { loading && <p> Logging in...</p>}
                { apiError && <p>{apiError} </p>}
            </form>
        </>
    )
}