import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { loginUser } from '../../api/User';

const usernameConfig = {
    required: true,
    minLength: 3
}

export default function LoginForm() {



    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const [loading , setLoading ] = useState(false)

    const onSubmit = async ({ username }) => {
        setLoading(true);
        const [ error , user ] = await loginUser(username)
        console.log('Error: ', error )
        console.log('User', user)
        setLoading(false);

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
            </form>
        </>
    )
}