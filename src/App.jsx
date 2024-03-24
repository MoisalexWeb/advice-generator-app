import React from 'react'
import './App.scss'
import dividerImg from "/images/pattern-divider-mobile.svg"
import iconGenerate from "/images/icon-dice.svg"
import { useAdvice } from './hooks/useAdvice'

function App() {
    const {advice, id, getAdvice} = useAdvice()

    const newAdvice = () => {
        getAdvice()
    }

    return (
        <div className="advice">
            <h1 className="advice-title">ADVICE #<span>{id}</span></h1>
            <p className="advice-text">{advice}</p>
            <img src={dividerImg} alt=" " className="advice-divider" aria-hidden="true" />

            <button className="advice__btn" onClick={newAdvice}>
                <img src={iconGenerate} alt=" " className="advice__btn-img" aria-hidden="true" />
            </button>
        </div>
    )
}

export default App
