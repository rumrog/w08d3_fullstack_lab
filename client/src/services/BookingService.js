const baseURL = 'http://localhost:3000/api/bookings/'

export default {
    getBookings(){
        return fetch(baseURL)
        .then(res => res.JSON())
    },

    postBookings(payload) {
        return fetch(baseURL, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'applocation/json'
            }
        })
        .then(res => res.json())
    },

    deleteBooking(id) {
        return fetch(baseURL + id, {
            method: 'DELETE'
        })
    },

    updateBooking(id, payload) {
        return fetch(baseURL + id, {
            method: 'PUT',
            body: JSON.stringify(payload)
        })
    }
    
}