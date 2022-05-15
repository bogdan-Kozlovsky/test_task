import axios from "axios";

export const instance = axios.create({
    // baseURL: process.env.REACT_APP_BASE_URL,
    baseURL: 'https://frontend-test-assignment-api.abz.agency/api/v1/',
})