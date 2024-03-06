
import { trueStatement } from "./redux/features/counter/isLogged"
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export const validateToken = async () => {
    const response = await fetch(`${API_BASE_URL}/api/auth/validate-token`, {
        credentials: "include"
    })
    if(!response.ok){throw new Error(response.message)}
    // if (response.ok) {isLogged will be true statement}
    if(response.ok){trueStatement()}
    return response.json()
}