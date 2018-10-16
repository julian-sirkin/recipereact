const apiUrl = 'http://localhost:4741'

export const signUp = credentials => {
    return fetch(apiUrl + '/edaman', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            recipe: {
            }
        })
    })
}