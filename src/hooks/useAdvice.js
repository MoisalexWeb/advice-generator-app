import { useEffect, useState } from "react"

const GET_ADVICE_URL = "https://api.adviceslip.com/advice"

export function useAdvice() {
    const [advice, setAdvice] = useState(null)
    const [id, setId] = useState(null)

    const getAdvice = async () => {
        const peticion = await fetch(GET_ADVICE_URL)
        const data = await peticion.json()
        setAdvice(data.slip.advice)
        setId(data.slip.id)
    }

    useEffect(() => {
        getAdvice()
    }, [])

    return {
        advice,
        id,
        getAdvice
    }
}