import axios from "axios"

async function updateCustomerProfile(profile: any) {
    try {
        const { data } = await axios.put("http://localhost:9000/user/updateProfile/customer", profile)
        return data
    } catch (error) {
        return null
    }
}

async function updateDriverProfile(profile: any) {
    try {
        const { data } = await axios.put("http://localhost:9000/user/updateProfile/driver", profile)
        return data
    } catch (error) {
        return null
    }
}

export {
    updateCustomerProfile,
    updateDriverProfile
}