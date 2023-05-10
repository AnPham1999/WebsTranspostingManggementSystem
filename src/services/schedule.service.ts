import axios from "axios";

interface ScheduleFilter {
    start_time: string
    start_point: string
    end_point: string
}

async function getAllSchedule() {
    try {
        const { data } = await axios.get("http://localhost:9000/schedule/getAll")
        return data
    } catch (error) {
        return []
    }
}

async function getDriverSchedules() {
    try {
        const { data } = await axios.get("http://localhost:9000/schedule/getByDriver")
        return data
    } catch (error) {
        return []
    }
}

async function searchSchedule(filter: ScheduleFilter) {
    try {
        const { data } = await axios.get(`http://localhost:9000/schedule/search?start_time=${filter.start_time}&start_point=${filter.start_point}&end_point=${filter.end_point}`)
        return data
    } catch (error) {
        return []
    }
}

export {
    getAllSchedule,
    searchSchedule,
    getDriverSchedules
}