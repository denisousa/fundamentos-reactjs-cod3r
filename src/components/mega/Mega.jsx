import React, { useState } from 'react'

export default props => {
    const [numbers, setNumbers] = useState(Array(props.qtdNumbers).fill(0))

    function generateUniqueNumbers(array) {
        const max = 60
        const min = 1
        const newNumber = parseInt(Math.random() * (max - min)) + min
        return array.includes(newNumber) ? generateUniqueNumbers(array) : newNumber
    }

    function generateNumbers() {
        const newArray = Array(props.qtdNumbers)
            .fill(0)
            .reduce(a => [...a, generateUniqueNumbers(a)], [])
            .sort((a, b) => a - b)
        setNumbers(newArray)
    }

    return (
        <div>
            <h3>Mega</h3>
            <h4>{numbers.join(' ')}</h4>
            <button onClick={generateNumbers}>Generate Numbers</button>
        </div>
    )
}