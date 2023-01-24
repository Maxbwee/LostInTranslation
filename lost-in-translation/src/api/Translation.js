import { createHeaders } from "./Index"

const apiUrl = process.env.REACT_APP_API_URL

export const translationAdd = async (user, translation) => {
    try {
        const response = await fetch(`${apiUrl}/${user.id}`, {
            method: 'PATCH',
            headers: createHeaders(),
            body: JSON.stringify({
                //username: user.username,
                translations: [...user.translations, translation]
            })
        })
        if(!response.ok) {
            throw new Error('Could not update order')
        }
        
        const result = await response.json()
        return [null, result]
    } catch(error) {
        return [error.message, null]
    }
}

export const translationClearHistory = (userId) => {

}
