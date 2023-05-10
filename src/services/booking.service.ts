import axios from "axios"

async function createBooking(booking: any) {
    try {
        const { data } = await axios.post("http://localhost:9000/booking/create", booking)
        return data
    } catch (error) {
        return null
    }
}

async function getBookingList() {
    try {
        const { data } = await axios.get("http://localhost:9000/booking/getUserBooking")
        return data
    } catch (error) {
        return []
    }
}

export {
    createBooking,
    getBookingList
}