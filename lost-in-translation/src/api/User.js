
import { createHeaders } from "./Index"

const apiUrl = process.env.REACT_APP_API_URL

// function that cheks if there is a user in the dB
export const checkForUser = async (username) => {

    // If the network responds with 200 that means that the request was ok
    try {
        const response = await fetch(`${apiUrl}?username=${username}`)
        if (!response.ok) {
            throw new Error('Could not complete request!')
        }
        const data = await response.json()
        return [null, data]
    }
    catch (error) {
        return [error.message, []]
    }
}

// If the entered username does not exist 
//this function will create a user into the dB
export const createUser = async (username) => {
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: createHeaders(),
            body: JSON.stringify({
                username,
                translations: []
            })
        })
        if (!response.ok) {
            throw new Error('Could not create user with username ' + username)
        }
        const data = await response.json()
        return [null, data]
    }
    catch (error) {
        return [error.message, []]
    }
}

// loginUser function takes in the username and checks the dB
// if there is a user with that name
// If there isn't a user the function will trigger the creatUser function
// that will create a new user into the dB
export const loginUser = async (username) => {

    const [checkError, user] = await checkForUser(username)

    if (checkError !== null) {
        return [checkError, null]
    }

    if (user.length > 0) {
        return [null, user.pop()]
    }


    return await createUser(username)




}

// Checks for the user based on the current user id
export const userById = async(userId) => {
    try {
        const response = await fetch(`${apiUrl}/${userId}`)
        if(!response.ok) {
            throw new Error('Could not fetch user')
        }
        const user = await response.json()
        return [null, user]
    }
    catch(error) {
        return [error.message, null]
    }
}