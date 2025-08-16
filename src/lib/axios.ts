import axios from 'axios'

const baseURL = import.meta.env.VITE_API_URL ?? ''

export const globalInstance = axios.create({
    baseURL: baseURL,
    timeout: 3000
})

