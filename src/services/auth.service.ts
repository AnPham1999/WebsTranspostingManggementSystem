import axios from "axios";

async function signUp(account: any) {
    try {
        const { data } = await axios.post("http://localhost:9000/auth/signUp", account)
        if(!data) throw new Error

        return data
    } catch (error) {
        return null
    }
}

async function signIn(email:string, password: string) {
    try {
        const { data } = await axios.post("http://localhost:9000/auth/signIn", { email, password })
        if(!data) throw new Error

        return data
    } catch (error) {
        return null
    }
}

async function refreshToken(token: string) {
    try {
        const { data } = await axios.get(`http://localhost:9000/auth/refresh?refresh-token=${token}`)
        if(!data) throw new Error

        return data
    } catch (error) {
        return null
    }
}

async function getProfile() {
    try {
        const { data } = await axios.get(`http://localhost:9000/user/profile`)
        if(!data) throw new Error

        return data
    } catch (error) {
        return null
    }
}

export {
    signUp,
    signIn,
    refreshToken,
    getProfile
}