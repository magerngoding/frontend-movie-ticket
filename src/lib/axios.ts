import axios from 'axios'
import { getSession } from './utils'

const baseURL = import.meta.env.VITE_API_URL ?? ''

export const globalInstance = axios.create({
    baseURL: baseURL,
    timeout: 3000
})

export const privateInstance = axios.create({
    baseURL: baseURL,
    timeout: 3000
})

privateInstance.interceptors.request.use((config) => {
    const session = getSession()

    config.headers.Authorization = `JWT ${session?.token}`

    return config;
})

