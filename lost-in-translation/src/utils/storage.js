
// Local storage for storing users actions on the webpage
export const storageSave = ( key, value ) => {
    localStorage.setItem(key, JSON.stringify(value))
}

export const storageRead = (key ) => {
    const data = localStorage.getItem(key)
    if ( data ) {
        JSON.parse(data)
    }
    return null;
}